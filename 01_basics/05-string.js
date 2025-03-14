const name="akshat"
const age=20
// console.log("Im " + name)


//... String Interpolation ...//
console.log(`heloo my name is ${name.toUpperCase()} and Im ${age} year old`)

//...... An-other way to define ......//
// this give access to all in-built string functions

const xyz=new String("aksh-ikad-iti")

console.log(xyz)
console.log(xyz.length)
console.log(xyz[8])

const s1=xyz.substring(3,11)
console.log(s1)

const s2=xyz.slice(-6,11)
console.log(s2)

const url="https://google.com/akshat%230tiwari"
console.log(url.replace('%2','--'))
console.log(url.includes('aditi'))
console.log(xyz.split('-'))