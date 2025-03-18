const user={
    name:"akshat",
    price:999,
    
    welcome: function(){
        console.log(`${this.name}, welcome to our website.!!`)
        console.log(this)
    }
}

// user.welcome()
// user.name="aditi"
// user.welcome()

// console.log(this)

function fun(){
    let name="kishika"
    console.log(this.name)
}

// fun()

/**************** Arrow Function **************/ 

const fun=()=>{
    let name="kishika"
    console.log(this.name)
}
// fun()

// const add2=(num1,num2)=>{  //Implicit return
//     return num1+num2
// }

const add2=(num1,num2)=> num1+num2  // explicit return

console.log(add2(2,4))





