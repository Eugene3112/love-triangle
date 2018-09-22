/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
  let triangles = 0;
  for (let i = 0; i < preferences.length; i++) {
    let s1 = preferences[i] - 1;
    let s2 = preferences[s1] - 1;
    let s3 = preferences[s2] - 1;

    if (s3 === i && s1 !== s2 && s1 !== s3 && s2 !== s3) {
      triangles++;
    }
  }
  return triangles / 3;
};
