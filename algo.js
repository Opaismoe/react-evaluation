// Fake Student array
const Studentarr = [1,1,2,2,3,3,1,1,2,2,2,3]
console.log(Studentarr + ` <-- Fake student array\n`)

// Array for each color
const red = []
const yellow = []
const green = []

// Sort student array by color
sortByColor = (value) => {
  if (value >= 3) {
    return green.push(value)
  }
  if (value === 2) {
    return yellow.push(value)
  }
  if (value < 2) {
    return red.push(value)
  }
}

Studentarr.filter(sortByColor)



// Pick student based on "random" condition
let pickStudent = 0

// Create random number with max 100
getRandomNum = (max) => {
  return Math.floor(Math.random() * Math.floor(max));
}

randomNum = getRandomNum(100)

// Pick random student based on condition
ChoosenStudent = (randomNum) => {
  if (randomNum >= 47 ) {
    console.log("red")
    return pickStudent = red[Math.floor(Math.random() * red.length)];
  }
  else if (randomNum > 21 && randomNum < 47) {
    console.log("yellow")
    return pickStudent = yellow[Math.floor(Math.random() * yellow.length)];
  }
  else console.log("green")
  return pickStudent = green[Math.floor(Math.random() * green.length)];
}

ChoosenStudent(randomNum)


// Check if everything works
console.log("\n47 > is red           [1] \n46 < 32 > is yellow   [2] \n21 < is green         [3] \n")
console.log(pickStudent + `  <--- Picked Student`)



// Calculates Total percentage of green/yellow/red's in the class
console.log("\nCalculates Total percentage of green/yellow/red's in the class")

let Result = 0
const TotResults = []


TotPercent = (arr) => {
  Result = arr.length / Studentarr.length * 100
  return TotResults.push(Math.round(Result))
}

// Function call
TotPercent(red)
TotPercent(green)
TotPercent(yellow)
console.log(TotResults[0] + `% is red`)
console.log(TotResults[1] + `% is Green`)
console.log(TotResults[2] + `% is yellow`)

// Get the last achieved color from student colors array
let mainColor = Studentarr[Studentarr.length -1]

console.log(mainColor + `  <--- Last achieved color`)
