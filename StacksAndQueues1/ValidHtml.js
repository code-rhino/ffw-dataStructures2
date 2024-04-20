const Stack = require('../libs/Stack');

// Assuming Node and Stack classes are defined as above
function isValidHTML(html) {
    const stack = new Stack();
    const tagPattern = /<\/?([a-z]+[1-6]?)[^>]*>/gi; // To include tags like h1, h2, etc.
    let tagMatch;
    while((tagMatch = tagPattern.exec(html)) != null){
        const [tagWithBrackets, tagName] = tagMatch;
        if(tagWithBrackets.startsWith('</')){
            if(stack.isEmpty() || stack.pop() !== tagName){
                return false;
            }
        } else {
            stack.push(tagName);
        }
    }
    return stack.isEmpty();
  
  }

  const sampleData1 = "<div><p>Example</p></div>";
  const sampleData2 = "<div><p></div></p>";

  console.log ("Is valid HTML " + isValidHTML(sampleData1));
  console.log ("Is valid HTML " + isValidHTML(sampleData2));
