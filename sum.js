const sumButton=document.getElementById("sum");
sumButton.addEventListener("click",()=>{
    let num1=prompt("enter number 1","0");    
    let num2=prompt("enter number 2","0");
    let para=`sum of (${num1},${num2}) is= ${parseInt(num1)+parseInt(num2)}`;  
    document.getElementById("para").innerHTML=para;  

   
});
// sumButton.addEventListener("click",()=>{
//     const oldData=document.getElementById("para").innerHTML;
//     document.getElementById("para").innerHTML=oldData+(2+2);
// });