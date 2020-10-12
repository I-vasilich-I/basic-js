const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
  constructor(instance = true) {
    this.instance = instance;
  }

  encrypt(string, key) {
    let res = '';
    if (string==undefined || key==undefined) {
      throw new Error();
    }
    key = this.adjustKey(string, key);
    string = this.adjustString(string);
    let j=0;
    for (let i = 0; i<string.length; i++){
      if (this.ascii(string[i])<65 || this.ascii(string[i])>90) {
        j++
        res+=string[i];
        continue;
      }
      res+=this.encryptLetter(string[i], key[i-j]);
    }
    return this.instance === true ? res : res.split('').reverse().join('');
  }    
  decrypt(string, key) {
    let res = '';
    if (string==undefined || key==undefined) {
      throw new Error();
    }
    key = this.adjustKey(string, key);
    string = this.adjustString(string);
    let j=0;
    for (let i = 0; i<string.length; i++){
      if (this.ascii(string[i])<65 || this.ascii(string[i])>90) {
        j++
        res+=string[i];
        continue;
      }
      res+=this.decryptLetter(string[i], key[i-j]);
    }
    return this.instance === true ? res : res.split('').reverse().join('');
  }

  adjustKey(string, key) {
    if (key.length < string.length) {
      let temp = key.padEnd(string.length, key);
      return temp.toUpperCase();
    }
    return key.toUpperCase();
  }

  adjustString(string) {
    return string.toUpperCase();
  }

  encryptLetter(strLetter, keyLetter) {
    strLetter = this.ascii(strLetter)-65;
    keyLetter = this.ascii(keyLetter)-65;
    let sum = 65+strLetter+keyLetter;
    let encrypted = sum > 90 ? sum-26 : sum;
    encrypted = this.asciiLetter(encrypted);
    return encrypted;
  }

  decryptLetter(strLetter, keyLetter) {
    strLetter = this.ascii(strLetter)-65;
    keyLetter = this.ascii(keyLetter)-65;
    let sum = 26 + strLetter - keyLetter;
    let decrypted = sum + 65 > 90 ? sum + 65 - 90 + 65 - 1 : sum + 65;
    decrypted = this.asciiLetter(decrypted);
    return decrypted;
  }

  ascii(letter) {
    return letter.charCodeAt(0);
  }

  asciiLetter(code) {
    return String.fromCharCode(code);
  }
}

module.exports = VigenereCipheringMachine;