<template>
    <div class="hot_wrap">
        <div class="title">
            <h3>本周热门榜单</h3>
            <p>
                全部榜单 >
            </p>
        </div>
        <div class="content">
            <ul :style="{width:1.1*hotList.length+'rem'}">
                <router-link tag="li" :to="{name:'Detail',params:{id:item.id}}" v-for="(item,index) in hotList" :key="item.id" >
                    <img :src="tags[index]" alt="" class="tag" v-if="index<3">
                    <img :src="item.imgUrl" alt="">
                    <p class="name">{{item.name}}</p>
                    <p class="price"><span>￥{{item.price}}</span>起</p>
                </router-link>
            </ul>
        </div>
    </div>
</template>
<script>
    export default {
        name:"hot",
        data(){
            return{
                tags:[
                    "https://imgs.qunarzz.com/piao/fusion/1710/ab/159673b63e6ca702.png",
                    "https://imgs.qunarzz.com/piao/fusion/1710/2d/36d0c4adaebbbc02.png",
                    "https://imgs.qunarzz.com/piao/fusion/1710/67/edc47ffef9e96b02.png"
                ],
                hotList:[
                    {
                        id:1,
                        imgUrl:"https://imgs.qunarzz.com/sight/p0/2207/96/96aeb3faa1cc7a42a3.water.jpg_250x250_1c51cf50.jpg",
                        name:"北京环球度假区",
                        price:"270"
                    },
                    {
                        id:2,
                        imgUrl:"https://imgs.qunarzz.com/sight/p0/1409/19/adca619faaab0898245dc4ec482b5722.jpg_250x250_0fc722c0.jpg",
                        name:"故宫博物院",
                        price:"370"
                    },
                    {
                        id:3,
                        imgUrl:"https://imgs.qunarzz.com/sight/p0/2005/39/3979f1867defec4ea3.water.jpg_250x250_e1b08a5e.jpg",
                        name:"八达岭长城",
                        price:"320"
                    },
                    {
                        id:4,
                        imgUrl:"https://imgs.qunarzz.com/sight/p0/1602/22/22b6ddfc418d0c3b90.water.jpg_250x250_52ece96c.jpg",
                        name:"颐和园",
                        price:"320"
                    },
                    {
                        id:5,
                        imgUrl:"https://imgs.qunarzz.com/sight/p0/2207/96/96aeb3faa1cc7a42a3.water.jpg_250x250_1c51cf50.jpg",
                        name:"北京环球度假区",
                        price:"270"
                    },
                    {
                        id:6,
                        imgUrl:"https://imgs.qunarzz.com/sight/p0/1409/19/adca619faaab0898245dc4ec482b5722.jpg_250x250_0fc722c0.jpg",
                        name:"故宫博物院",
                        price:"370"
                    },
                    {
                        id:7,
                        imgUrl:"https://imgs.qunarzz.com/sight/p0/2005/39/3979f1867defec4ea3.water.jpg_250x250_e1b08a5e.jpg",
                        name:"八达岭长城",
                        price:"320"
                    },
                    {
                        id:8,
                        imgUrl:"https://imgs.qunarzz.com/sight/p0/1602/22/22b6ddfc418d0c3b90.water.jpg_250x250_52ece96c.jpg",
                        name:"颐和园",
                        price:"320"
                    },
                     {
                        id:9,
                        imgUrl:"https://imgs.qunarzz.com/sight/p0/1602/22/22b6ddfc418d0c3b90.water.jpg_250x250_52ece96c.jpg",
                        name:"颐和园",
                        price:"320"
                    },
                    {
                        id:10,
                        imgUrl:"https://imgs.qunarzz.com/sight/p0/1602/22/22b6ddfc418d0c3b90.water.jpg_250x250_52ece96c.jpg",
                        name:"颐和园",
                        price:"320"
                    }
                ]
            }
        }
    }
</script>
<style scoped>
    .hot_wrap{
        /* 保持设置的宽度不变，自动计算 添加padding和border后的宽度 */
        box-sizing: border-box;
        width: 100%;
        padding-left:0.1rem;
    }
    .title{
        width: 100%;
        height:0.46rem;
        display:flex;
        justify-content: space-between;
        align-items: center;
    }
    h3{
        font-size: 0.16rem;
    }
    p{
        font-size:0.12rem
    }
    .content{
        width: 100%;
        overflow: scroll;
    }
   
    li{
        width:1rem;
        height:1.55rem;
        float: left;
        margin-right: 0.1rem;
        text-align: center;
        position: relative;
        padding-top: 3px;
    }
    li p{
        font-size:0.14rem
    }
    img{
        width: 100%;
        margin-bottom:0.1rem;
    }
    .name{
        margin-bottom: 0.05rem;
    }
    span{
        color:#ff8300
    }
    .tag{
        width:0.4rem;
        position:absolute;
        left:0;
        top:-3px;
    }
</style>