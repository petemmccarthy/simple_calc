
export const add = (num1, num2) => {
  let addTotal;
  num1 = num1 * 100;
  num2 = num2 * 100;
  addTotal = ((num1 + num2) / 100);
  return addTotal;
};

export const subtract = (num1, num2) => {
  let subtractTotal;
  num1 = num1 * 100;
  num2 = num2 * 100;
  subtractTotal = ((num1 - num2) / 100);
  return subtractTotal;
};
