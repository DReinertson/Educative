let rotateArray = function(nums, n) {
  //TODO: Write - Your - Code

  let count = 0;
  let end = nums.length-1;
  let pos;
  if (n > 1){
    pos = true;
  } else {
    pos = false;
  }

  // console.log('pos: ', pos);
  // console.log('n: ', n);
  // console.log('count: ', count, '|', count+=1);

  while (count < Math.abs(n)){
    console.log('count: ', count);
    console.log('numsBefore: ', nums);
    if (pos === true){
      nums.unshift(nums[end]);
      nums.pop();
    } else {
      nums.push(nums[0]);
      nums.shift();
    }
    count+=1;
    console.log('numsAfter: ', nums);
    console.log('----------------');
  }
  return nums;
};
