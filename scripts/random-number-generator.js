function generateRandomNumber() {
  let min = document.getElementById("min").value;
  let max = document.getElementById("max").value;

  // let randomNumber = Math.floor(Math.random() * (max - min + 1) + min)

  // let random = Math.random();

  min = parseInt(min);
  max = parseInt(max);

  // console.log(random);
  //
  // console.log(`random (${random}) * max (${max}) = ${random * max}`);
  //
  // console.log(`+ min (${min}) = ${(random * max) + min}`);

  let number = Math.floor(Math.random() * (max - min + 1)) + min;

  document.getElementById("output").innerHTML = number;

  checkNumberForFunFact(number);
}

function checkNumberForFunFact(number) {
  var searchResult = facts.filter(x => x.number === number);

  if (searchResult.length > 0) {
    document.getElementById("facts").innerHTML = `(Fun Fact: ${searchResult[0].fact})`;
  } else {
    document.getElementById("facts").innerHTML = '';
  }
}

const facts = [
  {number: 4, fact: "The only number spelled with the same number of letters as itself"},
  {number: 7, fact: "The opposite sides of a six sided die always adds up to 7"},
  {number: 9, fact: "It's said that cats have 9 lives"},
  {number: 13, fact: "13 is considered to be unlucky"},
  {number: 18, fact: "Koalas sleep around 18 hours a day"},
  {number: 21, fact: "Blackjack. House wins"},
  {number: 23, fact: "In a room of 23 people, there's a 50 percent chance of two people having the same birthday"},
  {number: 42, fact: "The answer to the \"Ultimate Question of Life, the Universe, and Everything\""},
  {number: 336, fact: "The average golf ball has 336 dimples"},
  {number: 1665, fact: "The Eiffel Tower has 1665 steps"},
  {number: 1913, fact: "The Olympic flag was designed in 1913"},
  {number: 1995, fact: "The year I was born"},
  {number: 3475, fact: "The diameter of the moon - rounded up to an integer, the exact number is 3,474.8 km"},
  {number: 86400, fact: "The number of seconds in a day"},
  {number: 300000, fact: "The chances of being struck by lightning are 300,000 to one"},
  {number: 31536000, fact: "There are 31,536,000 seconds in a year"}
];
