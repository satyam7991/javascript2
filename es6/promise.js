let age=20;
const info=new Promise((resolve,reject)=>{
    if(age>=18){
        resolve("you can vote")
    }  else{
        reject("you can not vote");
    }  

})
info.then(result=>console.log(result))
.catch(error=>console.log(error));


const resultInfo=async ()=>{   
    try{
        let result=await info;
        console.log(result);
    }  catch(error){
        console.log(error);
    }
   
}
resultInfo();


myPromise
  .then((value) => `${value} and bar`)
  .then((value) => `${value} and bar again`)
  .then((value) => `${value} and again`)
  .then((value) => `${value} and again`)
  .then((value) => {
    console.log(value);
  })
  .catch((err) => {
    console.error(err);
  });