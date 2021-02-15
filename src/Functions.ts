/**
 * Functions Types
 */
function add(x: number, y: number): number {
  return x + y;
}

let myAdd = function (x: number, y:number): number {
  return x + y;
}

/**
 * Optional and Default Parameters
 */
function buildName(firstName: string, lastName?: string) {
  if (lastName) return firstName + " " + lastName;
  else return firstName;
}

/**
 * Rest Parameters
 */
function buildName2(firstName: string, ...restOfName: string[]) {
  return firstName + " " + restOfName.join(" ");
}

/**
 * This and arrow functions
 */
let deck = {
  suits: ["hearts", "spades", "clubs", "diamonds"],
  cards: Array(52),
  createCardPicker: function () {
    return () => {
      let pickerCard = Math.floor(Math.random() * 52);
      let pickerSuit = Math.floor(pickerCard / 13);

      return { suit: this.suits[pickerSuit], card: pickerCard % 13 };
    };
  },
};

let cardPicker = deck.createCardPicker();
let pickerCard = cardPicker();

alert("card: " + pickerCard.card + "of" + pickerCard.suit);