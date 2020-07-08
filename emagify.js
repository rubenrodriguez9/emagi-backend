const words = require(('./emagi-words.js'))
const symbols = require(('./emagi-symbols.js'))

const emagify = function(arr){
    result = []
    for(const trait of arr){
            if(words.indexOf(trait) === -1){
                result.push(trait)
            }else
            result.push(symbols[words.indexOf(trait)])
        
    }
    return result
}




exampleInput = ['sad', 'happy']






module.exports = emagify