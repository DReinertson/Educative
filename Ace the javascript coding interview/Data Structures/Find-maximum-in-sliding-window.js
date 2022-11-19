let findMaxSlidingWindow = function(nums, windowSize) {
  var result = [];
  //Write your code
  let queue = [];
  let max;

  for (let x = 0; x < nums.length; x++){
    queue.push(nums[x]);


    if (queue.length === windowSize){
      result.push(Math.max.apply(Math,queue));
      queue.shift();
    } 

  }
  return result;
};
