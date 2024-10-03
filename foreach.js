let arr1=[12,23,34,45,56,6]
arr.forEach((value,index,array)=>{
    return console.log(value,index,array)
})


let arr=[12,3,4,5,6,7]
let b=arr.map((value,index,array)=>{
    return value;
})
console.log(b);

//for a given array prices of 5 time given in an array.
let arrprice=[250,645,300,900,50];
let discount = 0.1;
for (let i = 0; i < arrprice.length; i++) {
    arrprice[i] = arrprice[i] - arrprice[i] * discount;
}
console.log(arrprice);

// write a program 