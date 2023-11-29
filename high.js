const radius = [3,4,5,2];

const calculateArea = function (radius) {
    const output =[];
    for(let i=0; i<radius.length ; i++){
        output.push(Math.PI * radius[i] * radius[i]);
    }
    return output ;
}

console.log(calculateArea(radius));

const calculateCircum = function (radius){
    const output =[];
    for(let i=0; i<radius.length ; i++){
        output.push(2 * Math.PI * radius[i]);
    }
    return output ;
}

console.log(calculateCircum(radius));