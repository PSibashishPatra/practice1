const radius = [3,4,5,2];

//callback function
const area = function (radius) {
    return (Math.PI * radius *radius);
};
//callback function
const circumference =function (radius){
    return (2 * Math.PI * radius);
};
//callback function
const diameter = function (radius){
    return (2 * radius);
};


//Higher order function
const calculate = function (radius,logic) {
    const output = [];
    for(let i=0;i<radius.length ;i++) {
        output.push(logic(radius[i]));

    }
    return output;
}

console.log(calculate(radius,area));
console.log(calculate(radius,circumference));
console.log(calculate(radius,diameter));