const Stack = require('../libs/Stack');

function reverseString(str) {
    let stack = new Stack();

    for(let i = 0; i < str.length; i++){
        stack.push(str[i]);
    }

    let reversedString ='';
    while(!stack.isEmpty()){
        reversedString += stack.pop();
    }
    return reversedString;
}

// Example usage:
const originalString = "hello";
const reversedString = reverseString(originalString);
console.log("Original:", originalString);
console.log("Reversed:", reversedString);