function generateRandomNumber() {
  // get max and min values from input boxes
  let min = document.getElementById("min").value;
  let max = document.getElementById("max").value;

  // parse min and max values into integers
  min = parseInt(min);
  max = parseInt(max);

  // generate random number between min and max int values
  let number = Math.floor(Math.random() * (max - min + 1)) + min;

  // display generated number on page
  document.getElementById("output").innerHTML = number;

  // check if fact for number exists
  checkForFunFact(number);
}

function checkForFunFact(number) {
  // read JSON file and parse into array
  const factsArray = JSON.parse(facts);

  // filter facts and match generated number
  var searchResult = factsArray.filter(x => parseInt(x.number) === number);

  // if searchResult found then display on page
  if (searchResult.length) {
    document.getElementById("facts").innerHTML = `(Fun Fact: ${searchResult[0].fact})`;
  } else {
    document.getElementById("facts").innerHTML = '';
  }
}
