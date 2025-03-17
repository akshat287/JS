// const user=new Object()

const user={}

user.id="aksh230"
user.name="akshat"
user.isOkay=false
//console.log(user)

const user1={
    email:"someone@gmail.com",
    fullname:{
        username:{
            first:"akshat",
            last:"tiwari"
        }
    }
}

//console.log(user1.fullname.username)

const obj1={1:"a",2:"b"}
const obj2={3:"c",4:"d"}

//const obj3={obj1,obj2}
//console.log(obj3)

// const obj3=Object.assign({},obj1,obj2)
// console.log(obj3)

const obj3={...obj1,...obj2}
//console.log(obj3)

const users=[
    {
        id:1,
        email:"akshat@gmail.com"
    },
    {
        id:2,
        email:"kishika@gmial.com"
    },
    {
        id:3,
        email:"aditi@gmail.com"
    }
]

console.log(users[1].email)
console.log(Object.keys(user))
console.log(Object.values(user))
console.log(Object.entries(user))

console.log(user.hasOwnProperty('name'))
