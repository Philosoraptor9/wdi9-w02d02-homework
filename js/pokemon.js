console.log('I choose you, asshole!')

// game object - method for calling dealCards function 3 times
//             - method for playing cards, player plays, then autoplayer plays
//             - if check to compare damage of cards played
//             - if one is higher than the other, (higher damange) wins!
//             - discard both cards
// display score
// repeat
// once both hands (3 cards drawn) are depleted, round over
// new round, draw 3 new cards (?)

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

const players = {  
  playerHand: [],
  autoPlayerHand: []
};

const cardsInPlay = {
  playerPlayed: [],
  autoPlayerPlayed: [],
};

const discard = [];

let playerScore = 0;

let autoPlayerScore = 0;


const dealCard = (players) => {
  console.log(`Dealt cards`);
  let dealRandom = Math.floor(Math.random() * pokeDeck.length);
  let cardToDeal1 = pokeDeck.splice(dealRandom, 1)[0];
  let cardToDeal2 = pokeDeck.splice(dealRandom, 1)[0];
    players.playerHand.push(cardToDeal1);
    players.autoPlayerHand.push(cardToDeal2);
}

const Round = (players) => {
  let playerPlay = Math.floor(Math.random() * players.playerHand.length);
  let autoPlayerPlay = Math.floor(Math.random() * players.autoPlayerHand.length);
    cardsInPlay.playerPlayed.push(players.playerHand.splice(playerPlay, 1)[0]);
    cardsInPlay.autoPlayerPlayed.push(players.autoPlayerHand.splice(autoPlayerPlay, 1)[0]);

  while (players.playerHand > 0 && players.autoPlayerHand > 0) {
    if (cardsInPlay.playerPlayed[i].damage > cardsInPlay.autoPlayerPlayed[i].damage) {
      playerScore++;
        console.log(`Player played ${cardsInPlay.playerPlayed[i]}. It was super effective! Player wins!`);
        discard.push(cardsInPlay.splice(playerPlayed, 1)[0], cardsInPlay.splice(autoPlayerPlayed, 1)[0]);

  } else if (cardsInPlay.autoPlayerPlayed[i].damage > cardsInPlay.playerPlayed[i].damage) {
     autoPlayerScore++;
      console.log(`autoPlayer played ${cardsInPlay.autoPlayerPlayed[i]}. It was super effective! autoPlayer wins!`)
      discard.push(cardsInPlay.splice(playerPlayed, 1)[0], cardsInPlay.splice(autoPlayerPlayed, 1)[0]);

  } else {
      console.log(`Player played ${cardsInPlay.playerPlayed[i]} and autoPlayer played ${cardsInPlay.autoPlayerPlayed[i]}. 
      Neither were effective!`)
      discard.push(cardsInPlay.splice(playerPlayed, 1)[0], cardsInPlay.splice(autoPlayerPlayed, 1)[0]);
   }
  }
}

dealCard(players);
dealCard(players);
dealCard(players);
Round(players);


console.log(players.playerHand);
console.log(players.autoPlayerHand);

// console.log(pokeDeck);
// console.log(pokeDeck.length);

console.log(cardsInPlay);
console.log(playerScore);
console.log(autoPlayerScore);
console.log(discard);
