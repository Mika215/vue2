new Vue({
el:'#app',
data(){
    return{
        message:'Welcome to Vuejs2 with Mika & Ninja',
        time:"morning",
        objective:"Master Vue2",
        dueDate:"28-03-2022",
        name:"Michael",
        website:"https://dallolmart.herokuapp.com/",
        webSiteAsHtmlElement:'<a href="https://dallolmart.herokuapp.com/">My Website as HTML</a>'
        
    }
},
methods:{
    greet(time){
        this.name='Benoit'; //to reassign a value wich has been declared above inside the data
return 'Good' + ' ' + time + ' ' + this.name;



    }
}
})