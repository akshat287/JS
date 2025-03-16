// singleton
//Object.create


// object literals  //

const sym=Symbol("A1")

const Juser={
    name:"Akshat",
    [sym]:"a1",
    "full name":"Akshat Tiwari",
    age:20,
    email:"tiwariakshat@gmail.com",
    city:"Indore",
    isOkay: false,
    dayOff:["tuesday","saturday","sunday"]
}

// console.log(Juser.email)
// console.log(Juser["email"])
// console.log(Juser["full name"])
// console.log(Juser[sym])

Juser.isOkay=true;
//Object.freeze(Juser)// prevents from changes
Juser.isOkay=false;
//console.log(Juser)

Juser.greeting=function(){
    console.log("Hello world")
}
console.log(Juser.greeting())

Juser.greet2=function(){
    console.log(`hello bhai, ${this.name}`)
}
console.log(Juser.greet2())