//store->Index.js 配置vuex
import Vue from 'vue'
import Vuex from "vuex"
import state from "./state"
import actions from "./action"
Vue.use(Vuex)
export default new Vuex.Store({
    state,
    actions,
    mutations: {
        changeCity(state, city) {
            state.city = city
            try {
                localStorage.setItem("city", city)
            } catch (e) {
                console.log(e)
            }

        }
    },
    //计算属性 vuex中的
    getters: {
        doubleCity(state) {
            return state.city
        }
    }
})