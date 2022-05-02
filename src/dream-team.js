const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(membersTeam) {
  //throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  let arrTeamName = [];

  if (Array.isArray(membersTeam)){

    for (let i = 0; i < membersTeam.length; i++){
      if(typeof membersTeam[i] === 'string'){
        for (let j = 0; j < membersTeam[i].length; j++){
          if(membersTeam[i].charAt(j) !== ' '){
            
            arrTeamName.push(membersTeam[i].charAt(j).toUpperCase());

            break;
          }
        }
      }
    }
    
  }else{
    return false;
  }

  return arrTeamName.sort().join('');
}

module.exports = {
  createDreamTeam
};
