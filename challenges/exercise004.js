export function findSmallNums(nums) {
  if (!nums) throw new Error("nums is required");
  return nums.filter((n) => n < 1);
}

export function findNamesBeginningWith(names, char) {
  if (!names) throw new Error("names is required");
  if (!char) throw new Error("char is required");
  return names.filter((n) => n.charAt(0) === char);
}

export function findVerbs(words) {
  if (!words) throw new Error("words is required");
  const verbIndicator = "to ";
  return words.filter((w) => w.substring(0, 3) === verbIndicator);
}

export function getIntegers(nums) {
  if (!nums) throw new Error("nums is required");
  return nums.filter((n) => Number.isInteger(n) === true);
}

export function getCities(users) {
  if (!users) throw new Error("users is required");
  const cityHolding = [];
  for (let i = 0; i < users.length; i++) {
    const item = users[i];
    const cityCode = users[i].data.city.displayName;
    cityHolding.push(cityCode);
  }
  return cityHolding;
}

export function getSquareRoots(nums) {
  if (!nums) throw new Error("nums is required");
  return nums.map((n) => Number(Math.sqrt(n).toFixed(2)));
}

export function findSentencesContaining(sentences, str) {
  if (!sentences) throw new Error("sentences is required");
  if (!str) throw new Error("str is required");
  // Your code here
}

export function getLongestSides(triangles) {
  if (!triangles) throw new Error("triangles is required");
  // Your code here
}
