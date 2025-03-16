 const arr=[1,2,4,5,3,6]
 const myHero=["vivekanand","chadra_sekhar","bhagat_singh","Hanuman"]

//  console.log(arr)
//  console.log(myHero)

//  const arr2=new Array(1,2,3,4,10)

//  //*****  Array Methods   *****//

//  arr.push(24) //inserts element at last index
//  arr.pop() //removes element from last index

//  arr.unshift(32) //adds elememt from first index
//  arr.shift() //deletes elemnet from first index

//  console.log(arr.includes(3))
//  console.log(arr.indexOf(4)) //elements is not in the arr, it returns -1;

//  const arr3=arr.join() //converts into string
//  console.log(arr)
//  console.log(arr3)

 /* slice & splice */

 const a=arr.slice(1,3)
 console.log(a)
 console.log("A",arr)

 const b=arr.splice(1,3) // removes or deletes from orginal array
 console.log(b)
 console.log("B",arr)
