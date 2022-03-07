// ASSESSMENT 3: Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest


// --------------------1) Create a function that takes in a number (greater than 2) and returns an array that length containing the numbers of the Fibonacci sequence.

// a) Create a test with expect statements for each of the variables provided.

// Example input: 6
// Expected output: [1, 1, 2, 3, 5, 8]

// Example input: 10
// Expected output: [1, 1, 2, 3, 5, 8, 13, 21, 34, 55]

// a describe method that lists the name of the function OR naming of the particular test.
describe("fibonacciSequence", () => {

  // a test/it method, nested within the describe block, that in plain words, describes that the function does.
  it("returns an array that length containing the numbers of the Fibonacci sequence.", () => {

    //an expect method, nested within the test block, calling on the hello() function, followed by the .toEqual() matcher that checks the expected output of the function return.
    expect(fibonacciSequence(6)).toEqual([1, 1, 2, 3, 5, 8])
    expect(fibonacciSequence(10)).toEqual([1, 1, 2, 3, 5, 8, 13, 21, 34, 55])
  })
})

// Running this test has failed which is what we are looking for.
// ReferenceError: fibonacciSequence is not defined


// b) Create the function that makes the test pass.

// Create a function that will take in one parameter, arraylength, which will be a number.
// [num1, num2, num3 = num1 + num2, num4 = num2 + num3] --> Fibonacci Sequence
// Declare a new variable called newArray which will be assigned to an array with the values of [1,1]
// Create a for loop with a start condition of i = 0, an end condition of i < arraylength-2, and an increment for each loop. The reasoning behind the ending condition of i < arraylength - 2 is because the variable newArray that was declared is coded to have 2 values which means that the for loop would have to iterate two less times, hence the -2.
// Inside the for loop, declare a variable called sum which will retain the value of newArray[i] + newArray[i+1]. This line of code is essentially the mechanism behind the Fibonacci Sequence.
// The goal is to push the sum into the array which will be accomplished with the .push() method. Finally, return newArray.

const fibonacciSequence = (arraylength) => {
  let newArray = [1,1]
  for(let i = 0; i < arraylength-2; i++){
    let sum = newArray[i] + newArray[i+1]
    newArray.push(sum)
  }
  return newArray
}

// The test passed (green) :)


// --------------------2) Create a function that takes in an array and returns a new array of only odd numbers sorted from least to greatest.

// a) Create a test with expect statements for each of the variables provided.

// a describe method that lists the name of the function OR naming of the particular test.
describe("oddNumbersInOrder", () => {
  const fullArr1 = [4, 9, 0, "7", 8, true, "hey", 7, 199, -9, false, "hola"]
  // Expected output: [-9, 7, 9, 199]

  const fullArr2 = ["hello", 7, 23, -823, false, 78, null, "67", 6, "number"]
  // Expected output: [-823, 7, 23]

  // a test/it method, nested within the describe block, that in plain words, describes that the function does.
  it("returns a new array of only odd numbers sorted from least to greatest.", () => {

    //an expect method, nested within the test block, calling on the hello() function, followed by the .toEqual() matcher that checks the expected output of the function return.
    expect(oddNumbersInOrder(fullArr1)).toEqual([-9, 7, 9, 199])
    expect(oddNumbersInOrder(fullArr2)).toEqual([-823, 7, 23])
  })
})

// Running this test has failed which is what we are looking for.
// ReferenceError: oddNumbersInOrder is not defined

// b) Create the function that makes the test pass.

// Create a function called oddNumbersInOrder that will take in one parameter, array.
// Declare a variable within the function called oddNums and utilize the .filter() method to filter out data types that are only odd numbers.
// This will be accomplished by implementing the typeof operator as well as the modulo operator. The typeof operator will filter out the data types that are numbers and the modulo operator will filter out the numbers that are odd.
// Once the odd numbers are filtered out of the original array, the goal now is to sort them in numerical order.
// Declare a variable called oddArray outside of the filter code block and utilize the .map() method since we will want an array of the same length.
// Final step is to return oddArray and attaching the .sort() method to sort the numbers from least to greatest.

const oddNumbersInOrder = (array) => {
  let oddNums = array.filter(value => {
    return typeof value === "number" && value % 2 !== 0
  })
  let oddArray = oddNums.map(value => value)
  return oddArray.sort((a,b) => a-b)
}

// The test passed (green) :)

// --------------------3) Create a function that takes in an array and returns an array of the accumulating sum. An empty array should return an empty array.

// a) Create a test with expect statements for each of the variables provided.

// a describe method that lists the name of the function OR naming of the particular test.
describe("sumArray", () => {
  const numbersToAdd1 = [2, 4, 45, 9]
  // Excpected output: [2, 6, 51, 60]

  const numbersToAdd2 = [0, 7, -8, 12]
  // Expected output: [0, 7, -1, 11]

  const numbersToAdd3 = []
  // Expected output: []

  // a test/it method, nested within the describe block, that in plain words, describes that the function does.
  it("returns an array of the accumulating sum. An empty array should return an empty array.", () => {

    //an expect method, nested within the test block, calling on the hello() function, followed by the .toEqual() matcher that checks the expected output of the function return.
    expect(sumArray(numbersToAdd1)).toEqual([2, 6, 51, 60])
    expect(sumArray(numbersToAdd2)).toEqual([0, 7, -1, 11])
    expect(sumArray(numbersToAdd3)).toEqual([])
  })
})

// Running this test has failed which is what we are looking for.
// ReferenceError: sumArray is not defined

// b) Create the function that makes the test pass.

// Create a function called sumArray which will take in one parameter, array.
// Declare a variable called newArray and set it to an empty array.
// Create a conditional statement with the condition being that if array.length < 1, then return the empty array.
// Within the else statement, we will use the .push() method to push the value of the parameter array at the 0th index. The reasoning behind this is because no matter what array is passed as the argument for this function, the final array will always have the same value at the 0th index. All of the values after the 0th index are the values that are changed.
// Create a for loop with starting condition i = 0, end condition of i < array.length - 1, and an increment for each loop. Ending condition is i < array.length-1 since we pushed one value into newArray before the for loop which means the for loop would have to iterate one less time.
// Within the for loop, newArray.push(newArray[i] + array[i+1]). We will be pushing the sum of the value at newArray[i] with the value of parameter array[i+1] since our goal is to find the accumulating sum. 
// Finally, return newArray.

const sumArray = (array) => {
  let newArray = []
  if(array.length < 1){
    return newArray
  } else{
    newArray.push(array[0])
    for(let i = 0; i<array.length-1; i++){
      newArray.push(newArray[i] + array[i+1])
    }
    return newArray
  }
}

// The test passed (green) :)
