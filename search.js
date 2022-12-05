const products = [
    'Dell hardcore i29 200GB laptop',
    'iphone 1TB camera flashlight Phone',
    'yellow laptop with black camera',
    'Dell 1X59 Lenovo commercial yoga laptop',
    'Dell LG supernova laptop Dell',
    'HTC low price Phone',
    'Dell purple color phone with Laptop'
];

const searching = 'Dell';

// indexOf

/* const output = [];
for (const product of products){
    // console.log(product);
    if(product.indexOf(searching) == -1)
    output.push(product)
}
console.log(output); */


// const output = [];
// for (const product of products) {
//     if (product.toLowerCase().includes(searching.toLowerCase())) {
//         // output.push(product);
//     }
// }

// console.log(output);

/* includes */

const output = [];
for (const product of products) {
    if (product.toLowerCase().includes(searching.toLowerCase())) {
        // output.push(product);
    }
}

// console.log(output);


//starts with
for (const product of products) {
    if (product.toUpperCase().startsWith(searching.toUpperCase())) {
        output.push(product);
    }
}

console.log(output)

