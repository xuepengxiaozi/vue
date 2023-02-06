<!-- pages-Home-Home.vue 首页面的朱组件 -->
<template>
    <div>
        <DetailBannerVue></DetailBannerVue>
        <commentVue></commentVue>
    </div>
</template>
<script>
    import DetailBannerVue from './components/DetailBanner.vue';
    import commentVue from './components/comment.vue';
    export default {
        activated(){
            //根据id去请求对应的数据
        },
        components:{
            DetailBannerVue,
            commentVue
        }
    }
</script>
<style>
    
</style>