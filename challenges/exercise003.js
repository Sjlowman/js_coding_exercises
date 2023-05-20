export function getSquares(nums) {
  if (nums === undefined) throw new Error("nums is required");
  return nums.map((n) => Math.pow(n, 2));
}

export function camelCaseWords(words) {
  if (words === undefined) throw new Error("words is required");
  const lowerCaseAll = words.map((w) => w.toLowerCase());
  const [first, ...remaining] = lowerCaseAll;
  const properCaseSection = remaining
    .toString()
    .replace(/\b\w/g, (x) => x.toUpperCase());
  return (first + properCaseSection).replaceAll(",", "");
}

export function getTotalSubjects(people) {
  if (people === undefined) throw new Error("people is required");
  const subjectArray = [];
  for (let i = 0; i < people.length; i++) {
    subjectArray.push(...people[i].subjects);
  }
  return subjectArray.filter(function (n) {
    return n;
  }).length;
}

export function checkIngredients(menu, ingredient) {
  if (menu === undefined) throw new Error("menu is required");
  if (!ingredient) throw new Error("ingredient is required");
  let allIngredients = [];
  for (let i = 0; i < menu.length; i++) {
    allIngredients.push(menu[i].ingredients);
  }
  //return allIngredients.indexOf(ingredient) !== -1;
  let stringIngredients = allIngredients.toString();
  let compareArray = stringIngredients.split(",");
  return compareArray.includes(ingredient);
}

export function duplicateNumbers(arr1, arr2) {
  if (arr1 === undefined) throw new Error("arr1 is required");
  if (arr2 === undefined) throw new Error("arr2 is required");
  const intersection = [
    ...new Set(arr1.filter((element) => arr2.includes(element))),
  ];
  return intersection.sort((a, b) => a - b);
}
