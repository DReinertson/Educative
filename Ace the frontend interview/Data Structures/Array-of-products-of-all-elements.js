function findProduct(arr) {
    let product = arr.reduce((a,b) => a*b);
    let productArr = [];
    console.log(product);
    for (let x = 0; x < arr.length; x++){
        productArr.push(product / arr[x]);
    }
    return productArr;
}
