<template>
  <v-app>
    <app-bar @showDrawer="showDrawer = true"></app-bar>

    <sidebar-navigation
      v-if="!$_isSmAndUp"
      v-model="showDrawer"
    ></sidebar-navigation>

    <v-content>
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>
import AppBar from '@/components/AppBar.vue';
import SidebarNavigation from '@/components/navigation/SidebarNavigation.vue';

import displayMixin from '@/mixins/display-mixin';

export default {
  name: 'App',
  mixins: [displayMixin],
  components: {
    AppBar,
    SidebarNavigation,
  },
  data() {
    return {
      showDrawer: false,
    };
  },
};
</script>
