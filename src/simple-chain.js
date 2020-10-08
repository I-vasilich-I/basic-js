const CustomError = require("../extensions/custom-error");



const chainMaker = {
  res: [],
  getLength() {
    return this.res.length
  },
  addLink(value) {
    if (value === undefined) value = '';
    if (value === null) value = 'null';
    if (value === 0) value = '0';
    this.res.push(`( ${value} )`);
    //console.log(`addLink ${value}`, this.res);
    return this;
  },
  removeLink(position) {
    if(this.getLength() < position || position < 0 || !(typeof position == 'number') ) {
      throw new Error();
    }
    this.res.splice(position-1, 1);
    //console.log(`removeLink ${position}`, this.res);
    return this;
  },
  reverseChain() {
    this.res.reverse();
    //console.log('reverseChain', this.res);
    return this;
  },
  finishChain() {
    let tempres = this.res.join('~~');
    this.res.splice(0, this.getLength())
    //console.log('finishChain', tempres);
    //console.log(this.res.join('~~'))
    return tempres;
  }
};


//chainMaker.reverseChain().reverseChain().addLink('DEF').addLink(NaN).reverseChain().addLink(333).reverseChain().addLink('GHI').addLink('ABC').addLink({0: 'first', 1: 'second', 'length': 2}).finishChain()
module.exports = chainMaker;


