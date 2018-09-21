
// game object - method for calling dealCards function 3 times
//             - method for playing cards, player plays, then autoplayer plays
//             - if check to compare damage of cards played
//             - if one is higher than the other, (higher damange) wins!
//             - discard both cards
// display score
// repeat
// once both hands (3 cards drawn) are depleted, round over
// new round, draw 3 new cards (?)

// jQuery add - ins:
// Button for dealing cards - disappears after hand is dealt, re-appears after each round
// Button to start the game - plays cards in hand (1 by 1?), displays message declaring winner or loser of each hand
// Scoreboard - displays the whole game, updates after each hand
// Player hand - player should be able to see their hand (text?)

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


let playerPlayed = []; 

let autoPlayerPlayed = [];

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
    playerPlayed.push(players.playerHand.splice(playerPlay, 1)[0]);
    autoPlayerPlayed.push(players.autoPlayerHand.splice(autoPlayerPlay, 1)[0]);

  while (players['playerHand'].length > 0 && players['autoPlayerHand'].length > 0) {
    console.log(playerPlayed[0])
    console.log(autoPlayerPlayed[0])

    if (playerPlayed[0].damage > autoPlayerPlayed[0].damage) {
      playerScore++;
      console.log(`Player played ${playerPlayed[0].name}. 
      autoPlayer played ${autoPlayerPlayed[0].name}.
      ${playerPlayed[0].name} was super effective! Player wins!`);

  } else if (autoPlayerPlayed[0].damage > playerPlayed[0].damage) {
     autoPlayerScore++;
      console.log(`autoPlayer played ${autoPlayerPlayed[0].name}. 
      Player played ${playerPlayed[0].name}. 
      ${autoPlayerPlayed[0].name} was super effective! autoPlayer wins!`);

  } else {
      console.log(`Player played ${playerPlayed[0].name} and 
      autoPlayer played ${autoPlayerPlayed[0].name}. 
      Neither were effective!`);
   } 

   discard.push(playerPlayed.splice(playerPlayed, 1)[0], autoPlayerPlayed.splice(autoPlayerPlayed, 1)[0]);
   return (playerScore, autoPlayerScore);
  } 
  
}


$('#deal').click(function() {
dealCard(players);
dealCard(players);
dealCard(players);
console.log(players.playerHand);
console.log(players.autoPlayerHand);
for (let i = 0; i < players['playerHand'].length; i++){
  const display = $('<li/>').text(JSON.stringify(players.playerHand[i].name));
  $('ul').append(display)
}
})


$('#start').click(function() {
Round(players);
Round(players);
Round(players);
Round(players);
console.log(playerScore);
console.log(autoPlayerScore);
})

// console.log(pokeDeck);
// console.log(pokeDeck.length);


// console.log(players.playerHand.length);

// console.log(players.autoPlayerHand.length);

console.log(discard);


