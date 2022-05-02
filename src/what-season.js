const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function getSeason(date) {
  //throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  if (date == null){
    return 'Unable to determine the time of year!';
  }

  if (typeof date !== 'object'){
    throw 'Invalid date!';
  }
  
  if (date instanceof Date){
    let now = new Date();
    //console.log(`now:${now}`);
    if (date.toDateString() == now.toDateString()){
      throw 'Invalid date!';
    }
  //if (date.getMonth() == true){
  //console.log(date.toString());
  //console.log(date.getFullYear());
  //console.log(date.getMonth());
  //console.log(date.getDate());
    if (date.getMonth() > 1 & date.getMonth() < 11){
       if (date.getMonth() < 5){
          return 'spring';
       } else if (date.getMonth() < 8){
          return 'summer';
       } else if (date.getMonth() < 11){
          return 'autumn';
       }
    } else {
      return 'winter';
    }
  }
  throw 'Invalid date!';
}
/*
const deeperFakeDate = {
  toString() {
      return Date.prototype.toString.call(new Date());
  },
  getMonth() {
      return Date.prototype.getMonth.call(new Date());
  },
  getFullYear() {
      return Date.prototype.getFullYear.call(new Date(1994, 1, 2, 3, 4, 5));
  },
  getDate() {
      return Date.prototype.getDate.call(new Date(2020, 0, 3, 4, 5, 6));
  },
  getHours() {
      return Date.prototype.getHours.call(new Date(1978, 2, 4, 5, 6, 7));
  },
  getMinutes() {
      return Date.prototype.getMinutes.call(new Date(202, 3, 5, 6, 7, 8));
  },
  getSeconds() {
      return Date.prototype.getSeconds.call(new Date(1, 4, 6, 7, 8, 9));
  },
  getMilliseconds() {
      return Date.prototype.getMilliseconds.call(new Date(2019, 7, 8, 9, 10, 11));
  },
  getDay() {
      return Date.prototype.getDay.call(new Date(1812, 8, 9, 10, 11, 12));
  },
  [Symbol.toStringTag]: 'Date'
};
*/

//console.log(getSeason(deeperFakeDate));

//console.log(getSeason(new Date(235, 0, 0, 17, 9, 0, 802)));
//console.log(getSeason('foo'));
//console.log(getSeason({ John: 'Smith' }));
//console.log(getSeason(20192701));
//console.log(getSeason([2019, '27', 0 + '1']));
//console.log(getSeason(() => new Date()));
//console.log(getSeason(new Date()));
//console.log(getSeason(() => new Date()));

module.exports = {
  getSeason
};
