new Vue({
  el: "#app",
  data() {
    return {
      outPut: "Sushi",
    };
  },
  methods: {
    setOutPut() {
      // console.log(this.$refs.input.value);
      this.outPut = this.$refs.input.value;
            console.log(this.$refs.main.innerText);

    },
  },
});
