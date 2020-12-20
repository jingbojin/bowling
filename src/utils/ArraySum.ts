export const arraySum = (numArray: number[]): number => {
  return numArray.reduce(sum, 0);
}

// this function is only accurate when using `Int`, number with decimal points
// will need to use library like `Big.js`
export const sum = (a: number, b: number): number => {
  return (a + b);
}
