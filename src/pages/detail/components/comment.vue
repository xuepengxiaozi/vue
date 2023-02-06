<template>
    <div>
        123
        <button @click="changeShow()">显示画廊</button>
        <gallery :gallaryImgs="gallaryImgs" :show="show" @changeShow="changeShow()"></gallery>
    </div>
</template>
<script>
    import gallery from "@/common/gallery"

    export default {
        data(){
            return{
                    gallaryImgs: ["http://img1.qunarzz.com/sight/p0/201404/23/04b92c99462687fa1ba45c1b5ba4ad77.jpg_800x800_70debc93.jpg", "http://img1.qunarzz.com/sight/p0/1709/76/7691528bc7d7ad3ca3.img.png_800x800_9ef05ee7.png","http://img1.qunarzz.com/sight/p0/201404/23/04b92c99462687fa1ba45c1b5ba4ad77.jpg_800x800_70debc93.jpg", "http://img1.qunarzz.com/sight/p0/1709/76/7691528bc7d7ad3ca3.img.png_800x800_9ef05ee7.png","http://img1.qunarzz.com/sight/p0/201404/23/04b92c99462687fa1ba45c1b5ba4ad77.jpg_800x800_70debc93.jpg", "http://img1.qunarzz.com/sight/p0/1709/76/7691528bc7d7ad3ca3.img.png_800x800_9ef05ee7.png"],
                    show:false
            }
        },
        components:{
            gallery
        },
        methods:{
            changeShow(){
                this.show=!this.show
            }
        }
    }
</script>
<style scoped>

</style>>