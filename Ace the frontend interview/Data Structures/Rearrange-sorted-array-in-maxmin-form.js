function maxMin(arr){
  let left = 0;
  let right = arr.length - 1;
  let newArr = [];

  while (left <= right){
    if (left === right){
      newArr.push(arr[left]);
      break;
    } else{
      newArr.push(arr[right]);
      newArr.push(arr[left]);
      right--;
      left++;
    }

  } 
  return newArr;
}
