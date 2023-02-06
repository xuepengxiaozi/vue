<template>
    <div class="header_wrap">
        <div class="title">
            城市选择
        </div>
        <input type="text" placeholder="请输入城市" v-model="searchChar">
        <div class="search" v-if="searchChar">
            <ul>
                <li v-for="item in searchList" :key="item.id">
                    {{item.name}}
                </li>
                <li v-if="searchList.length==0">
                    没有匹配的数据
                </li>
            </ul>
            
        </div>
    </div>
</template>
<script>
export default {
    props:["cities"],
    name:"cityheader",
    data(){
        return{
            searchChar:""
        }
    },
    computed:{
        searchList(){
            let result=[]
            for(let key in this.cities){
                this.cities[key].forEach(item=>{
                    if(item.name.includes(this.searchChar)){
                        result.push(item)
                    }
                })
            }
            return result
        }
    }
}
</script>
<style scoped>
    .header_wrap{
        width: 100%;
        height:0.74rem;
        background-color: #00bcd4;
        text-align: center;
        padding-top:0.15rem;
        box-sizing:border-box;
        font-size:0.16rem;
    }
    .title{
        color:white;
        margin-bottom:0.05rem;
    }
    input{
        width:90%;
        height:0.28rem;
        border-radius: 0.04rem;
        text-align: center;
        
    }
    .search{
        position:absolute;
        left:0;
        right:0;
        top:0.74rem;
        bottom:0;
        z-index:2;
        background-color: #fff;
    }
</style>