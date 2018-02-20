/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
    var result = 0;
    var triangle = 3; // triangle have 3 corners
    for (var i = 0; i < preferences.length; i++) {
        var k = 1;
        if (i + k == preferences[preferences[preferences[i] - k] - k]
                  && preferences[preferences[i] - k] != preferences[i] ) {
        result++;
        }
    }
    return (result / triangle); //return our result
}
