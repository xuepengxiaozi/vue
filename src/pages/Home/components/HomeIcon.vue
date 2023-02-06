<template>
    <div class="icon_wrap">
        <swiper :options="swiperOption">
            <swiper-slide v-for="(item,index) in icons" :key="index">
                 <ul>
                    <li v-for="icon in item" :key="icon.id">
                        <img :src="icon.imgUrl" alt="">
                        <p>{{icon.desc}}</p>
                    </li>
                 </ul>
            </swiper-slide>
            <div class="swiper-pagination" slot="pagination" v-if="icons.length>1"></div>
        </swiper>
    </div>
</template>
<script>
//8个图标 1页 
//二维数组： 将一维数组内容，进行分组存储时，想到二维数组
export default {
    name:"icon",
    data(){
        return {
            swiperOption:{
                pagination:".swiper-pagination"
            },
            iconList: [{
                "id": "0001",
                "imgUrl": "http://img1.qunarzz.com/piao/fusion/1611/54/ace00878a52d9702.png",
                "desc": "景点门票"
                }, {
                    "id": "0002",
                    "imgUrl": "http://img1.qunarzz.com/piao/fusion/1711/df/86cbcfc533330d02.png",
                    "desc": "滑雪季"
                }, {
                    "id": "0003",
                    "imgUrl": "http://img1.qunarzz.com/piao/fusion/1710/a6/83f636bd75ae6302.png",
                    "desc": "泡温泉"
                }, {
                    "id": "0004",
                    "imgUrl": "http://img1.qunarzz.com/piao/fusion/1611/35/2640cab202c41b02.png",
                    "desc": "动植园"
                }, {
                    "id": "0005",
                    "imgUrl": "http://img1.qunarzz.com/piao/fusion/1611/d0/e09575e66f4aa402.png",
                    "desc": "游乐园"
                }, {
                    "id": "0006",
                    "imgUrl": "http://img1.qunarzz.com/piao/fusion/1611/59/569d3c096e542502.png",
                    "desc": "必游榜单"
                }, {
                    "id": "0007",
                    "imgUrl": "http://img1.qunarzz.com/piao/fusion/1611/17/4bd370f3eb1acd02.png",
                    "desc": "演出"
                }, {
                    "id": "0008",
                    "imgUrl": "http://img1.qunarzz.com/piao/fusion/1611/7f/b1ea3c8c7fb6db02.png",
                    "desc": "城市观光"
                },
                , {
                    "id": "0009",
                    "imgUrl": "http://img1.qunarzz.com/piao/fusion/1611/7f/b1ea3c8c7fb6db02.png",
                    "desc": "城市观光"
                }]
            }
      
       
        },
    computed:{
         icons(){
            //如何将一个一维数组 转化为二维数组
            // 8个一组
            let result=[]//创建一个空数组
            this.iconList.forEach((item,index)=>{
                //item  index 元素的索引值
                let i=parseInt(index/8) //当前元素对应的组 
                if(!result[i]){ //当前如果没有对应的组
                    result[i]=[]
                }
                result[i].push(item)
            })
            return result
         }   
    }
}
</script>
<style scoped>
    .icon_wrap{
        width: 100%;
        overflow: hidden;
    }
    .swiper-container{
        padding-bottom:0.1rem
    }
    li{
        width:25%;
        height: 0.84rem;
        float: left;
        font-size:0.14rem;
        text-align: center;
    }
    img{
        width:0.45rem;
        margin:10px 0;
    }
    .swiper-pagination{
        bottom:-4px;
    }
</style>