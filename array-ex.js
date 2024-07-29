const correctPassword = "pass1234";

let attempt = 1;

while (attempt <= 3) {
  const userInput = prompt("Enter your password: ");

  if (userInput !== correctPassword && attempt === 3) {
    alert("You have reached the maximum number of attempts.");
  } else if (userInput === correctPassword) {
    alert("Access granted!");
    break;
  } else {
    attempt = attempt + 1;
  }
}



function findPrimiter() {
  const side1 = Number(prompt("Enter side 1: "));
  const side2 = Number(prompt("Enter side 2: "));
  const side3 = Number(prompt("Enter side 3: "));

  const sideOneIsValid = side1 > 0 && side2 + side3 > side1;
  const sideTwoIsValid = Number(side2) > 0 && side1 + side3 > side2;
  const sideThreeIsValid = Number(side3) > 0 && side1 + side2 > side3;

  const isTriangle = sideOneIsValid && sideTwoIsValid && sideThreeIsValid;

  if (isTriangle === true) {
    const primiter = Number(side1) + Number(side2) + Number(side3);
    alert("Primiter:" + primiter);
  } else {
    alert("Gurvaljin bish bnaa");
  }
}
