const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {

  encrypt(string, key) {
    let res = '';
    if (string==undefined || key==undefined) {
      throw new Error();
    }
    key = adjustKey(string, key);
    string = adjustString(string);
    let j=0;
    for (let i = 0; i<string.length; i++){
      if (ascii(string[i])<65 || ascii(string[i])>90) {
        j++
        res+=string[i];
        continue;
      }
      res+=encryptLetter(string[i], key[i-j]);
    }
    console.log(res);
    return res;
  }    
  decrypt(string, key) {
    //throw new CustomError('Not implemented');
    let res = '';
    if (string==undefined || key==undefined) {
      throw new Error();
    }
    key = adjustKey(string, key);
    string = adjustString(string);
    let j=0;
    for (let i = 0; i<string.length; i++){
      if (ascii(string[i])<65 || ascii(string[i])>90) {
        j++
        res+=string[i];
        continue;
      }
      res+=decryptLetter(string[i], key[i-j]);
    }
    console.log(res);
    return res;
  }
}

module.exports = VigenereCipheringMachine;


function adjustKey(string, key) {
  if (key.length < string.length) {
    let temp = key.padEnd(string.length, key);
    return temp.toUpperCase();
  }
  return key.toUpperCase();
}

function adjustString(string) {
  return string.toUpperCase();
}

function encryptLetter(strLetter, keyLetter) {
  strLetter = ascii(strLetter)-65;
  keyLetter = ascii(keyLetter)-65;
  let sum = 65+strLetter+keyLetter;
  let encrypted = sum > 90 ? sum-26 : sum;
  encrypted = asciiLetter(encrypted);
  return encrypted;
}

function decryptLetter(strLetter, keyLetter) {
  strLetter = ascii(strLetter)-65;
  keyLetter = ascii(keyLetter)-65;
  let sum = 65+strLetter - keyLetter; //тута
  let decrypted = sum;
  decrypted = asciiLetter(decrypted);
  return decrypted;
}

function ascii(letter) {
  return letter.charCodeAt(0);
}

function asciiLetter(code) {
  return String.fromCharCode(code);
}