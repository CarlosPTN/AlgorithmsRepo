// function that calculates the sum of all numbers

// function sumUp(n) {
//   let totalSum = 0;
//   for (let i = 0; i <= n; i++) {
//     totalSum = totalSum + n;
//     n--;
//   }
//   return totalSum;
// }

// console.log(sumUp(2));

// let t1 = performance.now();
// sumUp(10);
// let t2 = performance.now();
// console.log(`Time Elapsed: ${(t2 - t1) / 100} seconds`);
// this will tell me the time it takes to execute a code, basically
// it tells you the instant time at this line

// let instructor = {
//   firstName: "Kelly",
//   isInstructor: true,
//   favoriteNumbers: [1, 2, 3, 4],
// };

// console.log(Object.keys(instructor));
// console.log(Object.entries(instructor));
// console.log(instructor.hasOwnProperty("firstName")); //check hash tables

// function charCountMe(str) {
//   let result = {};
//   for (let i = 0; i < str.length; i++) {
//     if (result.hasOwnProperty(`${str[i]}`) === true) {
//       result[`${str[i]}`]++;
//     } else if (
//       (typeof str[i] === "number" || typeof str[i] === "string") &&
//       str[i] !== " "
//     ) {
//       result[`${str[i]}`] = 1;
//     }
//   }
//   console.log(result);
// }

// function charCountColt(str) {
//   // create an object to return at end
//   let result = {};
//   //   loop over string, for each character
//   for (let i = 0; i < str.length; i++) {
//     if (/[a-z0-9]/.test(str)) {
//       if (result[str] > 0) {
//         // if the str is a number/letter AND is a key in object, add one to count
//         result[str]++;
//       } // if the str is a number/letter AND not in object, add it to object and set value to 1
//       else {
//         result[str] = 1;
//       }
//     }
//   }
//   //   return the object
//   return result;
// }

// function charCountColt(str) {
//   // create an object to return at end
//   let result = {};
//   //   loop over string, for each character
//   for (let char of str) {
//     char = char.toLowerCase();
//     if (/[a-z0-9]/.test(str)) {
//       //waatch out because regular expressions might not be the fastest ones
//       // down here is a case of falsy trufy value where in case of result[char] not exisitng assigns 1 to it
//       result[char] = ++result[char] || 1;
//     }
//   }
//   //   return the object
//   return result;
// }

// charCountMe("ze ze manel dos santos");
// const coltCount = charCountColt("ze ze manel dos santos");
// charCountMe("12363214");
// console.log(coltCount);

// function same(arr1, arr2) {
//   // check if the arrays have the same size
//   if (arr1.length !== arr2.length) return false;

//   for (let i = 0; i <= arr1.length; i++) {
//     let correctIndex = arr2.indexOf(arr1[i] ** 2);
//     if (correctIndex === -1) {
//       return false;
//     }
//     arr2.splice(correctIndex, 1);
//   }
//   return true;
// }

// function sameMySolution(arr1, arr2) {
//   if (arr1.length !== arr2.length) return false;

//   for (let i = 0; i < arr1.length; i++) {
//     for (let j = 0; j < arr2.length; j++) {
//       if (arr1[i] ** 2 == arr2[j]) {
//         console.log(arr2[j]);
//         arr2.splice(j, 1);
//       }
//     }
//   }
//   if (arr2.length === 0) return true;
// }
// function sameNOrderSolution(arr1, arr2) {
//   if (arr1.length !== arr2.length) return false;
//   let frequencyCounter1 = {};
//   let frequencyCounter2 = {};
//   for (let i = 0; i < arr1.length; i++) {
//     frequencyCounter1[`${arr1[i]}`] = frequencyCounter1[`${arr1[i]}`]++ || 1;
//   }
//   for (let i = 0; i < arr1.length; i++) {
//     frequencyCounter2[`${arr1[i]}`] = frequencyCounter2[`${arr1[i]}`]++ || 1;
//   }
//   for (let key in frequencyCounter1) {
//     if (!(key ** 2) in frequencyCounter2) return false;
//     if (frequencyCounter2[key ** 2] !== frequencyCounter1[key]) return false;
//   }
// }

