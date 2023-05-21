export const findNextNumber = (nums, n) => {
  if (nums === undefined) throw new Error("nums is required");
  if (n === undefined) throw new Error("n is required");
  const indexOfNumber = nums.findIndex((x) => x === n);
  if (indexOfNumber === -1) return null;
  return nums[indexOfNumber + 1] || null;
};

export const count1sand0s = (str) => {
  if (str === undefined) throw new Error("str is required");
  const arrayToCheck = str.split("");
  const numberArrayToCheck = arrayToCheck.map((item) => Number(item));
  const groupedDigits = numberArrayToCheck.reduce((allDigits, currDigit) => {
    const currCount = allDigits[currDigit] ?? 0;
    return {
      ...allDigits,
      [currDigit]: currCount + 1,
    };
  }, {});
  return groupedDigits;
};

export const reverseNumber = (n) => {
  if (n === undefined) throw new Error("n is required");
  const numAsText = n.toString();
  return Number(numAsText.split("").reverse().join(""));
};

export const sumArrays = (arrs) => {
  if (arrs === undefined) throw new Error("arrs is required");
  // Your code here!
};

export const arrShift = (arr) => {
  if (arr === undefined) throw new Error("arr is required");
  // Your code here!
};

export const findNeedle = (haystack, searchTerm) => {
  if (haystack === undefined) throw new Error("haystack is required");
  if (searchTerm === undefined) throw new Error("searchTerm is required");
  // Your code here!
};

export const getWordFrequencies = (str) => {
  if (str === undefined) throw new Error("str is required");
  // Your code here!
};
