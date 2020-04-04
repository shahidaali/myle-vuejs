/*!

=========================================================
* Vue Argon Dashboard - v1.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-dashboard
* Copyright 2019 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/argon-dashboard/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './registerServiceWorker'
import ArgonDashboard from './plugins/argon-dashboard'
import { store } from './store';
import axios from './axios';

Vue.config.productionTip = false

router.beforeEach((to, from, next) => {
  // redirect to login page if not logged in and trying to access a restricted page
  const publicPages = ['/login', '/register'];
  const authRequired = !publicPages.includes(to.path);
  const loggedIn = localStorage.getItem('user');

  if (authRequired && !loggedIn) {
    return next('/login');
  }

  next();
})

Vue.use(ArgonDashboard)
new Vue({
  router,
  store,
  axios,
  render: h => h(App)
}).$mount('#app')
