<template>
    <div>
         <div class="gallery" v-if="show" @click="changeShow()">
            <swiper :options="swiperOptions" class="swiper_wrap">
                <swiper-slide v-for="(item,index) in gallaryImgs" :key="index">
                    <img :src="item" alt="">
                </swiper-slide>
                <div class="swiper-pagination" slot="pagination"></div>
            </swiper>
        </div>
    </div>
</template>
<script>
    export default {
        props:["gallaryImgs","show"],
        data(){
            return{
                swiperOptions:{
                    pagination:".swiper-pagination",
                    paginationType:"fraction",
                    effect:"coverflow",
                    coverflow: {
                        rotate: 0,
                        stretch: 10,
                        depth: 60,
                        modifier: 2,
                        slideShadows : true
                    }
                },
               
               
            }
        },
       methods:{
         changeShow(){
            this.$emit("changeShow")
         }
       }
    }
</script>
<style scoped>
     img{
        width:100%
    }
    .swiper_wrap{
        width: 100%;
        overflow: visible;
    }
    .gallery{
        position:absolute;
        left:0;
        right:0;
        top:0;
        bottom:0;
        background-color: black;
        display: flex;
        flex-direction: column;
        justify-content: center;
        overflow: hidden;

    }
    .swiper-pagination{
        color:white;
        font-size:0.12rem;
        bottom:-1.3rem
    }
</style>