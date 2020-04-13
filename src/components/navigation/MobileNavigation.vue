<template>
  <v-bottom-navigation
    app
    fixed
    grow
  >
    <v-btn :to="{ name: 'Artists' }">
      <span>Artists</span>
      <v-icon>mdi-palette</v-icon>
    </v-btn>

    <v-btn :to="{ name: 'Profile' }">
      <span>Me</span>
      <v-icon>mdi-account</v-icon>
    </v-btn>

    <v-btn :to="{ name: 'Buyers' }">
      <span>Buyers</span>
      <v-icon>mdi-wallet-giftcard</v-icon>
    </v-btn>
  </v-bottom-navigation>
</template>

<script>
export default {
  name: 'MobileNavigation',
};
</script>
