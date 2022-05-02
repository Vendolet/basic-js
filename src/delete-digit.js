const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {

  let arrStrNum = n.toString();
  let index;

  for (let i = 0; i < arrStrNum.length - 1; i++){
    if (arrStrNum[i] < arrStrNum[i+1] || arrStrNum[i] === 0){
      arrStrNum[i] = 0;
      index = i;
      break;
    }
    if (i + 1 == arrStrNum.length - 1){
      arrStrNum[i + 1] = 0;
      return arrStrNum.slice(0, i + 1)*1;
    }
  }

  return (arrStrNum.slice(0, index) + arrStrNum.slice(index + 1))*1;
  
}

module.exports = {
  deleteDigit
};
