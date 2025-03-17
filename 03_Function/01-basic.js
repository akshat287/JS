function sayMyName(){
    console.log("F")
    console.log("U")
    console.log("N")
    console.log("K")
    console.log("I")
    console.log("U")
}
//sayMyName()

// function add(num1,num2){
//     console.log(num1+num2)
// }
// add(22,47)

function add(num1,num2){
    return (num1+num2)
}
const res=add(34,5)
//console.log(res)

function login(username){
    if(!username){                          // if no argument is given
        return `please enter username`  
    }
    return `${username} just logged in`
}
console.log(login())

/******** OR ************/

function login1(username="aditya"){
    return `${username} just logged in`
}
console.log(login1())