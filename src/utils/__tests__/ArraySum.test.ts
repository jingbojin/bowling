import { arraySum, sum } from '../ArraySum';

describe('test ArraySum.ts --> arraySum()', () => {
  it.each`
    numArray          | expectedResult
    ${[]}             | ${0}
    ${[0, 0]}         | ${0}
    ${[1, 0, 2, 5]}   | ${8}
    ${[5, 'df']}      | ${'5df'}
  `('$numArray => $expectedResult', ({ numArray, expectedResult }) => {
    expect(arraySum(numArray)).toBe(expectedResult);
  });
})

describe('test ArraySum.ts --> sum()', () => {
  it.each`
    a    | b        | expectedResult
    ${0} | ${0}     | ${0}
    ${2} | ${4}     | ${6}
    ${5} | ${'df'}  | ${'5df'}
  `('$a + $b => $expectedResult', ({ a, b, expectedResult }) => {
    expect(sum(a, b)).toBe(expectedResult);
  });
})
