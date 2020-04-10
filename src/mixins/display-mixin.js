export default {
  computed: {
    $_isSmAndUp() {
      return this.$vuetify.breakpoint.smAndUp;
    },
  },
};
