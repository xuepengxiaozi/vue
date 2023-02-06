<!-- pages-Home-Home.vue 首页面的朱组件 -->
<template>
    <div>
       <HomeHeader :city="doubleCity"></HomeHeader>
       <HomeSwiper :swiperList="swiperList"></HomeSwiper>
       <HomeIcon></HomeIcon>
       <HomeHot></HomeHot>
    </div>
</template>
<script>
    //将组件引入到主组件中
    import HomeHeader from './components/HomeHeader';
    import HomeSwiper from './components/homeSwiper';
    import HomeIcon from './components/homeIcon';
    import HomeHot from './components/homeHot';
    import { mapState,mapGetters} from 'vuex';
    //发送一个请求 ，请求mock数据 index.json
    //使用axios发送
    import axios from "axios"
    export default {
        name:'Home',
        data(){
            return{
                swiperList:"",
                iconList:"",
                lastCity:""
            }
        },
        components:{
            HomeHeader,
            HomeSwiper,
            HomeIcon,
            HomeHot
        },
        mounted(){
            //发送请求
            //get请求 
            //axios.get(url?data=1)
            console.log("home mounted")
           
        },
        activated(){
            //city 是当前需要请求的城市
            // 之前显示的城市 ，如果之前显示的城市==city，不去发送请求
            if(this.lastCity!=this.city){
                this.lastCity=this.city
                axios.get("/static/mock/index.json?city="+this.city)
                .then(res=>{
                    //拿到数据赋值给子元素
                    //console.log(res.data.data)
                    this.swiperList=res.data.data.swiperList
                    this.iconList=res.data.data.iconList
                })
            }
             
        },
        deactivated(){
            console.log(1)
        },
        computed:{
            ...mapState(["city"]),
            ...mapGetters(["doubleCity"])
        }
    }
</script>
<style>
    
</style>