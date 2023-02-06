//vuex中的state模块
let defaultCity="北京"
try{
    if(localStorage.getItem("city")){
        defaultCity=localStorage.getItem("city")
    }
}catch(e){
    console.log(e)
}
export default {
    city:defaultCity
}