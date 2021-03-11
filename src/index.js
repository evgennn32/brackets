module.exports = function check(str, bracketsConfig) {
    bracketsArr = [];
    bracketsConfig.forEach(function(e){
        let bracketsPair = e[0] + e[1];
        bracketsArr.push(bracketsPair)
    });
    let result = findBracketsNew(str,bracketsArr);
    if (result === ''){
        return true;
    }
    return false;
}

function findBrackets(string, brackets) {
    let baseString =  string.replace(brackets,'')
    //console.log(baseString)
    if(string === baseString || baseString === '' ){
        return baseString
    }else{
        return findBrackets(baseString, brackets )
    }
}

function findBracketsNew (string, bracketsArr) {
    bracketsArr.forEach((e)=>{
        string = findBrackets(string, e);
    })
    if(string === "" || !containsBrackets(string,bracketsArr)){
        return string;
    }else{
        return findBracketsNew (string, bracketsArr);
    }

}

function containsBrackets(string,bracketsArr) {
    let result = false;
    bracketsArr.forEach((e)=>{
        if(string.indexOf(e) !== -1){
            result = true;
        }
    })
    return result;
}


