const CustomError = require("../extensions/custom-error");

const chainMaker = {
  res: [],
  getLength() {
    return this.res.length
  },
  addLink(value) {
    this.res.push(`( ${value} )`);
    return this;
  },
  removeLink(position) {
    if(this.getLength() < position || position < 0 || !(typeof position == 'number') ) {
      this.res.splice(0, this.getLength());
      throw new Error();
    }
    this.res.splice(position-1, 1);
    return this;
  },
  reverseChain() {
    this.res.reverse();
    return this;
  },
  finishChain() {
    let tempres = this.res.join('~~');
    this.res.splice(0, this.getLength());
    return tempres;
  }
};

module.exports = chainMaker;


