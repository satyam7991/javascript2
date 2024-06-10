// rest parameter
// const sum=(num1,num2,...numbers)=>{
//     let s=0;
//     if(numbers.length>0){
//         s=numbers.reduce((a,b)=>a+b)
//     }
//     console.log("sum of number=",(num1+num2+s));
// }
// sum(12,23,14,15,65);

const sum=(num1=0,num2=0,...numbers)=>{
    let s=0;
    if(numbers.length>0){
        s=numbers.reduce((a,b)=>a+b)
    }
    console.log("sum of number=",(num1+num2+s));
}
sum();