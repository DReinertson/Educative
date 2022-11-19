let findLeastCommonNumber = function(arr1, arr2, arr3) {
 //TODO: Write - Your - Code
 let count1 = 0;
 let count2 = 0;
 let count3 = 0;

 while (count1 < arr1.length && count2 < arr2.length && count3 < arr3.length){

   if (arr1[count1] === arr2[count2] && arr2[count2] === arr3[count3]){
     return arr1[count1];
   }

   if (arr1[count1] <= arr2[count2] && arr1[count1] <= arr3[count3]){
     count1++;
   }

   else if (arr2[count2] <= arr1[count1] && arr2[count2] <= arr3[count3]){
     count2++
   }

   else if (arr3[count3] <= arr2[count2] && arr3[count3] <= arr1[count1]){
     count3++
   }

 }
 
  return -1;
};
