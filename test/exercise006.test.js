import {
  sumMultiples,
  isValidDNA,
  getComplementaryDNA,
  isItPrime,
  createMatrix,
  areWeCovered,
} from "../challenges/exercise006";

xdescribe("sumMultiples", () => {
  test("sums all numbers in the given array that are multiples of 3 or 5", () => {
    expect(sumMultiples([5, 3, 7, 8, 1, 10])).toBe(18);
    expect(sumMultiples([4, 22, 654, 123, 65, 23, 40, 1])).toBe(882);
  });

  test("if a number is a multiple of 3 AND 5, make sure it is only added once", () => {
    expect(sumMultiples([5, 3, 7, 8, 15, 1])).toBe(23);
  });

  test("if there are no multiples of 3 or 5, returns null", () => {
    expect(sumMultiples([1, 2, 7, 8, 1, 11])).toBe(null);
  });

  test("check the code picks up the first and last numbers", () => {
    expect(sumMultiples([3, 2, 7, 8, 1, 5])).toBe(8);
  });

  test("if the number is found more than once, make sure it is added both times", () => {
    expect(sumMultiples([5, 3, 7, 8, 1, 3, 10])).toBe(21);
  });

  test("if there is a negative multiple of 3 or 5, make sure the number is subtracted from the total rather than added", () => {
    expect(sumMultiples([5, 3, 7, 8, 1, 3, -10])).toBe(1);
    expect(sumMultiples([5, 3, 5, 8, 1, 3, -20])).toBe(-4);
  });
});

describe("isValidDNA", () => {
  test("passes if the string only contains permitted characters", () => {
    expect(isValidDNA("AGTCCT")).toBe(true);
  });

  test("fails if the string contains a non permitted character", () => {
    expect(isValidDNA("AGTZ")).toBe(false);
    expect(isValidDNA("AGT ")).toBe(false);
    expect(isValidDNA("AGT$")).toBe(false);
  });
  test("fails if the string contains the right letters but lower case", () => {
    expect(isValidDNA("cGTA")).toBe(false);
  });
});

xdescribe("getComplementaryDNA", () => {
  test("Needs to change to be like the one above", () => {
    expect(getComplementaryDNA(5)).toBe(5);
    expect(getComplementaryDNA(104)).toBe(401);
    expect(getComplementaryDNA(12345)).toBe(54321);
    expect(getComplementaryDNA(100)).toBe(1); // No leading 0 necessary
  });
});

xdescribe("isItPrime", () => {
  test("returns the total of the numbers in all sub arrays", () => {
    const arrs = [[1, 2, 3], [6, 3, 1], [1], [9, 10], [3, 5]];
    expect(isItPrime(arrs)).toBe(44);
  });
});

xdescribe("createMatrix", () => {
  test("returns an array with the first and last items swapped", () => {
    expect(createMatrix([1, 2])).toEqual([2, 1]);
    expect(createMatrix([1, 2, 3])).toEqual([3, 2, 1]);
    expect(createMatrix([1, 2, 3, 4])).toEqual([4, 2, 3, 1]);
  });

  test("makes no difference when the array length is < 2", () => {
    expect(createMatrix([1])).toEqual([1]);
    expect(createMatrix([])).toEqual([]);
  });
});

xdescribe("areWeCovered", () => {
  test("returns true if any of the properties of an object contain the specified string", () => {
    const obj1 = {
      name: "LINNMON",
      description: "Small round table",
      price: 31.89,
      store: "Warrington",
      code: 12872,
    };
    expect(areWeCovered(obj1, "table")).toBe(true);

    // Note that the objects provided to the function could have any keys/values
    const obj2 = {
      product_name: "Sparkle n Shine Dishwasher Tablets",
      price: 1.99,
      location: "Hulme",
      discounted: false,
      available: true,
    };
    expect(areWeCovered(obj2, "Dishwasher")).toBe(true);
  });

  test("returns false if none of the properties of an object contain the specified string", () => {
    const obj1 = {
      name: "LINNMON",
      description: "Small round table",
      price: 31.89,
      store: "Warrington",
      code: 12872,
    };
    expect(areWeCovered(obj1, "chair")).toBe(false);

    // Note that the objects provided to the function could have any keys/values
    const obj2 = {
      product_name: "Sparkle n Shine Dishwasher Tablets",
      price: 1.99,
      location: "Hulme",
      discounted: false,
      available: true,
    };
    expect(areWeCovered(obj2, "Carpet Cleaner")).toBe(false);
  });

  test("The search string should not be case sensitive", () => {
    const obj1 = {
      name: "LINNMON",
      description: "Small round table",
      price: 31.89,
      store: "Warrington",
      code: 12872,
    };

    expect(areWeCovered(obj1, "warrington")).toBe(true);
    expect(areWeCovered(obj1, "linnmon")).toBe(true);
    expect(areWeCovered(obj1, "Liverpool")).toBe(false);
  });
});
