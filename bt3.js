function isPalindrome(str) {

    const cleanedStr = str.replace(/\s/g, '').toLowerCase();

    return cleanedStr === cleanedStr.split('').reverse().join('');
}

const testString1 = "12121";
const testString2 = "sai";

console.log(isPalindrome(testString1));
console.log(isPalindrome(testString2)); 
