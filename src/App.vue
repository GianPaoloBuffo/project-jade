<template>
  <v-app>
    <app-bar @showDrawer="showDrawer = true"></app-bar>

    <v-content>
      <router-view></router-view>
    </v-content>

    <mobile-navigation v-if="!$_isSmAndUp"></mobile-navigation>
  </v-app>
</template>

<script>
import AppBar from '@/components/AppBar.vue';
import MobileNavigation from '@/components/navigation/SidebarNavigation.vue';

import displayMixin from '@/mixins/display-mixin';

export default {
  name: 'App',
  mixins: [displayMixin],
  components: {
    AppBar,
    MobileNavigation,
  },
  data() {
    return {
      showDrawer: false,
    };
  },
};
</script>
