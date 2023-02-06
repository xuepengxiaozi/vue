<template>
    <div class="header_wrap">
        <div class="back">
            <i class="icon iconfont icon-31fanhui1"></i>
        </div>
        <div class="input_wrap">
            <div class="input">
                <i class="icon iconfont icon-fangdajing"></i>
                输入城市/景点/游玩主题
            </div>
        </div>
       
        <div class="city">
            <router-link to="/city">
                {{city}}
                <i class="icon iconfont icon-sanjiao"></i>
            </router-link>
            
        </div>
      
      
    </div>
</template>
<script>
    
    export default {
        props:["city"]
    }
</script>
<!-- scoped:样式的私有化 -->
<style scoped>
   .header_wrap{
        width: 100%;
        height: 0.44rem;
        background-color: #00bcd4;
        display: flex;
   }
   .back{
        width:40px;
        text-align: center;
        line-height:0.44rem;
   }
   .icon-31fanhui1{
        font-size:24px;
        color:white;
   }
   .input_wrap{
        flex:1;
        display: flex;
        align-items: center;
   }
   .input{
        width:100%;
        height:0.3rem;
        background-color: white;
        border-radius: 0.02rem;
        font-size:0.14rem;
        color:#e6e9ef;
        line-height:0.3rem;
        text-indent:0.1rem
   }
   .city{
        min-width:80px;
        font-size:0.14rem;
        text-align: center;
        line-height: 0.44rem;
   }
   .city a{
       color:white;
   }
</style>