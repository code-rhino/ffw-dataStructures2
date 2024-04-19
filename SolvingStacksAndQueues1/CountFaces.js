const Queue = require('../libs/Queue');

function countFaces(s) {
    let count = 0;
    const queue = new Queue();
    for(let i = 0; i < s.length; i++){
      const char = s[i];

      if( char === ':'){
        queue.enqueue({char: char, index:i})
      } else if ((char ===')' || char === '(' && !queue.isEmpty())){
        let last = queue.peek();
        if(last && (i - last.index) === 1){
          count++;
          queue.dequeue()
        }
      }
    }
    return count;
}
  
  // Example usage
  const exampleText = "Hello :) How are you today :)? :( I'm fine:(";
  console.log(`Number of smileys found: ${countFaces(exampleText)}`);