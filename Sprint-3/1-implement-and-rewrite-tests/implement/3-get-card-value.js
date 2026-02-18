// This problem involves playing cards: https://en.wikipedia.org/wiki/Standard_52-card_deck

// Implement a function getCardValue, when given a string representing a playing card,
// should return the numerical value of the card.

// A valid card string will contain a rank followed by the suit.
// The rank can be one of the following strings:
//   "A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"
// The suit can be one of the following emojis:
//   "♠", "♥", "♦", "♣"
// For example: "A♠", "2♥", "10♥", "J♣", "Q♦", "K♦".

// When the card is an ace ("A"), the function should return 11.
// When the card is a face card ("J", "Q", "K"), the function should return 10.
// When the card is a number card ("2" to "10"), the function should return its numeric value.

// When the card string is invalid (not following the above format), the function should
// throw an error.

// Acceptance criteria:
// After you have implemented the function, write tests to cover all the cases, and
// execute the code to ensure all tests pass.

function getCardValue(card) {
  if (typeof card !== "string" || card.length < 2){
    throw new Error("Invalid card");
  }

  const suits = ["♠", "♥", "♦", "♣"];
  const suit = card.slice(-1);
  const rank = card.slice(0,-1);

  if (!suits.includes(suit)) {
    throw new Error("Invalid card");
  }

  if (rank === "A") return 11;
  if (["J", "Q", "K"].includes(rank)) return 10;

  const numericValue = Number(rank);

  if (numericValue >= 2 && numericValue <= 10) {
    return numericValue;
  }
  
  throw new Error("Invalid card");
  }

// The line below allows us to load the getCardValue function into tests in other files.
// This will be useful in the "rewrite tests with jest" step.
module.exports = getCardValue;

// Helper functions to make our assertions easier to read.
function assertEquals(actualOutput, targetOutput) {
  console.assert(
    actualOutput === targetOutput,
    `Expected ${actualOutput} to equal ${targetOutput}`
  );
}

// TODO: Write tests to cover all outcomes, including throwing errors for invalid cards.
// Examples:
assertEquals(getCardValue("9♠"), 9);

//Ace
assertEquals(getCardValue("A♠"), 11);

//Face cards
assertEquals(getCardValue("J♥"), 10);
assertEquals(getCardValue("Q♦"), 10);
assertEquals(getCardValue("K♣"), 10);

// Numeric Cards 
assertEquals(getCardValue("2♠"), 2);
assertEquals(getCardValue("10♦"), 10);

// Handling invalid cards
try {
  getCardValue("invalid");

  // This line will not be reached if an error is thrown as expected
  console.error("Error was not thrown for invalid card");
} catch (e) {}

// What other invalid card cases can you think of?
