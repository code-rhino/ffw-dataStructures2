# Queue

[Video](https://vimeo.com/936812742/800d4d7b69?share=copy)

Here's a step-by-step breakdown of the code provided, which is designed to count smiley faces in a string using a queue. Each smiley face is either a `:)` or `:(`.

```javascript
const Queue = require('../libs/Queue');
```
This line imports a `Queue` class from an external library file `../libs/Queue`. The `Queue` class provides the necessary queue data structure functionalities like enqueue, dequeue, peek, and isEmpty.

```javascript
function countFaces(s) {
```
This line defines a function called `countFaces` that takes a single argument `s`, which is expected to be a string.

```javascript
    let count = 0;
```
Initializes a variable `count` to zero. This variable will keep track of the number of smiley faces detected in the string.

```javascript
    const queue = new Queue();
```
Creates an instance of the `Queue` class, which will be used to store characters from the string that are potential parts of smiley faces.

```javascript
    for(let i = 0; i < s.length; i++){
```
Starts a loop that will iterate through each character in the string `s`. The variable `i` serves as the index for each character in the string.

```javascript
      const char = s[i];
```
Within the loop, `char` is assigned the character at the current index `i` of the string `s`.

```javascript
      if( char === ':'){
```
Checks if the current character is a colon (`:`). If it is, the execution enters the following block:

```javascript
        queue.enqueue({char: char, index:i})
```
Enqueues an object containing the character (in this case, always `:`) and its index in the string. This information is stored for potential matching with a subsequent parenthesis to form a smiley face.

```javascript
      } else if ((char ===')' || char === '(' && !queue.isEmpty())){
```
Checks if the current character is a closing or opening parenthesis and ensures the queue is not empty. If both conditions are true, the following block is executed:

```javascript
        let last = queue.peek();
```
Retrieves (but does not remove) the object at the front of the queue, which contains the last enqueued colon and its index.

```javascript
        if(last && (i - last.index) === 1){
```
Checks if there is an object `last` and if the current character's index is exactly one position after the index of the colon. This check ensures that the characters are adjacent, forming a valid smiley face.

```javascript
          count++;
```
If the above condition is true, increments the `count` by one, as a valid smiley face has been found.

```javascript
          queue.dequeue()
```
Removes the front object from the queue because the colon has been successfully paired with a parenthesis to form a smiley face.

```javascript
        }
      }
    }
```
Closes the `else if` and `for` loop blocks.

```javascript
    return count;
}
```
Returns the total count of smiley faces detected in the string.

```javascript
  // Example usage
  const exampleText = "Hello :) How are you today :)? :( I'm fine:(";
  console.log(`Number of smileys found: ${countFaces(exampleText)}`);
```
Provides an example usage of the function `countFaces`. It tests the function with a sample text and prints the result, which should indicate how many smiley faces were found.

This code effectively uses a queue to manage the order of colon characters and ensure each is checked against the next parenthesis character, adhering strictly to the order in which they appear, demonstrating a typical use of queues for FIFO (First In, First Out) operations.