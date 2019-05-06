import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui';
// import  ElementUI from "./frameWorks/element-ui/src";
// let ElementUI = require('./frameWorks/element-ui/src/index')
import 'element-ui/lib/theme-chalk/index.css';
import './assets/css/reset.css'
import Axios from 'axios'
import $ from './assets/js/jquery-2.1.1.min.js'
// import * as ElementUI from './frameWorks/element-ui/lib/index.js'
// import './assets/css/main.less';
// import PageControllor from './extendUtils/pageControllor'
// Vue.prototype.PageControllor = PageControllor;
window.Axios = Axios;
Vue.config.productionTip = false;
Vue.use(ElementUI);

let vm = new Vue({
	router,
	store,
	render: h => h(App)
}).$mount('#app');
router.beforeEach((to, from, next) => {
	// ${//to and from are Route Object,next() must be called to resolve the hook}
    // console.log(to);
    // console.log(vm.$route);
    // let roters = vm.$router.options.routers;
    // console.log(vm.$router);
    // if(to.path){
    //     console.log();
    // }
	// console.log(from);
	// console.log(next);
	next();
});