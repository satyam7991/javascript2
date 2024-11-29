let studentInfo={
    rollno:1,
    name:"satyam singh",
    course:"MCXA",
    college:"KIET",
    marks:[10,20,30],
    music:()=>console.log("play music"),
    play:function playfun(){console.log("play cricket")},
}
let arrayvalue=[studentInfo,studentInfo,studentInfo];
arrayvalue.forEach(item=>console.log(item.name));
console.log(studentInfo.music());
console.log(studentInfo.play());
console.log(studentInfo.marks);////