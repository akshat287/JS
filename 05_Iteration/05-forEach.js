const coding=['js','ruby','cpp','java','c','python']

// coding.forEach(function(item){
//     console.log(item)
// })

// coding.forEach((item)=>{
//     console.log(item)
// })

// function print(item){
//     console.log(item)
// }
// coding.forEach(print)

// coding.forEach((item,idx,arr)=>{
//     console.log(item,idx,arr)
// })

const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    },
]

myCoding.forEach( (item) => {
    
    console.log(item.languageName);
} )