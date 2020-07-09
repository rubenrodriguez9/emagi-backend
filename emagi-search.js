const words = require(('./emagi-words.js'))
const symbols = require(('./emagi-symbols.js'))

const emagiSearch = function(str){
    result = []
    for(const statement of words){
        console.log(statement)
        if(statement.includes(str)){
            result.push(symbols[words.indexOf(statement)])
        }
    }
    
    
    return result
}























module.exports = emagiSearch