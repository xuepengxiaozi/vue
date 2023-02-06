<template>
    <div>
        <img src="http://img1.qunarzz.com/sight/p0/2207/96/96aeb3faa1cc7a42a3.water.jpg_600x330_0a2cfc24.jpg" alt="" @click="changeShow()">
        <gallery :gallaryImgs="gallaryImgs" :show="show" @changeShow="changeShow"></gallery>
    </div>
</template>
<script>
    import gallery from "@/common/gallery"
    export default {
        data(){
            return{
                gallaryImgs: ["http://img1.qunarzz.com/sight/p0/201404/23/04b92c99462687fa1ba45c1b5ba4ad77.jpg_800x800_70debc93.jpg", "http://img1.qunarzz.com/sight/p0/1709/76/7691528bc7d7ad3ca3.img.png_800x800_9ef05ee7.png","http://img1.qunarzz.com/sight/p0/201404/23/04b92c99462687fa1ba45c1b5ba4ad77.jpg_800x800_70debc93.jpg", "http://img1.qunarzz.com/sight/p0/1709/76/7691528bc7d7ad3ca3.img.png_800x800_9ef05ee7.png","http://img1.qunarzz.com/sight/p0/201404/23/04b92c99462687fa1ba45c1b5ba4ad77.jpg_800x800_70debc93.jpg", "http://img1.qunarzz.com/sight/p0/1709/76/7691528bc7d7ad3ca3.img.png_800x800_9ef05ee7.png"],
                 show:false,
            }
        },
        methods:{
            changeShow(){
                this.show=!this.show
            }
        },
        deactivated(){
           this.show=false
        },
        components:{
            gallery
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