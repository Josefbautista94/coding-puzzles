
/**
 * @param {number} R
 * @param {number} C
 * @param {number[][]} G
 * @return {number}
 */
function getHitProbability(R, C, G) {
    // Write your code here

    let ships = 0;

    for (let i = 0; i < R; i++) {
        for (let j = 0; j < C; j++) {
            ships += G[i][j];
        }
    }
    return ships / (R * C)
}
