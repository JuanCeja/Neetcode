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
    const openingBrackets = {
        "[": "]",
        "(": ")",
        "{": "}"
    }

    const stack = [];

    for (let bracket of s) {
        if (openingBrackets[bracket]) {
            stack.push(bracket);
        } else {
            const lastOpeningBracket = stack.pop();
            if (openingBrackets[lastOpeningBracket] !== bracket) return false;
        }
    }
    return stack.length === 0;
};

console.log(isValid("()[]{}")); // true
console.log(isValid("()")); // true
console.log(isValid("(]")); // false