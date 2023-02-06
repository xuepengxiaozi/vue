<template>
    <div class="list_wrap" ref="scroll">
        <div>
            <div class="map">
                <div class="title">
                    您的位置
                </div>
                <div class="content">
                    <div class="item">
                        {{city}} 
                    </div>
                </div>
            </div>
            <div class="hot">
                <div class="title">
                    热门城市
                </div>
                <div class="content">
                    <div class="item" v-for="(item,index) in hotList" :key="index" @click="City(item)">
                        {{item}}
                    </div>
                </div>
            </div>
            <div class="list">
                <div v-for="(item,index) in cities" :key="index" :ref="index">
                    <div class="title">
                        {{index}}
                    </div>
                    <ul>
                        <li v-for="city in item " :key="city.id" @click="City(city.name)">
                            {{city.name}}
                        </li>
                    </ul>
                </div>
            </div>

        </div>
      
    </div>
</template>
<script>
    import Bscroll from "better-scroll"
    //mapState ,mapMutations,mapActions 在vuex
    import { mapState,mapMutations } from "vuex"
    export default {
        props:["cities","letter"],
        data(){
            return {
                hotList:["北京","三亚","上海","西安"]
            }
        },
        mounted(){
            this.$nextTick(()=>{
                this.Bscroll=new Bscroll(this.$refs.scroll,{
                    startY:true,
                    freeScroll:true,
                    probeType:3,
                    useTransition:false
                })
                this.Bscroll.on("scroll",(pos)=>{
                    //y
                    let y=Math.abs(pos.y)
                    for(let key in this.$refs){
                        if(key=="scroll"){
                            continue
                        }
                        if(y<this.$refs[key][0].offsetTop+this.$refs[key][0].offsetHeight){
                         
                            this.$emit("changeY",key)
                            break
                        }
                    }
                })
            })
        
        },
        methods:{
            backTop(){
              
            },
            City(city){
                this.changeCity(city)
                this.$router.push("/")
              
            },
            ...mapMutations(["changeCity"])
        },
        watch:{
            letter(){
              
                console.log("watch"+this.letter)
                this.Bscroll.scrollToElement(this.$refs[this.letter][0])
            }
        },
        computed:{
            ...mapState(["city"])
        }
    }
</script>
<style scoped>
    .list_wrap{
        font-size:0.14rem;
        position:absolute;
        left:0;
        right:0;
        top:0.74rem;
        bottom:0;
        overflow: hidden;
    }
    .title{
        height:0.24rem;
        line-height: 0.24rem;
        text-indent:0.1rem;
        background-color: #eee;
        border-bottom:1px solid black;
    }
    .content{
        padding:0.1rem;
        box-sizing:border-box;
        overflow: hidden;
    }
    .item{
        padding:0.08rem 0.15rem;
        float: left;
        border:1px solid #00bcd4;
        border-radius: 8px;
        margin:0 0.1rem 0.1rem 0;
    }
    li{
        height:0.24rem;
        line-height: 0.24rem;
        text-indent:0.1rem;
        border-bottom:1px solid #eee;
    }
</style>