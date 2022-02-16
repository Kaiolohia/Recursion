/** product: calculate the product of an array of numbers. */

function product([curItem, ...rest]) {
  if (!curItem) {
    return 1;
  }
  return curItem * product(rest);
}

/** longest: return the length of the longest word in an array of words. */

function longest([curItem, ...rest]) {
  if (!curItem) return 0;
  return Math.max(curItem.length, longest(rest));
}

/** everyOther: return a string with every other letter. */

function everyOther(str) {
  if (!str) return "";
  return str[0] + everyOther(str.slice(2));
}

/** isPalindrome: checks whether a string is a palindrome or not. */

function isPalindrome(str) {
  if (str.length <= 1) return true;
  if (str[0] !== str[str.length - 1]) return false;
  return isPalindrome(str.slice(1, -1));
}

/** findIndex: return the index of val in arr (or -1 if val is not present). */

function findIndex(arr, val, idx = 0) {
  if (idx >= arr.length) return -1;
  if (arr[idx] === val) return idx;
  return findIndex(arr, val, idx + 1);
}

/** revString: return a copy of a string, but in reverse. */

function revString(str) {
  if (str.length <= 1) return str;
  return (
    str.charAt(str.length - 1) + revString(str.substring(0, str.length - 1))
  );
}

/** gatherStrings: given an object, return an array of all of the string values. */

function gatherStrings(obj) {
  let strArr = [];
  for (let key in obj) {
    if (typeof obj[key] === "string") strArr.push(obj[key]);
    if (typeof obj[key] === "object") strArr.push(...gatherStrings(obj[key]));
  }
  return strArr;
}

/** binarySearch: given a sorted array of numbers, and a value,
 * return the index of that value (or -1 if val is not present). */

function binarySearch(arr, val, left = 0, right = arr.length) {
  if (left > right) return -1
  let center = Math.floor((left + right) / 2)
  if (arr[center] === val) return center
  if (arr[center] > val) return binarySearch(arr, val, left, center - 1)
  return binarySearch(arr, val, center + 1, right)
}

module.exports = {
  product,
  longest,
  everyOther,
  isPalindrome,
  findIndex,
  revString,
  gatherStrings,
  binarySearch,
};
