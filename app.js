new Vue({
el:'#app',
data(){
    return{
       name:"",
       age:null,
       title:"",
       description:"",
    EventModifiers:'<a href="https://vuejs.org/guide/essentials/event-handling.html#key-modifiers">Readmore about Event Modifiers</a>',

        
        
    }
},
methods:{
    logName(){

    console.log("Enter key ditected for name input")
     
    },
   logAge(){
    console.log("Ctrl + enter key ditected for age input")
    }
  
}
})