let canSegmentString = function(inputString, dictionary) {
  //TODO: Write - Your - Code
  let test = '';

 

  for (let y = 0; y < inputString.length; y++){
    test += inputString[y];

    if(dictionary.has(test)){
      test = ''; 
    }
  }

  if (test === ''){
    return true;
  } else{
    return false;
  }
};