// const sameWrongAproach = same([2, 3, 6, 7], [10, 5, 7, 8]);
// const sameMySolutionPrint = sameMySolution([2, 3, 1, 4], [4, 1, 9, 16]);
// console.log(sameWrongAproach);
// console.log(sameMySolutionPrint);

// function anagramMySolution(str1, str2) {
//   if (str1.length !== str2.length) return false;

//   let frequencyCounter1 = {};
//   let frequencyCounter2 = {};

//   for (let i = 0; i <= str1.length; i++) {
//     frequencyCounter1[`${str1[i]}`] = ++frequencyCounter1[`${str1[i]}`] || 1;
//   }
//   for (let i = 0; i <= str2.length; i++) {
//     frequencyCounter2[`${str2[i]}`] = ++frequencyCounter2[`${str2[i]}`] || 1;
//   }
//   for (let property in frequencyCounter1) {
//     if (frequencyCounter1[`${property}`] !== frequencyCounter2[`${property}`])
//       return false;
//   }
//   return true;
// }

// const isAnagram1 = anagramMySolution("qwerty", "qeywrt");
// const isAnagram2 = anagramMySolution("aaz", "zza");

// console.log(isAnagram1);
// console.log(isAnagram2);

// function sumZero(arr1) {
//   if (arr1.length <= 1) return undefined;
//   let pairArr = [];
//   for (let i = 0; i < arr1.length; i++) {
//     for (let j = i + 1; j < arr1.length; j++) {
//       if (arr1[i] + arr1[j] === 0) {
//         return [arr1[i], arr1[j]];
//       }
//     }
//   }
//   return undefined;
// }

// console.log(sumZero([-2, -1, 1, 2, 2, 3, 4, 5]));

// function countUniqueValues(arr) {
//   if (!arr) {
//     return arr.length;
//   }
//   let left = 0;
//   let right = arr.length - 1;
// //   this object is to be assigned to each character that is unique inside the while loop
//   let uniqueChars = {};
// //   this while loop makes it possible to reduce the complexity from f(n^2) to f(n)
// // where we itterate each position from left with ++ and from right with --, till the center
//   while (left <= right) {
//     if (!uniqueChars[`${arr[left]}`]) uniqueChars[`${arr[left]}`] = 1;
//     if (!uniqueChars[`${arr[right]}`]) uniqueChars[`${arr[right]}`] = 1;
//     left++;
//     right--;
//   }
//   return Object.keys(uniqueChars).length;
// }

// console.log(countUniqueValues([1, 1, 1, 2, 2]));
// console.log(countUniqueValues([2, 5, 7, 5, 99]));

// const maxSubarraySum = function (arr, n) {
//   if (n > arr.length) return null;
//   let maxSum = 0;
//   let tempSum = 0;
//   for (let i = 0; i <= arr.length - n; i++) {
//     for (let j = 0; j < n; j++) {
//       tempSum += arr[i + j];
//     }
//     if (tempSum > maxSum) maxSum = tempSum;
//     tempSum = 0;
//   }
//   return maxSum;
// };
// console.log(maxSubarraySum([], 4));
// console.log(maxSubarraySum([4, 2, 3], 2));
// console.log(maxSubarraySum([4, 2, 3, 1, 1], 1));
// console.log(maxSubarraySum([4, 2, 3, 1, 1, 5, 10], 3));

// ////// OR ///////
// // this is a sliding window where the trick here is instead of keeping summing
// // all the timme we just need to subtract the first value of the previous sum and
// // add the next value after the last one
// function maxSubarraySumColt(arr, num) {
//   let maxSum = 0;
//   let tempSum = 0;
//   if (arr.length < num) return null;
//   for (let i = 0; i < num; i++) {
//     maxSum += arr[i];
//   }
//   tempSum = maxSum;
//   for (let i = num; i < arr.length; i++) {
//     tempSum = tempSum - arr[i - num] + arr[i];
//     maxSum = Math.max(maxSum, tempSum);
//   }
//   return console.log(maxSum);
// }

// maxSubarraySumColt([2, 6, 9, 2, 1, 8, 5, 6, 3], 3);

// const linearSearch = function (arr, value) {
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] === value) return console.log(i);
//   }
//   return console.log(-1);
// };

