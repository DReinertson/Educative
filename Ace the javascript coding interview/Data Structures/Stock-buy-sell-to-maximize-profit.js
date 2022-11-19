let findBuySellStockPrices = function(stockNums) {
  //TODO: Write - Your - Code

  if (stockNums.length < 2){
    return ['None', 'None'];
  }

  
  let low = stockNums[0];
  let high = stockNums[1]; 
  let bestProfit = -Infinity; 
  let currentProfit = 0; 
  for (let x = 1; x < stockNums.length; x++){

    currentProfit = stockNums[x] - low;     
    if (currentProfit > bestProfit){
      bestProfit = currentProfit;
      high = stockNums[x];
    }
    if (stockNums[x] < low){
      low = stockNums[x];
    }
  }
  
  return [high - bestProfit, high]; //Return a tuple with (high, low) price values
};
