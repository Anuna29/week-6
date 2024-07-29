let studentAges = [10,20,30,40]
studentAges[0]
console.log(studentAges[0])
console.log(studentAges[studentAges.length-1])
studentAges[studentAges.length-1]=50
console.log(studentAges)

let tsuivan = new Array('🥩','🌾','🥔','🥕','🧅')
let i = 0;
while (i < tsuivan.length) {
console.log(`Element at index ${i} is: ${tsuivan[i]}`);
i++;
}

// let studentAges = [11,22,33,44,55,66,77,88,99];
// let i = 0;
// let niilber = 0;
// while (i<studentAges.length){
//   niilber+=studentAges[i];
//   i++;
// }
// let avarage = niilber/studentAges.length
// console.log(avarage);

let userBalance = [1000, 2000, 2500, 4000000, 13054, 323425]
let a = 0;
while (a < userBalance.length){
  userBalance[a] *= 1.5;
  a++;
}
console.log(userBalance)
