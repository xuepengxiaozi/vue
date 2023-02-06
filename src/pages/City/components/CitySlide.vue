<template>
    <div class="slide_wrap">
        <ul>
            <li v-for="(item,index) in cities" :key="index" @click="change(index)" :class="{active:y==index}">
                {{index}}
            </li>
        </ul>
    </div>
</template>
<script>
    export default {
        props:["cities","y"],
        name:"cityslide",
        methods:{
            change(index){
                this.$emit("changeLetter",index)
                this.$emit("changeY",index)
            }
        }
    }
</script>
<style scoped>
    .slide_wrap{
        font-size:0.1rem;
        font-weight: bold;
        color:#00bcd4;
        position:fixed;
        right:0.05rem;
        top:50%;
        transform:translate(0,-50%)
    }
    li{
         margin-top:0.06rem;
    }
    ul{
        margin-top: 1rem;
    }
    .active{
        color:red
    }
</style>