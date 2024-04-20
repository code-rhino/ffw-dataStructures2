# Stacks and Queues 1

[Video](https://vimeo.com/936987486/8ff2022be5?share=copy)


#### 1. **Import the Stack Class**
Before we can use the stack, we must import the `Stack` class, which is assumed to be defined in another module (`'../libs/Stack'`).

```javascript
const Stack = require('../libs/Stack');
```

#### 2. **Define the `isValidHTML` Function**
This function checks the validity of an HTML string using a stack to manage HTML tags.

```javascript
function isValidHTML(html) {
    const stack = new Stack();
    const tagPattern = /<\/?([a-z]+[1-6]?)[^>]*>/gi;
    let tagMatch;
    ...
}
```
- **Stack Initialization:** A new stack instance is created to track open tags.
- **Regular Expression Setup:** `tagPattern` is a regular expression that matches both opening and closing HTML tags, including those potentially numbered like `<h1>` or `<h2>`.

#### 3. **Execute Regular Expression in a Loop**
A `while` loop runs as long as `tagPattern.exec(html)` finds tag patterns in the HTML string.

```javascript
while ((tagMatch = tagPattern.exec(html)) != null) {
    const [tagWithBrackets, tagName] = tagMatch;
    ...
}
```
- **Deconstruction of Match:** Each match provides `tagWithBrackets` (the whole tag including brackets) and `tagName` (the name of the tag without brackets).

#### 4. **Handle Found Tags**
Within the loop, the code distinguishes between opening and closing tags.

```javascript
if (tagWithBrackets.startsWith('</')) {
    if (stack.isEmpty() || stack.pop() !== tagName) {
        return false;
    }
} else {
    stack.push(tagName);
}
```
- **Closing Tag:** If it's a closing tag (starts with `'</'`), the function checks if the stack is empty or if the tag popped from the stack does not match the closing tag. If either condition is true, the function returns `false`, indicating mismatched or unbalanced tags.
- **Opening Tag:** For opening tags, the tag name is pushed onto the stack, waiting for a matching closing tag.

#### 5. **Final Validation**
After processing all tags, the stack should be empty if all tags were correctly matched and nested.

```javascript
return stack.isEmpty();
```
- An empty stack indicates that every opening tag had a corresponding closing tag in the correct order, thus the HTML is valid.

#### 6. **Testing the Function**
The validity of HTML strings is tested with two examples. Each example is logged to the console with its result.

```javascript
const sampleData1 = "<div><p>Example</p></div>"; // Expected: true
const sampleData2 = "<div><p></div></p>";       // Expected: false

console.log("Is valid HTML " + isValidHTML(sampleData1));
console.log("Is valid HTML " + isValidHTML(sampleData2));
```
- **Test Case Explanations:**
  - `sampleData1` contains correctly nested tags and should return `true`.
  - `sampleData2` has incorrect nesting (a `div` opens before a `p` closes), and should return `false`.

### Conclusion
The `isValidHTML` function efficiently uses a stack to ensure all HTML tags in a string are properly opened and closed. This method is essential for validating HTML in web development, ensuring that content is displayed as intended without errors. This walkthrough clearly shows how the function operates with real-world HTML examples, demonstrating its practical application.