const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {

  let newStr = '';
  let k = 1;

  for (let i = 0; i < str.length; i++){
    if (str[i] === str[i+1]){
      k++;
    } else{
      if (k == 1){
        newStr += `${str[i]}`;
      } else{
        newStr += `${k}${str[i]}`;
        k = 1;
      }
    }
  }
  return newStr;
}

console.log(encodeLine('aabbbc'));

module.exports = {
  encodeLine
};
