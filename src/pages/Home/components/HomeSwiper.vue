<template>
    <div class="swiper_wrap">
        <swiper :options="swiperOption" :autoplay="5000">
            <swiper-slide v-for="item in swiperList" :key="item.id" >
                <img :src="item.imgUrl" alt="">
            </swiper-slide>
            <div class="swiper-pagination" slot="pagination"></div>
        </swiper>
    </div>
</template>
<script>
    export default {
        props:["swiperList"],
        name:"homeSwiper",
        data(){
            return{
                swiperOption:{
                    loop:true,
                    pagination:".swiper-pagination",
                    autoplay:500
                }
            }
        }
    }
</script>
<!-- scoped 规定当前样式 在当前组件内部生效， 增加当前组件样式的权重值 
     scoped 无法穿透内部组件
     >>> 穿透符-->
<style scoped>
    .swiper_wrap{
        width: 100%;
        height:1.18rem;
    }
    img{
        width: 100%;
    }
    .swiper-pagination{
        bottom:0
    }
    .swiper_wrap>>>.swiper-pagination-bullet-active{
        background-color: white;
    }
</style>