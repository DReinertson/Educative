// sentence here is an array of characters
let reverseWords = function(sentence) {     
  //TODO: Write - Your - Code

  sentence = sentence.split(' ');
  let times = sentence.length;
  let start = 0;
  let end = sentence.length-1;

  while (start < end){
    let temp = sentence[start];
    sentence[start] = sentence[end];
    sentence[end] = temp;

    start++;
    end--;
  }

    return sentence.join(' ');
};
