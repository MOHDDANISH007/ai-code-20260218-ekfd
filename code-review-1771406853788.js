const add = (num1, num2)=>{
    if (typeof num1 !== 'number' || typeof num2 !== 'number') {
        throw new Error('Both inputs must be numbers');
    }
    return num1 + num2;
}

console.log(add(10, 14));


In this fixed code, I've added a check at the beginning of the function to ensure that both `num1` and `num2` are numbers. If either of them is not a number, it throws an error with a descriptive message. This prevents the TypeError that would occur when trying to add non-numeric inputs.