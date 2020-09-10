
const CustomError = require("../extensions/custom-error");
const arrKey = ['--discard-next','--discard-prev','--double-next','--double-prev'];
/*
const disNext = '--discard-next';
const disPrev = '--discard-prev';
const dblNext = '--double-next';
const dblPrev = '--double-prev';
*/

const disNext = arrKey[0];
const disPrev = arrKey[1];
const dblNext = arrKey[2];
const dblPrev = arrKey[3];

let copyArr;



module.exports = function transform(arr) {
  
  // throw new CustomError('Not implemented');
  // remove line with error and write your code here

//let a=[b] ; //[ '--discard-next', 'DEF' ];

//transform(a);   //[ Array(8) ]

//function transform(arr) {
  //console.log(arr);
  copyArr=arr.slice();

  /*
  if(is2dArray(arr)){
    throw new CustomError('Error');
  }
  */
  //copyArr=JSON.parse(JSON.stringify(arr));

if(!Array.isArray(arr)){
  throw new Error('Error');
}
if(arr.length<=0){
  //throw new Error('Error');
  return [];
}

let kApArr = getKeyAndPos(arr);
//console.log(kApArr);
getResArr(kApArr);

//console.log(finalArr(copyArr));
//console.log(arr);
return finalArr(copyArr);
};

function getKeyAndPos(arr){
  let temp=[];
  let flag=0;
  for(elem of arr){
    
    if(arrKey.indexOf(elem)!=-1){
      if(!(typeof elem ==='string')){
        continue;
      }
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
  copyArr[pos]=copyArr[pos+1];//copyArr.slice(pos+1, pos+2);
  return;
}

function dblPrevF(pos){
  if(pos==0){
    copyArr[pos]='del';
    return;
  }
  copyArr[pos]=copyArr[pos-1];//copyArr.slice(pos-1, pos);
  return;
}

function getResArr(keyAndposArr){
  check(keyAndposArr);
  for(elem of keyAndposArr){
    //
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
  /*
  for(elem of arr){
    
    if(elem!='del'){
      //let el=arr.slice(arr.indexOf(elem),1);
      temp.push(elem);
    }
    
  }
  */
  let j=0;
  for(let i=0;i<arr.length;i++){
    if(arr[i]!='del'){
      temp[j]=arr[i];
      j++;
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

function check(arrOfKeys){
  for(let i=0;i<arrOfKeys.length;i++){
    if(//(arrOfKeys[i]==dblNext&&arrOfKeys[i+2]==disPrev)||
       (arrOfKeys[i]==disNext&&arrOfKeys[i+2]==disPrev)||
       (arrOfKeys[i]==disNext&&arrOfKeys[i+2]==dblPrev)){
      copyArr[i+2]='del';
      arrOfKeys[i+2]='';
      }

    }
  } 