/*
 *--------- -----------
 Task 1 : Create a function that takes a string as input and returns the reversed version of the string without using the built-in reverse() method.
 ----------------------*/

// Solution-of-task-1
function reverseString(inputString) {
  let reversedString = "";
  for (let i = inputString.length - 1; i >= 0; i--) {
    reversedString += inputString.charAt(i);
  }
  return reversedString;
}

//   const inputString = "hello world";
//   const outputString = reverseString(inputString);
//   console.log(outputString);

/*
 *------------------------
 Task 2 : Create a function that takes an array of numbers as input and returns the sum of all positive numbers in the array.
 ------------------------- */

// Solution-of-task-2
function sumOfPositiveNumbers(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      sum += arr[i];
    }
  }
  return sum;
}

//   const inputArray = [2, -5, 10, -3, 7];
//   const result = sumOfPositiveNumbers(inputArray);
//   console.log(result);

/*
 *--------------------------
 Task 3: Write a JavaScript program to find the most frequent element in an array and return it.
 ---------------------------
 */
// Solution-of-task-3
function mostFrequentElement(arr) {
  let frequencyCounter = {};
  let maxFrequency = 0;
  let mostFrequentElement;

  for (let num of arr) {
    frequencyCounter[num] = (frequencyCounter[num] || 0) + 1;
    if (frequencyCounter[num] > maxFrequency) {
      maxFrequency = frequencyCounter[num];
      mostFrequentElement = num;
    }
  }

  return mostFrequentElement;
}

//   const inputArray = [3, 5, 2, 5, 3, 3, 1, 4, 5];
//   const output = mostFrequentElement(inputArray);
//   console.log(output);

/*
 * ----------------------------
Task 4: Create a function that takes a sorted array of numbers and a target value as input. The function should find two numbers in the array that add up to the target value. Return an array containing the indices of the two numbers.
--------------------------------
 */

// Solution-of-task-4
function findTwoNumbersWithSum(arr, target) {
  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    const sum = arr[left] + arr[right];
    if (sum === target) {
      return [left, right];
    } else if (sum < target) {
      left++;
    } else {
      right--;
    }
  }

  // If no such pair is found
  return [];
}

// For example
const inputArray = [1, 3, 6, 8, 11, 15];
const targetValue = 9;
//   const output = findTwoNumbersWithSum(inputArray, targetValue);
//   console.log(output); // Output will be [1, 2] (numbers at indices 1 and 2: 3 + 6 = 9)

/*
 *-------------------------
 Task 5: Implement a simple JavaScript calculator. The calculator should take two numbers and an operator (+, -, *, /) as input and return the result of the operation.
 ---------------------------
 */

 // Solution-of-task-5

function calculator(num1, operator, num2) {
  switch (operator) {
    case "+":
      return num1 + num2;
    case "-":
      return num1 - num2;
    case "*":
      return num1 * num2;
    case "/":
      return num1 / num2;
    case "%":
      return num1 % num2;
    default:
      return "Invalid operator";
  }
}

// Test examples
// console.log(calculator(5, "+", 3)); 
// console.log(calculator(10, "-", 4)); 
// console.log(calculator(3, "*", 5)); 
// console.log(calculator(20, "/", 4)); 
// console.log(calculator(6, "%", 2)); 


/*
*--------------------------
Task 6: Create a program that generates a random password of a specified length. The password should include a mix of uppercase letters, lowercase letters, numbers, and special characters.
---------------------------*/
// Solution-of-task-6

function generateRandomPassword(length) {
    const uppercaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const lowercaseChars = 'abcdefghijklmnopqrstuvwxyz';
    const numberChars = '0123456789';
    const specialChars = '!@#$%^&*()_-+=<>?/[]{}|';
  
    const allChars = uppercaseChars + lowercaseChars + numberChars + specialChars;
  
    let password = '';
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * allChars.length);
      password += allChars[randomIndex];
    }
  
    return password;
  }
  
  // Example: Generate a random password of length 8
//   const passwordLength = 8;
//   const randomPassword = generateRandomPassword(passwordLength);
//   console.log(randomPassword);


/*
*--------------------------
Task 7: Implement a function that converts a Roman numeral to an integer. The function should take a Roman numeral string (e.g., "IX" or "XXI") as input and return the corresponding integer value.
---------------------------
 */
  
// Solution-of-task-7
function romanToInt(romanNumeral) {
    const romanMap = {
      'I': 1,
      'V': 5,
      'X': 10,
      'L': 50,
      'C': 100,
      'D': 500,
      'M': 1000,
    };
  
    let result = 0;
    let prevValue = 0;
  
    for (let i = romanNumeral.length - 1; i >= 0; i--) {
      const currentChar = romanNumeral[i];
      const currentValue = romanMap[currentChar];
  
      if (currentValue >= prevValue) {
        result += currentValue;
      } else {
        result -= currentValue;
      }
  
      prevValue = currentValue;
    }
  
    return result;
  }
  
  // Test examples
//   console.log(romanToInt('IX'));
//   console.log(romanToInt('XXI'));
//   console.log(romanToInt('IV'));
//   console.log(romanToInt('XL'));
//   console.log(romanToInt('XCIX'));
//   console.log(romanToInt('MMMCMXCIX'));



/*
*-------------------------
Task 8: Implement a JavaScript function to find the second smallest element in an array of numbers. The function should return the second smallest number.
------------------------*/

// Solution-of-task-8
function findSecondSmallest(arr) {
    if (arr.length < 2) {
      return 'Array should contain at least two elements.';
    }
  
    let smallest = Infinity;
    let secondSmallest = Infinity;
  
    for (let num of arr) {
      if (num < smallest) {
        secondSmallest = smallest;
        smallest = num;
      } else if (num < secondSmallest && num !== smallest) {
        secondSmallest = num;
      }
    }
  
    return secondSmallest !== Infinity ? secondSmallest : 'There is no second smallest element.';
  }
  
  // Test examples
  console.log(findSecondSmallest([5, 2, 8, 1, 7]));
  console.log(findSecondSmallest([10, 3, 15, 8, 20, 12])); 
  console.log(findSecondSmallest([3, 3, 3, 3])); 



  