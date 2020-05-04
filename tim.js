[
  { winner: "Alice", loser: "Bob", loser_points: 3 },
  { winner: "Carol", loser: "Dean", loser_points: 1 },
  { winner: "Elise", loser: "Bob", loser_points: 2 },
  { winner: "Elise", loser: "Carol", loser_points: 4 },
  { winner: "Alice", loser: "Carol", loser_points: 2 },
  { winner: "Carol", loser: "Dean", loser_points: 3 },
  { winner: "Dean", loser: "Elise", loser_points: 2 }
];

// // Write a function that returns a list of all the player names (no player should be listed more than once).

const players = (array) => {
  for (let i = 0; i < array.length; i++) {
    let playersArray = [];
    // if winner is not in array
    if (!playersArray.includes(array[i].winner)) {
      playersArray.push(array[i].winner);
    }
    // if loser is not in array
    if (!playersArray.includes(array[i].loser)) {
      playersArray.push(array[i].loser));
    }
  return playersArray;
};

// Write a function that produces a data structure like the following, which lists each participant, and a list of who they've beaten.

const winReport = (array) => {
  const players = players(array)
  // find the losers that correspond to each array item and return an array of losers for each
  result = {};
  for (let i = 0; i < players.length; i++) {
    result.players[i] = []
  }
  for (const outcome of array) {
    if (!result["outcome.winner"].includes(outcome.loser)) {
      // if the loser of the array matches to the key of the result object, then push that loser into the corresponding array
      result["outcome.winner"].push(outcome.loser);
    }
  }
  return result;
}

// Write a function to produce a data structure which lists each participant, and a list of who beat them. This is, in a sense, the inverse of the result from Question 2
// output
// {
//   'Alice': [],
//   'Bob':   ['Alice', 'Elise'],
//   'Carol': ['Alice', 'Elise'],
//   'Dean':  ['Carol'],
//   'Elise': ['Dean']
// }

const winners = {
  'Alice': ['Bob', 'Carol'],
  'Bob':   [],
  'Carol': ['Dean'],
  'Dean':  ['Elise'],
  'Elise': ['Bob', 'Carol'],
}

const lossReport = (object) => {
  result = {};
  const players = Object.keys(object);
  for (player of players) {
    result[player] = [];
  }

  for (const outcome of array) {
    if (!result["outcome.winner"].includes(outcome.loser)) {
      // if the loser of the array matches to the key of the result object, then push that loser into the corresponding array
      result["outcome.winner"].push(outcome.loser);
    }
  for (const person of object)
    for ()
  // if (object["Alice"].includes('Bob')) {
  //   !
  //   result[Bob].push(Alice)
  }
}