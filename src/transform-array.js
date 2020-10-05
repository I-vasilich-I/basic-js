
const CustomError = require("../extensions/custom-error");
const arrKey = ['--discard-next','--discard-prev','--double-next','--double-prev'];
const disNext = arrKey[0];  //checked
const disPrev = arrKey[1];  //checked
const dblNext = arrKey[2];  //checked
const dblPrev = arrKey[3];  //checked
let copyArr;

  /* I'll be honest with you, I didn't create this funtion.
     the deepCopy is too deep shit for me right now, though I figured out that there is a problem
     with my arrays because of copying. Cause I saw in console.log that I have a good result, but
     on test on the same array I've seen those --dbl-nxt elements that should have been delited.
     I Googled for deep copy; 
     https://medium.com/javascript-in-plain-english/how-to-deep-copy-objects-and-arrays-in-javascript-7c911359b089
  */
 const deepCopyFunction = (inObject) => {
  let outObject, value, key

  if (typeof inObject !== "object" || inObject === null) {
    return inObject // Return the value if inObject is not an object
  }

  // Create an array or object to hold the values
  outObject = Array.isArray(inObject) ? [] : {}

  for (key in inObject) {  
    value = inObject[key]

    // Recursively (deep) copy for nested objects, including arrays
    outObject[key] = deepCopyFunction(value)
  }

  return outObject
} 

function getKeyAndPos(arr){
  let temp=[];
  let flag=0;
  for(let i=0;i<arr.length;i++){
      temp.push([deepCopyFunction(arr[i]), i]);
      flag=1;
  }
  if(flag){
    return temp;
  }else{
    return -1;
  }
}

function disNextF(pos){
  if(copyArr.length-1==pos){
    //copyArr.splice(pos,1,undefined);      *****
    copyArr[pos]=undefined;
    return;
  }
  //copyArr.splice(pos+1,1, undefined);     *****
  copyArr[pos+1]=undefined;
  //copyArr.splice(pos,1,undefined);        *****
  copyArr[pos]=undefined;
  return;
}

function disPrevF(pos){
  if(pos==0){
    //copyArr.splice(pos,1,undefined);        *****
    copyArr[pos]=undefined;
    return;
  }
  //copyArr.splice(pos-1,1,undefined);      *****
  copyArr[pos-1]=undefined;
  //copyArr.splice(pos,1,undefined);        *****
  copyArr[pos]=undefined;
  return;
}

function dblNextF(pos){
  if(copyArr.length-1==pos){
    //copyArr.splice(pos,1,undefined);   *****
    copyArr[pos]=undefined;
    return;
  }
  copyArr.splice(pos,1,deepCopyFunction(copyArr[pos+1]));
  return;
}

function dblPrevF(pos){
  if(pos==0){
    //copyArr.splice(pos,1,undefined);   *****
    copyArr[pos]=undefined;
    return;
  }
  copyArr.splice(pos,1,deepCopyFunction(copyArr[pos-1]));

  return;
}

function getResArr(keyAndposArr){
  check(keyAndposArr);
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
  const temp = arr.filter(elem => elem!=undefined);
  return temp;
}

function check(arrOfKeys){
  for(let i=0;i<arrOfKeys.length-1;i++){
    if(//(arrOfKeys[i]==dblNext&&arrOfKeys[i+2]==disPrev)||
       (arrOfKeys[i]==disNext&&arrOfKeys[i+2]==disPrev)//||
      // (arrOfKeys[i]==disNext&&arrOfKeys[i+2]==dblPrev)
      ){
      //copyArr.splice((i+2),1,undefined);    *****
      copyArr[i+2]=undefined;
      arrOfKeys[i+2]=undefined;
    }
  }
} 

module.exports = function transform(arr) {
  // throw new CustomError('Not implemented');
  // remove line with error and write your code here
copyArr=deepCopyFunction(arr);

if(!Array.isArray(arr)){
  throw new Error('Error');
}
if(arr.length<=0){
  return arr;
}
let kApArr = getKeyAndPos(arr);

if(kApArr==-1){
  return arr;
} 
getResArr(kApArr);
return finalArr(copyArr);
};