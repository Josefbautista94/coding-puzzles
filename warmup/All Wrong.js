
/**
 * @param {number} N
 * @param {string} C
 * @return {string}
 */
function getWrongAnswers(N, C) {
  // Write your code here
  return C.split('').map((a) => a === "A" ? "B" : "A").join('');
}