// linearSearch([10, 15, 20, 25, 30], 15);
// linearSearch([9, 8, 7, 6, 5, 4, 3, 2, 1, 0], 4); // 5
// linearSearch([100], 100); // 0
// linearSearch([1, 2, 3, 4, 5], 6); // -1
// linearSearch([9, 8, 7, 6, 5, 4, 3, 2, 1, 0], 10); // -1
// linearSearch([100], 200); // -1

// const binarySearch = function (arr, value) {
//   // the trick here divide to conquer where we create a third pointer called middle
//   // and we move the left to the right and the right to left having into account if
//   // the value is bigger or smaller than the middle
//   let left = 0;
//   let right = arr.length - 1;
//   let middle;
//   if (value < arr[left] || value > arr[arr.length - 1]) return console.log(-1);

//   while (left <= right) {
//     middle = Math.round((left + right) / 2);
//     if (arr[middle] === value) {
//       return console.log(middle);
//     }
//     if (arr[middle] < value) left = middle + 1;
//     if (arr[middle] > value) right = middle - 1;
//   }
//   return console.log(-1);
// };

// binarySearch([1, 2, 3, 4, 5], 2); // 1
// binarySearch([1, 2, 3, 4, 5], 3); // 2
// binarySearch([1, 2, 3, 4, 5], 5); // 4
// binarySearch([1, 2, 3, 4, 5], 6); // -1
// binarySearch(
//   [
//     5, 6, 10, 13, 14, 18, 30, 34, 35, 37, 40, 44, 64, 79, 84, 86, 95, 96, 98,
//     99,
//   ],
//   10
// ); // 2
// binarySearch(
//   [
//     5, 6, 10, 13, 14, 18, 30, 34, 35, 37, 40, 44, 64, 79, 84, 86, 95, 96, 98,
//     99,
//   ],
//   95
// ); // 16
// binarySearch(
//   [
//     5, 6, 10, 13, 14, 18, 30, 34, 35, 37, 40, 44, 64, 79, 84, 86, 95, 96, 98,
//     99,
//   ],
//   100
// ); // -1

// const stringSearch = function (str1, str2) {
//   if (str2.length > str1.length) return null;
//   if (str1 === str2) return 1;
//   let count = 0;
//   for (let i = 0; i <= str1.length - str2.length; i++) {
//     if (str1[i] === str2[0]) {
//       for (let j = 1; j <= str2.length - 1; j++) {
//         if (str1[i + j] !== str2[j]) break;
//         if (str1[i + j] === str2[j] && j === str2.length - 1) count++;
//       }
//     }
//   }
//   return count;
// };

// console.log(stringSearch("lolhjsdfgjhlol", "lol"));
// console.log(stringSearch("ohdgfdlomomg", "omg"));
// console.log(stringSearch("lioilililil", "il"));

// function numberCompare(num1, num2) {
//   return num1 - num2;
// }
// console.log([6, 4, 15, 10].sort(numberCompare));

// function compareByLen(str1, str2) {
//   return str1.length - str2.length;
// }

// ["Steele", "Colt", "Data Structures", "Algorithms"].sort(compareByLen);

// const bubbleSort = function (arr) {
//   let noSwaps;
//   let temp;
//   for (let i = arr.length; i >= 0; i--) {
//     noSwaps = true;
//     for (let j = 0; j < i - 1; j++) {
//       if (arr[j] > arr[j + 1]) {
//         temp = arr[j];
//         arr[j] = arr[j + 1];
//         arr[j + 1] = temp;
//         console.log(arr);
//         noSwaps = false;
//       }
//     }
//     if (noSwaps) break;
//   }
//   return arr;
// };

// console.log(bubbleSort([2, 3, 6, 8, 5, 100, 66, 85, 66, 45, 45]));

// const selectionSort = function (arr) {
//   for (let i = 0; i < arr.length; i++) {
//     let temp;
//     let lowest = i;
//     // with the next loop for we keep the second iterator one index more
//     // than the i, so that we wont compare the previous index with itself
//     for (let j = i + 1; j < arr.length; j++) {
//       // console.log(i, j);
//       if (arr[j] < arr[lowest]) {
//         console.log(lowest, j);
//         console.log(arr[lowest], arr[j]);
//         temp = arr[j];
//         arr[j] = arr[lowest];
//         arr[lowest] = temp;
//       }
//     }
//   }

