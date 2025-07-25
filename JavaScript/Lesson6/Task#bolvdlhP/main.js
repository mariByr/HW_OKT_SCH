
// Описати колоду карт (від 6 до туза без джокерів). Більшу частину колоди можна описати з використанням циклу

// Після опису, використовуючи функції масивів:

    // – знайти піковий туз
 //
 // – всі шістки

 // – всі червоні карти

// – всі бубни

 // – всі трефи від 9 та більше
// Приклад моделі об’єкту карти:
// {
//     cardSuit: ”, // ‘spade’, ‘diamond’, ’heart’, ‘clubs’

    // value: ,// 6-10, ‘ace’,’jack, ’queen’, ’king’

    // color:, // ‘red,’black’

// }

let cardSuits = ['spade', 'diamond','heart','clubs' ];
let values = ['6', '7', '8', '9', '10', 'ace','jack','queen','king'];
let deck= []

        for (const cardSuit of cardSuits) {
            for (const value of values){
                let color
                if (cardSuit === 'spade'|| cardSuit
                    ==='clubs' )
                    color = 'black';
                else color = 'red';
                deck.push({
                    suit: cardSuit,
                    value:value,
                    color: color,
                    });
            }
        }
  console.log(deck);
        console.log(deck.find(card=>card.suit==='clubs'&& card.value==='ace'));
        allSix= deck.filter(card=>card.value === '6');
        console.log(allSix);
        allRedCards = deck.filter(card=>card.color === 'red');
        console.log(allRedCards);
        allDiamonds = deck.filter(card=>card.suit === 'diamond');
        console.log(allDiamonds);
         let allHight =['9', '10',  'ace','jack','queen','king']

         hightClubs = deck.filter(card=>card.suit==='clubs' &&
         allHight.includes(card.value));
         console.log(hightClubs
         );

// #EP5I1UUzAX

// Взяти описану колоду карт, та за допомогою reduce “упакувати” всі карти по “мастях” в об’єкт
// Приклад моделі кінцевого об’єкту
// {spades[],
    // diamonds:[],
    // hearts:[],
    // clubs:[]
 const groupCards = deck.reduce((acc, card)=> {
     if (!acc[card.suit]) {
         acc[card.suit] = [];
     }
     acc[card.suit].push(card.value);
     return acc;
 }, {});
 console.log(groupCards);
