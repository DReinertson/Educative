let findLowIndex = function(arr, key) {
  //TODO: Write - Your - Code
  //binary search method
  let start = 0; 
  let end = arr.length - 1;
  let mid = Math.floor(end / 2);

  while (start <= end){
    

    if (arr[mid] < key){
      start = mid + 1;
    } else{
      end = mid - 1;
    }

    mid = start + Math.floor((end - start) / 2);
  }

  
    if (start < arr.length && arr[start] === key){
      return start;
    }

  
  return -1;
};

let findHighIndex = function(arr, key) {
  //TODO: Write - Your - Code
  let start = 0;
  let end = arr.length - 1;
  let mid = Math.floor(end / 2);

  while (start <= end){

    if (arr[mid] <= key){
      start = mid + 1;
    } else {
      end = mid - 1;
    }
    
    mid = start + Math.floor((end - start) / 2);
    
  }

  if (end === -1){
    return end;
  }  
    if (end < arr.length && arr[end] === key){
      return end;
    }
  return -1;
};
