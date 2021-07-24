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

  let randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;

  document.getElementById("output").innerHTML = randomNumber;

  checkNumberForFunFact(randomNumber);
}

function checkNumberForFunFact(number) {
  // const factsArray = JSON.parse(facts);
  let fact = '';

  number = parseInt(number);

  if (number === 9) {
    fact = 'Cats have 9 lives';
  } else if (number === 42) {
    fact = 'the Ultimate Question of Life, the Universe, and Everything';
  }

  if (fact !== '') {
    document.getElementById("facts").innerHTML = `(Fun Fact: ${fact})`;
  } else {
    document.getElementById("facts").innerHTML = '';
  }
}
