/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
  var loveTrianglesCount = 0;

  for (i = 0; i < preferences.length; i++) {
    var loverOfFirst = preferences[i];
    var loverOfSecond = preferences[loverOfFirst - 1];
    var loverOfThird = preferences[loverOfSecond - 1]; 
    if (loverOfThird == (i + 1)) {
      loveTrianglesCount++;
    }
  }
  return Math.floor(loveTrianglesCount / 3);
};
