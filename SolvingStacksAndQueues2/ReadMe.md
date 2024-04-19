# Stacks 

[Video](https://vimeo.com/936698279/5509c93bd6?share=copy)

Here’s a step-by-step guide on how to reverse a string using a stack data structure in JavaScript, which follows the transcript you provided. This guide includes the code, an explanation of each step, and how it corresponds to the actions described in the video transcript.

### Step 1: Create the Stack Class
Before we can use a stack, we need to define what a stack is and how it behaves. This involves creating a Stack class with methods to add (push) and remove (pop) items, and to check if the stack is empty.

```javascript
class Stack {
    constructor() {
        this.items = [];
    }

    push(element) {
        this.items.push(element);
    }

    pop() {
        if (this.items.length > 0) {
            return this.items.pop();
        }
    }

    isEmpty() {
        return this.items.length === 0;
    }
}
```

### Step 2: Define the `reverseString` Function
Next, we define a function called `reverseString` that takes a string as input and returns the reversed version of that string using a stack.

```javascript
function reverseString(str) {
    let stack = new Stack();

    // Push all characters of the string into the stack
    for (let i = 0; i < str.length; i++) {
        stack.push(str[i]);
    }

    // Pop all characters from the stack and append to reversedString
    let reversedString = '';
    while (!stack.isEmpty()) {
        reversedString += stack.pop();
    }

    return reversedString;
}
```

### Step 3: Test the Function
Finally, test the `reverseString` function by using a sample string, as demonstrated in the transcript.

```javascript
const originalString = "hello";
const reversedString = reverseString(originalString);
console.log("Original:", originalString); // Output: Original: hello
console.log("Reversed:", reversedString); // Output: Reversed: olleh
```

### Explanation
1. **Stack Creation**: A new stack instance is created to hold the characters of the string temporarily.
2. **Filling the Stack**: The characters of the string are iterated over and pushed onto the stack one by one. This operation stores the characters in the reverse order of their appearance because the last character pushed will be the first popped.
3. **Reversing the String**: An empty string `reversedString` is initialized. As long as the stack is not empty, characters are popped from the stack and appended to `reversedString`. This process reverses the string because the stack operates in a Last-In-First-Out (LIFO) manner.
4. **Output**: Finally, the original and reversed strings are printed to demonstrate the result.

This JavaScript function directly implements the process described in the transcript using a simple stack data structure and demonstrates the classic use of stacks to reverse sequences.