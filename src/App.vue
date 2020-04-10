<template>
  <v-app>
    <v-app-bar
      app
      color="white"
      elevate-on-scroll
    >
      <div class="d-flex align-center">
        Story Gallery
      </div>

      <v-spacer></v-spacer>

      <app-navigation></app-navigation>
    </v-app-bar>

    <v-content>
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>
import AppNavigation from '@/components/AppNavigation.vue';

export default {
  name: 'App',
  components: { AppNavigation },
};
</script>
