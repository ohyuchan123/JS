const calculator={
    plus : function(a,b){
        return a+b;
    },
    minus : function(a,b){
        return a-b;
    },
    times : function(a,b){
        return a*b;
    },
    devide : function(a,b){
        return a/b;
    },
    power : function(a,b){
        return a**b; //a**b은 제곱
    }
}

const plusResult =  calculator.plus(2,3);
console.log(plusResult);

const minusResult = calculator.minus(5,2);
console.log(minusResult);