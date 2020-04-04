<template>
  <div class="wrapper" :class="{ 'nav-open': $sidebar.showSidebar }">
    <side-bar
      :background-color="sidebarBackground"
      short-title="Myle"
      title="Myle"
    >
      <template slot="links">
        <li class="nav-item">
          <router-link to="/login" class="font-weight-bold nav-link flex-column text-center text-uppercase">
            <img src="img/myle/img-upload.png" class="img-fluid rounded-circle">
            <span class="mt-2 nav-link-text">Logout</span>
          </router-link>
        </li>
        <sidebar-item :link="{name: 'Doscover', svg: 'discover', path: '/discover'}"/></sdebar-item>
        <sidebar-item :link="{name: 'Likes', svg: 'likes', path: '/likes'}"/></sdebar-item>
        <sidebar-item :link="{name: 'Post Events', svg: 'events', path: '/event-new'}"/></sdebar-item>

      </template>
    </side-bar>
    <div class="main-content px-0 py-6" :data="sidebarBackground">
      <!-- <dashboard-navbar></dashboard-navbar> -->

      <div @click="toggleSidebar">
        <fade-transition :duration="200" origin="center top" mode="out-in">
          <!-- your content here -->
          <router-view></router-view>
        </fade-transition>
        <content-footer v-if="!$route.meta.hideFooter"></content-footer>
      </div>
    </div>
  </div>
</template>
<script>
  import DashboardNavbar from './DashboardNavbar.vue';
  import ContentFooter from './ContentFooter.vue';
  import { FadeTransition } from 'vue2-transitions';

  export default {
    components: {
      DashboardNavbar,
      ContentFooter,
      FadeTransition
    },
    data() {
      return {
        sidebarBackground: 'vue' //vue|blue|orange|green|red|primary
      };
    },
    methods: {
      toggleSidebar() {
        if (this.$sidebar.showSidebar) {
          this.$sidebar.displaySidebar(false);
        }
      }
    }
  };
</script>
<style lang="scss">
</style>
