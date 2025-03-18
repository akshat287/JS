// Immediately Invoked Function Expressions (IIFE)

(function fun(){
    console.log("CONNECTED")
})();    // here semicolon is needed

// (function fun2(){
//     console.log("CONNECTED AGAIN")
// })()

((name)=>{
    console.log(`Connected again ${name}`)
})('akshat')