new Vue({
el:'#app',
data(){
    return{
        age:18,
        EventModifiers:'<a href="https://vuejs.org/guide/essentials/event-handling.html#key-modifiers">Readmore about Event Modifiers</a>',
        x:0,
        y:0
        
        
    }
},
methods:{
    add(){
        if(this.age<100){
            return this.age+=1;
        }else{
            return this.age="101 Years? Are you an Aline?"
        }
     
    },
    minus(){
        if(this.age>0){
            this.age-=1
        }
       
    },
    doubleCurrent(){
       return this.age*=2
    },
    resetAge(){
        return this.age=18
    },
    setXY(e){

        this.x=e.offsetX;
        this.y=e.offsetY;
    }
    
}
})