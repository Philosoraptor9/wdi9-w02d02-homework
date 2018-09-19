console.log('I choose you, asshole!')

// player vs. computer
// variable (array of objects) for each
// each draws 3 random cards 
// player chooses one (random)
// computer chooses one (random) (function - draw cards, deposit them in each player's array)
// cards chosen are removed from deck permanantly
// alternating
// once 3 cards each are drawn, game begins (function - begin game, extract cards from each player's array)
// player plays random card
// computer plays random card
// card w/ highest damage wins point (variable - cards in play)
// display score
// repeat
// once both hands (3 cards drawn) are depleted, round over


const pokeDeck = [
    {
      name: "Bulbasaur",
      damage: 60
    }, {
      name: "Caterpie",
      damage: 40
    }, {
      name: "Charmander",
      damage: 60
    }, {
      name: "Clefairy",
      damage: 50
    }, {
      name: "Jigglypuff",
      damage: 60
    }, {
      name: "Mankey",
      damage: 30
    }, {
      name: "Meowth",
      damage: 60
    }, {
      name: "Nidoran - female",
      damage: 60
    }, {
      name: "Nidoran - male",
      damage: 50
    }, {
      name: "Oddish",
      damage: 40
    }, {
      name: "Pidgey",
      damage: 50
    }, {
      name: "Pikachu",
      damage: 50
    }, {
      name: "Poliwag",
      damage: 50
    }, {
      name: "Psyduck",
      damage: 60
    }, {
      name: "Rattata",
      damage: 30
    }, {
      name: "Squirtle",
      damage: 60
    }, {
      name: "Vulpix",
      damage: 50
    }, {
      name: "Weedle", 
      damage: 40
    }
  ];

  let playerHand = [];

  let autoPlayerHand = [];

  let draw = 0;

 
  const playerDraw = (pokeDeck) =>{
    for (let i = 0; i < pokeDeck.length; i++) {
        let cardDrawn1 = (pokeDeck[Math.ceil(Math.random() * pokeDeck.length)]);
        console.log(cardDrawn1);
        playerHand.push(cardDrawn1);
        return playerHand;
    }
}

// const removeFromDeck = () => {
//     if (cardDrawn1 === pokeDeck[i]){
//     pokeDeck.splice(pokeDeck[i], 1);
// } return pokeDeck;
// }

// get the pokeDeck index back from cardDrawn1... ?


// function getRandomSubarray (arr, size) {
//     var shuffled = arr.slice(0), i = arr.length, min = i - size, temp, index;
//     while (i-- > min) {
//         index = Math.floor((i + 1) * Math.random());
//         temp = shuffled[index];
//         shuffled[index] = shuffled[i];
//         shuffled[i] = temp;
//     }
//     return shuffled.slice(min);
// }

const dealCard = (player) =>{
  console.log(`Deal card to ${player}`);
  let randomIndex = Math.floor(Math.random() * this.pokeDeck.length);
  let cardToDeal = pokeDeck.splice(randomIndex, 1)[0];
  playerHand.push(cardToDeal);
},

// Still duplicating cards drawn....

let autoPlayerDraw = (pokeDeck) =>{
    for (let i = 0; i < pokeDeck.length; i++) {
        let cardDrawn2 = (pokeDeck[Math.ceil(Math.random() * pokeDeck.length)]);
        console.log(cardDrawn2);
        autoPlayerHand.push(cardDrawn2);
        return autoPlayerHand;
    }
}
  
  // get down to 3 per hand
  // remove from pokeDeck array after drawn

playerDraw(pokeDeck);
getRandomSubarray(pokeDeck, 18);
autoPlayerDraw(pokeDeck);
getRandomSubarray(pokeDeck, 18);
playerDraw(pokeDeck);
getRandomSubarray(pokeDeck, 18);
autoPlayerDraw(pokeDeck);
playerDraw(pokeDeck);
getRandomSubarray(pokeDeck, 18);
autoPlayerDraw(pokeDeck);
getRandomSubarray(pokeDeck, 18);
// console.log(pokeDeck);
// console.log(pokeDeck.length)
// console.log(playerHand);
// console.log(autoPlayerHand);

