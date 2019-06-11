import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./registerServiceWorker";
import axios from "axios";
import VueAxios from 'vue-axios'

Vue.use(VueAxios, axios);
//全局配置axios 接口地址
axios.defaults.baseURL = 'https://wd3764681591vrmzed.wilddogio.com' 
Vue.config.productionTip = false;


//自定义指令
//bind 只会在指令和 DOM 节点绑定的时候才会被调用 钩子函数
// Vue.directive('rainbow', {
  //   bind(el, binding, vnode) {
    //     el.style.color = "#" + Math.random().toString(16).slice(2, 8)
    //   }
    // })
// Vue.directive()
//自定义过滤器
// Vue.filter("to-uppercase", function (value) {
//   return  value.toUpperCase();
// })

// Vue.filter("snippet",function(value){
//   return  value.slice(0,100) + "...";
// })

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");