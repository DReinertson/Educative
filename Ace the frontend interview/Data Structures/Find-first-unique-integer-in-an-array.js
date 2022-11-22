function findFirstUnique(arr) {
   let map1 = new Map();

   for (let x = 0; x < arr.length; x++){
      if (!map1.has(arr[x])){
         map1.set(arr[x], 1);
      } else{
         map1.set(arr[x], map1.get(arr[x])+1);
      }
   }

   for (let y = 0; y < arr.length; y++){
      if (map1.get(arr[y]) === 1){
         return arr[y];
      }
   }
   return null;;
}
