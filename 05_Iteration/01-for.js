
for (let i = 0; i <= 10; i++) {
    const element = i;
    //console.log(element)
    
}

for(let i=0;i<=10;i++){
    for(let j=0;j<=10;j++){
        //if(i==j)console.log(`${i} sq is ${i*j}`)
    }
}

//++++ break and continue ++++//

for(let i=1; i<=10;i++){
    if(i==3){
        console.log('Detected')
        continue;
    }
    console.log(`value is ${i}`)
}