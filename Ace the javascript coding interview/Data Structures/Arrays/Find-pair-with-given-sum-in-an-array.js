let findSumOfTwo = function(nums, val) {
 //TODO: Write - Your - Code
 let map1 = new Map();
 for (let x = 0; x < nums.length; x++){
   if (map1.has(nums[x])){
     map1.set(nums[x], map1.get(nums[x])+1);
   } else{
    map1.set(nums[x], 1);
   }
 }

 console.log('map1: ', map1); 

 for (let [key, value] of map1){
   map1.set(key, value-1);
   console.log('key: ', key);
   console.log('val: ', val);
   let target = val - key; 
   console.log('target: ', target);
   if (map1.has(target)){
     if(map1.get(target) !== 0){
       return true;
     }
   }

   console.log('----------------------');
 }
  return false;
};
