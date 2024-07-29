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

// 8 must know array

  // FILTER
const items = [
  {name: 'Bike',     price: 100},
  {name: 'TV',       price: 200},
  {name: 'Album',    price: 10},
  {name: 'Book',     price: 5},
  {name: 'Phone',    price: 500},
  {name: 'Computer', price: 1000},
  {name: 'Keyboard', price: 25},
]

const filteredItems = items.filter((item)=> {
  return item.price <= 100
})

console.log(filteredItems)


// MAP

const things = [
  {name: 'Bike',     price: 100},
  {name: 'TV',       price: 200},
  {name: 'Album',    price: 10},
  {name: 'Book',     price: 5},
  {name: 'Phone',    price: 500},
  {name: 'Computer', price: 1000},
  {name: 'Keyboard', price: 25},
]

const thingNames = things.map((thing) => {
  return thing.price
})
console.log(thingNames)

// FIND

const thing = [
  {name: 'Bike',     price: 100},
  {name: 'TV',       price: 200},
  {name: 'Album',    price: 10},
  {name: 'Book',     price: 5},
  {name: 'Phone',    price: 500},
  {name: 'Computer', price: 1000},
  {name: 'Keyboard', price: 25},
]

const foundThing = thing.find((thing) =>{
  return thing.name === "Book"
})

console.log(foundThing)


// ForEACH

const item = [
  {name: 'Bike',     price: 100},
  {name: 'TV',       price: 200},
  {name: 'Album',    price: 10},
  {name: 'Book',     price: 5},
  {name: 'Phone',    price: 500},
  {name: 'Computer', price: 1000},
  {name: 'Keyboard', price: 25},
]

item.forEach((item) => {
  console.log(item.price)
})

// SOME

const something = [
  {name: 'Bike',     price: 100},
  {name: 'TV',       price: 200},
  {name: 'Album',    price: 10},
  {name: 'Book',     price: 5},
  {name: 'Phone',    price: 500},
  {name: 'Computer', price: 1000},
  {name: 'Keyboard', price: 25},
]

const hasInExpensiveItems = something.some ((something) =>{
  return something.price <= 100
})
console.log(hasInExpensiveItems)


// EVERY

const anything = [
  {name: 'Bike',     price: 100},
  {name: 'TV',       price: 200},
  {name: 'Album',    price: 10},
  {name: 'Book',     price: 5},
  {name: 'Phone',    price: 500},
  {name: 'Computer', price: 1000},
  {name: 'Keyboard', price: 25},
]
const checkEverything = anything.every ((anything) =>{
  return anything.price <= 100
})
console.log(checkEverything)


// REDUCE

const mm = [
  {name: 'Bike',     price: 100},
  {name: 'TV',       price: 200},
  {name: 'Album',    price: 10},
  {name: 'Book',     price: 5},
  {name: 'Phone',    price: 500},
  {name: 'Computer', price: 1000},
  {name: 'Keyboard', price: 25},
]

const total = mm.reduce((currentTotal , mm) => {
  return mm.price + currentTotal
},0)

console.log(total)