let removeDuplicates = function(str) {
  //TODO: Write - Your - Code
  let map1 = new Map();
  let index = 0;

  while (index < str.length){
    if (map1.has(str[index])){
      str = str.slice(0, index) + str.slice(index+1);
    } else{
      map1.set(str[index]);
      index++; 
    }
  }
  return str;
};
