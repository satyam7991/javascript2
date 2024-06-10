const msg=function message(){
    console.log("welcome function expression");
}
msg()

const sum=function(num1, num2){
    let sum=num1+num2;
    console.log("sum=",sum);
}

const mul=function(num1, num2){
    return num1*num2;
}
console.log("multiply=",mul(23,6));