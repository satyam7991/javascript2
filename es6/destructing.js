//imp for react
const data=[10,20,30,40];
let [x,y,z,w]=data;
console.log(x,y,z,w);
const studentinfo={
    name:"ravi",
    course:"MCA",
    rollno:4
}
let {name:sname,course:mycourse,rollno:rno}=studentinfo;
console.log(sname,mycourse,rno);