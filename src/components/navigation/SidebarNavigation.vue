<template>
  <v-navigation-drawer
    :value="value"
    @input="$emit('input', $event)"
    absolute
    temporary
  >
    <v-list nav dense>
      <v-subheader>Story Gallery</v-subheader>
      <v-divider></v-divider>

      <v-list-item-group>
        <v-list-item :to="{ name: 'Profile' }">
          <v-list-item-title>Me</v-list-item-title>
        </v-list-item>

        <v-list-item :to="{ name: 'Artists' }">
          <v-list-item-title>Artists</v-list-item-title>
        </v-list-item>

        <v-list-item :to="{ name: 'Buyers' }">
          <v-list-item-title>Buyers</v-list-item-title>
        </v-list-item>
      </v-list-item-group>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
export default {
  name: 'SidebarNavigation',
  props: {
    value: {
      type: Boolean,
      required: true,
    },
  },
};
</script>
