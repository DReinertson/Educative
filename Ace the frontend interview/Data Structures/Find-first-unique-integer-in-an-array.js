function findFirstUnique(arr) {
   

   for (let x = 0; x < arr.length; x++){
      let unique = true;
      for (let y = x+1; y < arr.length; y++){
         if (arr[x] === arr[y]){
            unique = false;
            break;
         }
      }
      if (unique === true)
      return arr[x];
   }
   return null;;
}
