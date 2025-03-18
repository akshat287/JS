// for of

// ["","",""]
// [{},{},{}]

const arr=[1,2,3,4,5]
for (const i of arr) {
    console.log(i)
}


const user="Hello world"
for(let i of user){
    console.log(`each char: ${i}`)
}


const name=['akshat','kishika','aditi']
for(let i of name){
    console.log(i)
}

const map = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")
map.set('IN', "India")


// console.log(map);

for (const [key, value] of map) {
    // console.log(key, ':-', value);
}

const myObject = {
    game1: 'NFS',
    game2: 'Spiderman'
}

// for (const [key, value] of myObject) {
//     console.log(key, ':-', value);
    
// }