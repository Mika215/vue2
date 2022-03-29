Vue.component("Greetings", {
  template: '<p>Hello world I am {{name}}. <button @click="changeName">Change Name</button></p>',
  data(){
    return{
      name:'ReactJS'
    }
  },
  methods:{
 changeName(){
   this.name='VueJs'
 }
  }
});

new Vue({
  el: "#app-one",
});

new Vue({
  el: "#app-two",
});
