import Vue from 'vue'
import VueRouter from 'vue-router';          // 追記 
import App from './App.vue'
import Main from './components/Main.vue';    // 追記
import Quiz from './components/Quiz.vue';     // 追記
import Result from './components/Result.vue'; // 追記
 
// ルータ設定 追記
Vue.use(VueRouter);
const router = new VueRouter({
  routes: [
    {
      path: '/main',
      component: Main
    },
    {
      path: '/quiz',
      component: Quiz
    },
    {
      path: '/result',
      component: Result
    },
    {
      path: '*',
      redirect: '/main'
    }
  ]
});
 
new Vue({
  el: '#app',
  router, // 追記
  render: h => h(App)
});