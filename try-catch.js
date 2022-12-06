const myName = 'ami';
const student = undefined;

// console.log(student.name);

try{
    myName = 'tumi';
}
catch(error){
    console.log('getting error', error);
}
console.log(myName);