function reArrange(arr) {
  let newArr = [];

  for (let x = 0; x < arr.length; x++){
    if (arr[x] < 0){
      newArr.unshift(arr[x]);
    } else{
      newArr.push(arr[x]);
    }
  }
  return newArr;
}
