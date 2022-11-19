let findBuySellStockPrices = function(stockNums) {
  //TODO: Write - Your - Code

  if (stockNums.length < 2){
    return ['None', 'None'];
  }

  
  let low = stockNums[0];
  let high = 0; 
  let max = 0;
  for (let x = 1; x < stockNums.length; x++){
    console.log('value: ', stockNums[x]);
    console.log('max: ', max);
    console.log('low: ', low);
    console.log('high: ', high);
    console.log('---------------------------');
    if (stockNums[x] - low > max){
      max = stockNums[x] - low;
      high = stockNums[x];
    } else {
      if (stockNums[x] < low){
        low = stockNums[x];
      }
    }
  }
  
  return [high - max, high]; //Return a tuple with (high, low) price values
};
