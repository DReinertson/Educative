function mergeArrays(arr1, arr2) {
    let sorted = [];
    let index1 = 0;
    let index2 = 0;
    console.log(arr2[index2]);

    while (arr1[index1] !== undefined || arr2[index2] !== undefined){
        if (arr1[index1] === undefined){
            sorted.push(arr2[index2]);
            index2++;
        }
        else if (arr2[index2] === undefined){
            sorted.push(arr1[index1]);
            index1++;
        }

        else if (arr1[index1] < arr2[index2]){
            sorted.push(arr1[index1]);
            index1++;
        } else{
            sorted.push(arr2[index2]);
            index2++;
        }
    }
    return sorted;
}
