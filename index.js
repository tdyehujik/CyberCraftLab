function generateParenthesis(n) {
  const result = [];
  backtrack("", 0, 0);
  return result;
  function backtrack(current, open, close) {
    if (current.length === 2 * n) result.push(current);
    if (open < n) backtrack(current + "(", open + 1, close);
    if (close < open) backtrack(current + ")", open, close + 1);
  }
}
