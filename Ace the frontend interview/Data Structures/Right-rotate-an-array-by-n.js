function rightRotate(arr,n){
  let newArr = [];
   
  return arr.splice(arr.length - n).concat(arr.splice(0, arr.length));;
}
