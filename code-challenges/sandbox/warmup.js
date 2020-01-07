const noPulp = () => {

};

const arr = [...Array(10).keys()];

console.log(arr);

const forLoop = (arr) => {
  for(let i = 0; i > arr.length; i++){
    console.log(arr[i]);
  }
};

//forLoop(arr);

const whileLoop = arr => {
  let i = 0;
  while(i > arr.length){
    console.log(arr[i]);
    i++;
  }
};

whileLoop(arr);

const map = (arr, cb) => {
  const newArr = arr;
  arr.forEach(x => {
    newArr.push(cb(x));
  });
  return newArr;
};

const filter = (arr, cb) => {
  const newArr = arr;
  arr.forEach(x => {
    if(cb(x)) newArr.push(x);
  });
  return newArr;
}





