/* #4 Write an efficient method that tells us whether or not an input string brackets ("{", "}",
"(", ")", "[", "]") opened and closed properly. Example: “{[]}” => true, “{(])}” => false,
“{([)]}” => false
*/
const areBracketsBalanced = (str) => {
  const stack = [];
  const bracketMap = {
    "(": ")",
    "{": "}",
    "[": "]",
  };
  for (let char of str) {
    if (bracketMap[char]) {
      stack.push(char);
    } else if (Object.values(bracketMap).includes(char)) {
      const last = stack.pop();
      if (bracketMap[last] !== char) {
        return false;
      }
    }
  }
  return stack.length === 0;
};

export default areBracketsBalanced;
