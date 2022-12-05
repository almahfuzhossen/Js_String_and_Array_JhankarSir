const products = [
    'Dell hardcore i29 200GB laptop',
    'iphone 1TB camera flashlight Phone',
    'yellow laptop with black camera',
    'Dell 1X59 Lenovo commercial yoga laptop',
    'LG supernova laptop Dell',
    'HTC low price Phone',
    'purple color phone with Laptop'
];

const searching = 'dell';

// indexOf

/* const output = [];
for (const product of products){
    // console.log(product);
    if(product.indexOf(searching) == -1)
    output.push(product)
}
console.log(output); */


const output = [];
for (const product of products) {
    if (product.toLowerCase().includes(searching.toLowerCase())) {
        output.push(product);
    }
}

console.log(output);