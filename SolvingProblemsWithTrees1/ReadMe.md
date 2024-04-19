# Step-by-Step Guide to Count Nodes in a Binary Search Tree (BST)

[Video](https://vimeo.com/936680364/a025fcee6e?share=copy)

#### Step 1: Visualize the Tree Structure

- **Understand the BST Structure**: Begin by visualizing how a Binary Search Tree organizes data. Each node can have up to two children, referred to as the left child and the right child.

- **Inserting Nodes**: Using the insert function, nodes are added to the tree based on their value:
  - If the value is less than the current node, it goes to the left.
  - If the value is greater, it goes to the right.

#### Step 2: Insert Nodes

- **Initial Node (Root)**: Insert 10 as the root of the tree.
- **Insert 5**: Since 5 is less than 10, it will be inserted to the left of 10.
- **Insert 15**: Since 15 is greater than 10, it will be inserted to the right of 10.
- **Insert 3**: As 3 is less than 10 and also less than 5, it is inserted to the left of 5.
- **Insert 7**: Since 7 is less than 10 but greater than 5, it is inserted to the right of 5.

#### Step 3: Draw the Tree

- After the nodes are inserted, draw a simple diagram to visualize their arrangement:

  ```
        10
       /  \
      5    15
     / \
    3   7
  ```

#### Step 4: Implement the Count Nodes Function

- **Function Overview**: Create a function `countNodes()` that will recursively count the total number of nodes in the tree.
- **Recursion Logic**:
  - Start at the root node (count = 1 for the root itself).
  - Recursively call `countNodes()` on the left child, if it exists, and add to count.
  - Recursively call `countNodes()` on the right child, if it exists, and add to count.
  - Return the final count.

#### Step 5: Count the Nodes

- Execute the `countNodes()` function starting from the root. This function navigates through each branch of the tree, counting nodes until all branches are evaluated.

#### Step 6: Output the Result

- After running the function, output the total count of nodes in the tree. For the example tree, the output should be 5, as there are five nodes (10, 5, 15, 3, and 7).

#### Sample Code for Count Nodes

```javascript
class BinarySearchTree {
    constructor(key = null, value = null) {
        this.key = key;
        this.value = value;
        this.left = null;
        this.right = null;
    }

    insert(key, value) {
        if (!this.key) {
            this.key = key;
            this.value = value;
        } else if (key < this.key) {
            if (!this.left) this.left = new BinarySearchTree(key, value);
            else this.left.insert(key, value);
        } else {
            if (!this.right) this.right = new BinarySearchTree(key, value);
            else this.right.insert(key, value);
        }
    }

    countNodes() {
        let count = 1;  // Start with 1 for the current node
        if (this.left) count += this.left.countNodes();  // Add all nodes from the left subtree
        if (this.right) count += this.right.countNodes();  // Add all nodes from the right subtree
        return count;
    }
}

const bst = new BinarySearchTree();
bst.insert(10, 'Ten');
bst.insert(5, 'Five');
bst.insert(15, 'Fifteen');
bst.insert(3, 'Three');
bst.insert(7, 'Seven');

console.log("Total number of nodes:", bst.countNodes()); // Outputs: Total number of nodes: 5
```

