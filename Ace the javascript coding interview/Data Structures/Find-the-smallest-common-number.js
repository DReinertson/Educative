let findLeastCommonNumber = function(arr1, arr2, arr3) {
 //TODO: Write - Your - Code
 let map1 = new Map();
 let map2 = new Map();

 for (let x = 0; x < arr1.length; x++){
   map1.set(arr1[x], 1);
 }

 for (let x = 0; x < arr2.length; x++){
   map2.set(arr2[x], 1);
 }

 for (let x = 0; x < arr3.length; x++){
   if (map1.has(arr3[x]) && map2.has(arr3[x])){
     return arr3[x];
   }
 }
  return -1;
};
