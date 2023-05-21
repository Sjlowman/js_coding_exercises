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
  const initialValue = 0;
  return arrs
    .flat()
    .reduce(
      (accumulator, currentValue) => accumulator + currentValue,
      initialValue
    );
};

export const arrShift = (arr) => {
  if (arr === undefined) throw new Error("arr is required");
  if (arr.length <= 1) return arr;
  const firstNum = arr.slice(0, 1);
  const lastNum = arr.slice(-1);
  const middleNums = arr.slice(1, -1);
  return lastNum.concat(middleNums, firstNum);
};

export const findNeedle = (haystack, searchTerm) => {
  if (haystack === undefined) throw new Error("haystack is required");
  if (searchTerm === undefined) throw new Error("searchTerm is required");
  const arrayToSearch = [];
  for (let key in haystack) {
    arrayToSearch.push(haystack[key] + "");
  }
  const matchingRecords = arrayToSearch.filter((w) =>
    w.toLowerCase().includes(searchTerm.toLowerCase())
  );
  if (matchingRecords.length === 0) {
    return false;
  } else {
    return true;
  }
};

export const getWordFrequencies = (str) => {
  if (str === undefined) throw new Error("str is required");
  const noSpecialCharsLower = str.replace(/[^\w ]/g, "").toLowerCase();
  const arrayToGroup = noSpecialCharsLower.split(" ");

  const frequencies = {};
  for (let i = 0; i < arrayToGroup.length; i++) {
    const word = arrayToGroup[i];
    if (frequencies[word] === undefined) {
      frequencies[word] = 1;
    } else {
      frequencies[word] += 1;
    }
  }
  return frequencies;
};
