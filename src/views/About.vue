<template>
  <div class="about">
    <h1>This is an about page</h1>
    <VAlert>Hey, I'm an alert!</VAlert>
  </div>
</template>

<script>
import { VAlert } from 'vuetensils';

export default {
  components: {
    VAlert,
  },
};
</script>
