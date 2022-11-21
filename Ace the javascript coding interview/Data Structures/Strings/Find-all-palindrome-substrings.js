// This function receives input_string and returns palindromes list

function isPalindrome(str){
  let start = 0; 
  let end = str.length-1;

  while (start < end){
    if (str[start] !== str[end]){
      return false;
    }
    start++;
    end--;
  }

  return true; 
}

let findAllPalindromeSubstrings = function(inputString) {
  let palindrome = [];
  //TODO: Write - Your - Code
  let set1 = new Set();

  for (let x = 0; x < inputString.length; x++){
    let str = '';
    str += inputString[x];
    console.log('str in first loop: ', str);

    for (let y = x+1; y < inputString.length; y++){
      str+=inputString[y];
      console.log('str in 2nd loop: ', str); 
      if(isPalindrome(str)){
        palindrome.push(str);
      }
    }
    console.log('-----------------');
  }

  console.log('set: ', set1);
  return palindrome;
};
