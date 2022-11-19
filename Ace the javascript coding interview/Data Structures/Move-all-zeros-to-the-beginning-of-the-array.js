let moveZerosToLeft = function(nums) {
  //TODO: Write - Your - Code

  let index = 0; 

  while (index < nums.length){

    if (nums[index] === 0){
      //remove element from array, don't increase index, add zero to beginning
      nums.splice(index, 1);
      nums.unshift(0);
    }
    index++
  }
};