//   return arr;
// };

// const selectionSort = function (arr) {
//   for (let i = 0; i < arr.length; i++) {
//     let temp;
//     let lowest = i;
//     // with the next loop for we keep the second iterator one index more
//     // than the i, so that we wont compare the previous index with itself
//     for (let j = i + 1; j < arr.length; j++) {
//       // console.log(i, j);
//       if (arr[j] < arr[lowest]) {
//         lowest = j;
//       }
//     }
//     if (i == lowest) {
//       console.log(lowest, i);
//       console.log(arr[lowest], arr[i]);
//       temp = arr[i];
//       arr[i] = arr[lowest];
//       arr[lowest] = temp;
//     }
//   }

//   return arr;
// };

// console.log(selectionSort([0, 2, 34, 22, 10, 19, 17]));
// console.log(selectionSort([2, 3, 6, 8, 5, 100, 66, 0, 66, 45, 1]));
// console.log(selectionSort([2, 45, 1, 22]));

// const insertionSort = function (arr) {
//   let temp;
//   for (let i = 1; i < arr.length; i++) {
//     for (let j = i; j > 0 && arr[j - 1] > arr[j]; j--) {
//       // console.log(arr[j - 1], arr[j]);

//       temp = arr[j - 1];
//       arr[j - 1] = arr[j];
//       arr[j] = temp;
//       console.log(arr);
//     }
//   }

//   return arr;
// };
// console.log(insertionSort([2, 45, 1, 22]));
// console.log(insertionSort([2, 3, 6, 8, 5, 100, 66, 0, 66, 45, 1]));
// console.log(insertionSort([2, 1, 9, 76, 4]));
// console.log("########################################################");

// function insertionSortColt(arr) {
//   let j;
//   for (let i = 1; i < arr.length; i++) {
//     let currentVal = arr[i];
//     console.log(i, arr[j + 1], arr[j], currentVal);
//     for (j = i - 1; j >= 0 && arr[j] > currentVal; j--) {
//       arr[j + 1] = arr[j];
//       console.log(arr[j + 1], arr[j], currentVal);
//       console.log(arr);
//     }
//     arr[j + 1] = currentVal;
//     // console.log(arr);
//   }
//   return arr;
// }

// console.log(insertionSortColt([2, 1, 9, 76, 4]));
// // console.log(insertionSortColt([2, 3, 6, 8, 5, 100, 66, 0, 66, 45, 1]));

// const checkOddnumbers = function (number) {
//   if (!number) {
//     return;
//   }
//   return checkOddnumbers();
// };

// function countDown(num) {
//   if (num <= 0) {
//     console.log("All done!");
//     return;
//   }
//   console.log(num);
//   countDown(--num);
// }
// countDown(3);
// if(num===1) return 1;

// function sumRange(num) {
//   if (num === 1) return 1;
//   return num + sumRange(num - 1);
// }

// sumRange(3); // (3 +sumRage(2))
// //              (3 +   2 +sumRage(1))
// //              (3 +   2 +    1     )
// sumRange(3);
//  return 3 + sumRange(2)
//               return 2 + sumRange(1)
//                                return 1

// function factorialRec(num) {
//   if (num === 1) return 1;

//   return num * factorialRec(num - 1);
// }
// console.log(factorialRec(3));

// function collectOddValues(arr) {
//   let result = [];
//   function helper(helperInput) {
//     if (helperInput.length === 0) return;
//     if (helperInput[0] % 2 !== 0) result.push(helperInput[0]);
//     return helper(helperInput.slice(1));
//   }
//   helper(arr);
//   return result;
// }

// console.log(collectOddValues([2, 3, 6, 8, 5, 100, 66, 0, 66, 45, 1]));

function power(num, exp) {
  if (exp === 0) return 1;
  exp--;
  return num * power(num, exp);
}

console.log(power(2, 0)); // 1
console.log(power(2, 3emacs fooemacs foo)); // 4
console.log(power(2, 4)); // 16
