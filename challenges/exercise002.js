export function getFillings(sandwich) {
  if (sandwich === undefined) throw new Error("ingredients is required");
  return sandwich.fillings;
}

export function isFromManchester(person) {
  if (person === undefined) throw new Error("person is required");
  return person.city === "Manchester";
}

export function getBusNumbers(people) {
  if (people === undefined) throw new Error("people is required");
  return Math.ceil(people / 40);
}

export function countSheep(arr) {
  if (arr === undefined) throw new Error("arr is required");
  return arr.filter((a) => {
    if (a === "sheep") {
      return true;
    }
    return false;
  }).length;
}

export function hasMPostCode(person) {
  if (person === undefined) throw new Error("person is required");
  if (person.address.city !== "Manchester") {
    return false;
  } else if (person.address.postCode.substring(0, 1) !== "M") {
    return false;
  } else {
    return true;
  }
}
