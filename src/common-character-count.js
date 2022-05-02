const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  //throw new NotImplementedError('Not implemented');
  //remove line with error and write your code here
  let newS1 = s1[s1.length - 1];

  for (let i = 0; i < s1.length - 1; i++){

    if (!s1.includes(s1[i], i + 1)){
      newS1 += s1[i];
    }
  }
  
  //console.log(`2 ${newS1}`);

  let count = 0;
  for (let i = 0; i < newS1.length; i++){
    for (let j = 0; j < s2.length; j++){
      if (newS1[i] == s2[j]){
        count++;
      }
    }
  }
  return count;
  
}

//console.log(getCommonCharacterCount('aabcc', 'adcaa'));

module.exports = {
  getCommonCharacterCount
};
