new Vue({
  el: "#app",
  data() {
    return {
      logedIn: false,
    };
  },
  methods: {
    setLogin() {
      console.log(this.logedIn);
      this.logedIn = !this.logedIn;
    },
  },
});
