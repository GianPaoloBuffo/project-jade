<template>
  <v-app-bar
    app
    color="white"
    elevate-on-scroll
  >
    <div class="d-flex align-center">Story Gallery</div>

    <template v-if="$_isSmAndUp">
      <v-spacer></v-spacer>
      <toolbar-navigation></toolbar-navigation>
    </template>
  </v-app-bar>
</template>

<script>
import ToolbarNavigation from '@/components/navigation/ToolbarNavigation.vue';

import displayMixin from '@/mixins/display-mixin';

export default {
  name: 'AppBar',
  mixins: [displayMixin],
  components: { ToolbarNavigation },
};
</script>
