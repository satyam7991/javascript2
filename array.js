const msg=()=>console.log("arrow function");
let data=[10,20,30,40,50,60,70.2,"kiet",msg];
console.log(data);
data[8]();

// for(let i=0;i<data.length;i++){
//     console.log(`value of $(i) is ${data[i]}`); //string litterls
// }

// for(let index in data){
//     console.log(`value of ${index} is ${data[index]}`);
// }

for(let value of data){
    console.log(`value of array=${value}`);
}

//for each// for each loop is very fast 

data.forEach(value=>console.log(`value of Array=${value}`));