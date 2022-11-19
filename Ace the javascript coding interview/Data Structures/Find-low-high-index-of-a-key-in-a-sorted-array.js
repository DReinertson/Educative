let findLowIndex = function(arr, key) {
  //TODO: Write - Your - Code
  for (let x = 0; x < arr.length; x++){
    if(arr[x] === key) return x;
  }
  return -1;
};

let findHighIndex = function(arr, key) {
  //TODO: Write - Your - Code
  for (let x = arr.length-1; x >= 0; x--){
    if (arr[x] === key) return x;
  }
  return -1;
};
