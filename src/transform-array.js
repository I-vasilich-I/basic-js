
const CustomError = require("../extensions/custom-error");
const arrKey = ['--discard-next','--discard-prev','--double-next','--double-prev'];

const disNext = '--discard-next';
const disPrev = '--discard-prev';
const dblNext = '--double-next';
const dblPrev = '--double-prev';

let copyArr;



module.exports = function transform(arr) {
  const _ = require("../node_modules/lodash");
  // throw new CustomError('Not implemented');
  // remove line with error and write your code here
/*
let a=[1, 2, 3, '--double-next', 1337, '--discard-prev', 4, 5];
transform(a);

function transform(arr) {
*/
  copyArr=_.cloneDeep(arr);
  //copyArr=arr.slice();
  if(is2dArray(arr)){
    throw new CustomError('Error');
  }
  //copyArr=JSON.parse(JSON.stringify(arr));

if(!Array.isArray(arr)){
  throw new CustomError('Error');
}
/*
if(arr.length<=0){
  throw new CustomError('Error');
}
*/
let kApArr = getKeyAndPos(arr);
getResArr(kApArr);
//console.log(arr);
return finalArr(copyArr);
};

function getKeyAndPos(arr){
  let temp=[];
  let flag=0;
  for(elem of arr){
    if(arrKey.indexOf(elem)!=-1){
      temp.push([elem, arr.indexOf(elem)]);
      flag=1;
    } 
  }
  if(!flag){
    throw new CustomError('Error');
  }
  return temp;
}

function disNextF(pos){
  if(copyArr.length-1==pos){
    copyArr[pos]='del';
    return;
  }
  copyArr[pos]='del';
  copyArr[pos+1]='del';
  return;
}

function disPrevF(pos){
  if(pos==0){
    copyArr[pos]='del';
    return;
  }
  copyArr[pos]='del';
  copyArr[pos-1]='del';
  return;
}

function dblNextF(pos){
  if(copyArr.length-1==pos){
    copyArr[pos]='del';
    return;
  }
  copyArr[pos]=copyArr[pos+1];
  return;
}

function dblPrevF(pos){
  if(pos==0){
    copyArr[pos]='del';
    return;
  }
  copyArr[pos]=copyArr[pos-1];
  return;
}

function getResArr(keyAndposArr){
  for(elem of keyAndposArr){
   callFunc(elem);
  }
}

function callFunc(elem){
    if(elem[0]==disNext){
      return disNextF(elem[1]);
    }else if(elem[0]==disPrev){
      return disPrevF(elem[1]);
    }else if(elem[0]==dblNext){
      return dblNextF(elem[1]);
    }else if(elem[0]==dblPrev){
      return dblPrevF(elem[1]);
    }
}

function finalArr(arr){
  let temp=[];
  for(elem of arr){
    if(elem!='del'){
      temp.push(elem);
    }
  }
  return temp;
}

function is2dArray(array){
  if(array[0] === undefined){
    return false;
  }else{
    return (array[0].constructor === Array);
  }
}