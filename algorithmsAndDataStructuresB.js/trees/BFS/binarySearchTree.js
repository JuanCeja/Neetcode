class TreeNode {
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

  //   BST ALGORITHM
  levelOrder(root) {
    let result = [];
    let queue = [root];

    while (queue[0]) {
      let row = [];
      let qlen = queue.length;

      for (let i = 0; i < qlen; i++) {
        let node = queue.shift();

        row.push(node.val);

        if (node.left) queue.push(node.left);
        if (node.right) queue.push(node.right);
      }
      result.push(row);
    }
    return result;
  }

  rightSideView(root) {
    let queue = [root];
    let result = [];

    while (queue.length) {
      let farMostNode = null;
      let qlen = queue.length;

      for (let i = 0; i < qlen; i++) {
        let currentNode = queue.shift();

        if (currentNode) {
          farMostNode = currentNode;
          queue.push(currentNode.left);
          queue.push(currentNode.right);
        }
      }
      if (farMostNode) result.push(farMostNode.val);
    }
    return result;
  }

  insert(val) {
    const newNode = new TreeNode(val);

    if (!this.root) {
      this.root = newNode;
      return this.root;
    }

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

  inOrderTraversal(root, result = []) {
    if (!root) return result;

    if (root.left) {
      this.inOrderTraversal(root.left, result);
    }

    result.push(root.val);

    if (root.right) {
      this.inOrderTraversal(root.right, result);
    }

    return result;
  }

  preOrderTraversal(root, result = []) {
    if (!root) return result;

    result.push(root.val);

    if (root.left) {
      this.preOrderTraversal(root.left, result);
    }

    if (root.right) {
      this.preOrderTraversal(root.right, result);
    }

    return result;
  }

  postOrderTraversal(root, result = []) {
    if (!root) return result;

    if (root.left) {
      this.postOrderTraversal(root.left, result);
    }

    if (root.right) {
      this.postOrderTraversal(root.right, result);
    }

    result.push(root.val);

    return result;
  }

  kthSmallestElement(root, k) {
    let n = 0;
    let stack = [];
    let current = root;

    while (current || stack.length > 0) {
      while (current) {
        stack.push(current);
        current = current.left;
      }

      current = stack.pop();
      n++;
      if (n === k) return current.val;

      current = current.right;
    }

    return -1;
  }

  // build tree using inorder and preorder traversals
  buildTree(preorder, inorder) {
    if (!preorder.length || !inorder.length) return null;

    let root = new TreeNode(preorder[0]);
    let mid = inorder.indexOf(root.val);

    root.left = this.buildTree(
      preorder.slice(1, mid + 1),
      inorder.slice(0, mid)
    );
    root.right = this.buildTree(
      preorder.slice(mid + 1),
      inorder.slice(mid + 1)
    );

    return root;
  }

  // for regular binary trees
  hasPathSum(root, targetSum, currentSum = 0) {
    if (!root) return false;

    currentSum += root.val;

    if (currentSum > targetSum) return false;
    if (!root.left && !root.right && currentSum === targetSum) return true;
    if (!root.left && !root.right && currentSum !== targetSum) return false;

    if (hasPathSum(root.left, targetSum, currentSum)) return true;
    if (hasPathSum(root.right, targetSum, currentSum)) return true;

    currentSum -= root.val;
    return false;
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
