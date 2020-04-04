<template>
    <li class="nav-item mb-2">
        <router-link
                :to="link.path"
                @click.native="linkClick"
                class="nav-link flex-column text-center"
                :target="link.target"
                :href="link.path">
            <template>
                <svg-icon v-if="link.svg" :icon="link.svg"></svg-icon>
                <i v-if="link.icon" :class="link.icon"></i>
                <span class="mt-2 nav-link-text">{{ link.name }}</span>
            </template>
        </router-link>
    </li>
</template>
<script>
  export default {
    name: 'sidebar-item',
    props: {
      link: {
        type: Object,
        default: () => {
          return {
            name: '',
            path: '',
            children: []
          };
        },
        description:
          'Sidebar link. Can contain name, path, icon and other attributes. See examples for more info'
      }
    },
    inject: {
      autoClose: {
        default: true
      }
    },
    data() {
      return {
        children: [],
        collapsed: true
      };
    },
    methods: {
      linkClick() {
        if (
          this.autoClose &&
          this.$sidebar &&
          this.$sidebar.showSidebar === true
        ) {
          this.$sidebar.displaySidebar(false);
        }
      }
    }
  };
</script>
