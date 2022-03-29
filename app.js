new Vue({
el:'#app',
data(){
    return{
      available:false,

        
    }
},
methods:{
setAvailability(){
    console.log(this.available)
    this.available=!this.available
}

}
})