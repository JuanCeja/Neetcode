// You are given the root of a binary search tree(BST) and an integer val.

// Find the node in the BST that the node's value equals val and return the subtree rooted with that node. If such a node does not exist, return null.


// Example 1:
// Input: root = [4, 2, 7, 1, 3], val = 2
// Output: [2, 1, 3]

// Example 2:
// Input: root = [4, 2, 7, 1, 3], val = 5
// Output: []

class BinarySearchTree {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
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
}

function search(root, target) {
    if (!this.root) return false;

    if (target < root.val) {
        return search(root.left, target);
    } else if (target > root.val) {
        return search(root.right, target);
    } else return true;
}