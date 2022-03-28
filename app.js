new Vue({
el:'#app',
data(){
    return{
       age:18,
       a:0,
       b:0
        
    }
},
methods:{
//     addToA(){
//         console.log("addToA Clicked")
// this.a=this.age
//     },
//     addToB(){
//         console.log("addToB Clicked")
//        this.b=this.age 
//     }



},
computed:{

    addToA(){
        console.log("addToA Clicked")
this.a=this.age
    },
    addToB(){
        console.log("addToB Clicked")
       this.b=this.age 
    }
}
})