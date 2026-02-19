// This statement loads the isProperFraction function you wrote in the implement directory.
// We will use the same function, but write tests for it using Jest in this file.
const isProperFraction = require("../implement/2-is-proper-fraction");

// TODO: Write tests in Jest syntax to cover all combinations of positives, negatives, zeros, and other categories.

// Special case: numerator is zero
test(`should return false when denominator is zero`, () => {
  expect(isProperFraction(1, 0)).toEqual(false);
});

// Numerator is zero
test(`should return false when numerator is zero`, () => {
  expect(isProperFraction(0, 1)).toEqual(true);
}); 

//Proper fractions 
test("should return true for proper fractions", () => {
  expect(isProperFraction(1,2)).toEqual(true);
  expect(isProperFraction(2,5)).toEqual(true);
})

//Equal Numerator and Denominator  
test("should return false when numerator equals denominator", () => {
  expect(isProperFraction(2,2)).toEqual(false);
})