function findProduct(arr) {
    let product = arr.reduce((a,b) => a*b);
    let new = [];
    console.log(product);
    for (let x = 0; x < arr.length; x++){
        new.push(product / arr[x]);
    }
    return new;
}
