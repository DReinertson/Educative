class Interval { 
  constructor(first, second) { 
    this.first = first; 
    this.second = second; 
  } 
}

let mergeIntervals = function(v){
  let result = [];
  //write your code here
  let tuple = [v[0].first, v[0].second];

  for (let x = 1; x < v.length; x++){
    console.log('x: ', x);
    console.log('tuple: ', tuple);
    console.log('result before: ', result);
    console.log('tuple[1]: ', tuple[1], ' v[x].first: ', v[x].first);
    if (tuple[1] < v[x].first){
      result.push(tuple);
      tuple[0] = v[x].first;
      tuple[1] = v[x].second;
    } else{
      tuple[1] = v[x].second;
    }

    console.log('-------------');
  }
  result.push(tuple); 
  return result;    
}
