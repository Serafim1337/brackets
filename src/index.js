module.exports = function check(str, bracketsConfig) {
  const openBrackets = [];
  const bracketsPairs = {};
  let stack = [];

  bracketsConfig.forEach((element) => {
    openBrackets.push(element[0]);
    bracketsPairs[element[0]] = element[1];
  });

  // console.log(openBrackets);
  // console.log(bracketsPairs);

  for (let i = 0; i < str.length; i++) {
    let currentBracket = str[i];
    if (
      openBrackets.includes(currentBracket) &&
      stack[stack.length - 1] !== "|"
    ) {
      stack.push(currentBracket);
    } else {
      if (stack.length === 0) {
        // console.log("here1");
        return false;
      }

      let lastBracket = stack[stack.length - 1];
      // console.log(i);
      // console.log(currentBracket);
      // console.log(bracketsPairs[currentBracket]);
      // console.log(lastBracket);
      if (
        bracketsPairs[lastBracket] === currentBracket ||
        currentBracket === "|"
      ) {
        stack.pop();
      }
    }
  }

  // console.log("here2");
  return stack.length === 0;
};
