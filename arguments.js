function addNumbers (num1, num2){
    let result = 0;
    for (const num of arguments){
       result = result + num;
    }
 return result;
}

const sum = addNumbers(23, 45, 67, 76,35, 6788, 34, 901);
console.log(sum);