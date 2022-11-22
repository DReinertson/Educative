function maxMin(arr){
  let left = 0;
  let right = arr.length - 1;
  let newArr = [];

  while (left < right){
      newArr.push(arr[right]);
      newArr.push(arr[left]);
      right--;
      left++;
  }

  newArr.push(arr[left]);

  return newArr;
}
