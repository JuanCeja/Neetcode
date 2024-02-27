// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

// An input string is valid if:

// 1. Open brackets must be closed by the same type of brackets.
// 2. Open brackets must be closed in the correct order.
// 3. Every close bracket has a corresponding open bracket of the same type.

// Example 1:
// Input: s = "()"
// Output: true

// Example 2:
// Input: s = "()[]{}"
// Output: true

// Example 3:
// Input: s = "(]"
// Output: false

const isValid = (s) => {
    // create map with closing tags as keys and opening as values
    // create our stack
    // iterate our string
        // if we encounter a open tag push it to stack
        // if we encounter a closing tag
            // check if the top of the stack matches it. if it does pop it
            // else return false
    // return true
        
};

console.log(isValid("()[]{}")); // true
console.log(isValid("()")); // true
console.log(isValid("(]")); // false