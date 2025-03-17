let a=1
const b=2
//var c=3   /******NEVER USE VAR  ********/

if(true){
    let a=10
    const b=20
    //var c=30
}

// console.log(a)
// console.log(b)
// //console.log(c)



/******** Hoisting basic **********/

console.log(one(3)) // executes without error
function one(num){
    return num+1
}
console.log(one(3))


console.log(two(3)) // throws erorr: Cannot access 'two' before initialization
const two=function(num){
    return num+2
}
console.log(two(3))