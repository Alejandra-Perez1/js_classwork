function factorize(n){
    var f = [];
    for(var i=0; i<=n; i++){
        if(n%i == 0){
            f.push(i);
        }
    }
    return f;
}

function findUnique(str){
    var uniqueStr="";
    for(var i=0; i< str.length; i++){
        if(uniqueStr.indexOf(str.charAt(i)) == -1){
            uniqueStr += str[i];
        }
    }
    return uniqueStr;
}

function doOperation(x,y, operator){
    return operator(x,y);
}

function multiply(x,y){
    return x*y;
}

function power(x,y){
    return Math.pow(x,y);
}