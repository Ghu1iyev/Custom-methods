Number.prototype.add = function (num) {  
    return this + num
}

Number.prototype.subtract = function (num){
    return this - num
}

Number.prototype.divide = function (num) {  
    return this / num
}

Number.prototype.multiply = function (num) {  
    return this * num
}

const result = (5).add(3).subtract(4).divide(2).multiply(10)
console.log(result);