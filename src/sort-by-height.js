const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  /*

  const newArr = arr.map(function sort(val, ind, arr){


    if (val === -1){
      return val;
    }else{

      function funkSort(val, ind, arr){
        if (val === -1){
          ind++;
        } else if (val <= arr[ind+1]){
          return val;
        } else{
          val = funkSort(arr[ind], ind, arr);
        }
        return val;
      }

      val = funkSort(val, ind, arr);
      
    }
  })
*/
}

module.exports = {
  sortByHeight
};
