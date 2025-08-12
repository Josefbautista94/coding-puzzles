

/**
 * @param {number} A
 * @param {number} B
 * @param {number} C
 * @return {number}
 */
function getSum(A, B, C) {
  // Write your code here
  return [A,B,C].reduce((a,b) => a+b);
}
