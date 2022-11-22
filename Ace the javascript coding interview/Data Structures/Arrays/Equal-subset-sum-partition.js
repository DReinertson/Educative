//Initial thought, you need to go through every possible combination of numbers
//Are the arrays sorted or unsorted? 
//In the example they are sorted. Could use a 2-pointer method that moves based on if first array is smaller than the 2nd? 
//This however wouldn't solve the 2nd example, because the array that adds up to the same sum is in the middle. 
//could have the logic be something along the lines of if sum1 < sum2 move right pointer further and compare, if sum1>sum2, move left pointer forward?
//ultimately, I will need to have another array that keeps track of the remaining numbers. and compare that to the original sum - sum of 


let canPartition = function(num) {
  //TODO: Write - Your - Code

  let left = 0; 
  let right = 1;
  let temp = num; 
  let currentSum = num[left];
  let totalSum = num.reduce(function(a,b){
    return a+b;
  })

  console.log(totalSum);

  while (left < right){
    let remainder = totalSum - currentSum;

    // console.log('current: ', currentSum);
    // console.log('left: ', left);
    // console.log('right: ', right);
    // console.log('remainder: ', remainder);

    if (currentSum === remainder){
      return true;
    }

    if (currentSum < remainder){
      currentSum += num[right];
      right++;
    } else{
      currentSum -= num[left];
      left++;
    }

    

    // console.log('-----------');

  }
  return false;
};
