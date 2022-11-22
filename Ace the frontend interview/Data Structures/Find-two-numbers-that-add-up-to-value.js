function findSum(arr,value){

    let map1 = new Map();

    for (let x = 0; x < arr.length; x++){
        map1.set(arr[x], 0);
    }

    for (let y = 0; y < arr.length; y++){
        let remainder = value - arr[y];
        if (map1.has(remainder)){
            return [arr[y], remainder];
        }
    }

    return false;

   
  
}
