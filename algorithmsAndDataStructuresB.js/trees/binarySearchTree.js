// You are given the root of a binary search tree(BST) and an integer val.

// Find the node in the BST that the node's value equals val and return the subtree rooted with that node. If such a node does not exist, return null.


// Example 1:
// Input: root = [4, 2, 7, 1, 3], val = 2
// Output: [2, 1, 3]

// Example 2:
// Input: root = [4, 2, 7, 1, 3], val = 5
// Output: []

class Node {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null;
    }

    search(val) {
        if (!this.root) return false;

        let current = this.root;

        while (current) {
            if (val === current.val) return current;
            else if (val < current.val) {
                if (current.left) current = current.left;
                else return null;
            } else if (val > current.val) {
                if (current.right) current = current.right;
                else return null;
            }
        }

        return null;
    }

    insert(val) {
        const newNode = new Node(val);

        if (!this.root) {
            this.root = newNode;
            return this.root;
        };

        let current = this.root;

        while (current) {
            if (val < current.val) {
                if (!current.left) {
                    current.left = newNode;
                    return this.root;
                }
                current = current.left;
            } else if (val > current.val) {
                if (!current.right) {
                    current.right = newNode;
                    return this.root;
                }
                current = current.right;
            } else {
                return this.root;
            }
        }
    }

    delete(root, val) {
        if (!this.root) return null;

        if (this.root.val === val) {
            if (!this.root.left && !this.root.right) {
                return null;
            }

            if (this.root.left && this.root.right) {
                let curr = this.root.right;
                while (curr.left) curr = curr.left;
                curr.left = root.left;
                return root.right;
            }

            if (!this.root.left) return this.root.right;
            if (!this.root.right) return this.root.left;
        }

        if (val < this.root.val) {
            this.root.left = this.delete(this.root.left, val);
        } else {
            this.root.right = this.delete(this.root.right, val);
        }
        return root;
    }

    inOrderTraversal(root, []) {
        const result = [];
        // set up our base case for our recursion calls
        if (!root) return null;

        // call function call on left
        if(root.left) {
            // push our root value
            this.inOrderTraversal(root.left, result);
            result.push(root.left.val);
        } 

        result.push(root.val);
        
        // call function on right
        if(root.right) {
            // push our root value
            this.inOrderTraversal(root.right, result);
            result.push(root.right.val);
        } 
        // return our result
        return result;
    }
}

const search = (root, target) => {
    if (!this.root) return false;

    if (target < root.val) {
        return search(root.left, target);
    } else if (target > root.val) {
        return search(root.right, target);
    } else return true;
};

const insertIntoBST = (root, val) => {
    if (!root) return new TreeNode(val);

    if (root.val > val) {
        root.left = insertIntoBST(root.left, val);
    } else if (root.val < val) {
        root.right = insertIntoBST(root.right, val);
    }
    return root;
};