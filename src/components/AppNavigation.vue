<template>
  <div>
    <v-btn
      text
      class="mr-2"
      :to="{ name: 'Profile' }"
    >
      <span>Me</span>
    </v-btn>
    <v-btn
      text
      class="mr-2"
      :to="{ name: 'Artists' }"
    >
      <span>Artists</span>
    </v-btn>
    <v-btn
      text
      :to="{ name: 'Buyers' }"
    >
      <span>Buyers</span>
    </v-btn>
  </div>
</template>

<script>
export default {
  name: 'AppNavigation',
};
</script>
