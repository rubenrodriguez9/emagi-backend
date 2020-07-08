const words = require(('./emagi-words.js'))
const symbols = require(('./emagi-symbols.js'))

const emagiSearch = function(str){
    result = []
    if(str === words[words.indexOf(str)]){
        result.push(symbols[words.indexOf(str)])
    }
    return result
}























module.exports = emagiSearch