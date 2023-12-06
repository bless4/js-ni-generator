// nationalSecurityNumberGenerator.js

// Function to generate a National Security number based on date of birth and gender
function generateNationalSecurityNumber(dateOfBirth, isMale) {
    const [day, month, year] = dateOfBirth.split('-');
    const randomNumbers = generateRandomNumbers(isMale);
  
    // Construct and return the National Security number
    return `${day}${month}${year}-${randomNumbers}`;
  }
  
  // Function to generate random numbers based on gender
  function generateRandomNumbers(isMale) {
    // Determine the last digit based on gender
    const lastDigit = isMale ? getRandomOddDigit() : getRandomEvenDigit();
    // Generate other random digits
    const otherDigits = getRandomDigits(3);
  
    // Concatenate and return the random numbers
    return `${otherDigits}${lastDigit}`;
  }
  
  // Function to generate a random odd digit
  function getRandomOddDigit() {
    return getRandomDigit(1, 9, true);
  }
  
  // Function to generate a random even digit
  function getRandomEvenDigit() {
    return getRandomDigit(0, 8, true);
  }
  
  // Function to generate a random digit within a specified range
  function getRandomDigit(min, max, isOdd) {
    let digit;
    // Keep generating until an odd (or even) digit is obtained, if required
    do {
      digit = Math.floor(Math.random() * (max - min + 1)) + min;
    } while (isOdd && digit % 2 === 0);
    return digit;
  }
  
  // Function to generate a string of random digits of a given length
  function getRandomDigits(length) {
    let digits = '';
    for (let i = 0; i < length; i++) {
      digits += getRandomDigit(0, 9);
    }
    return digits;
  }
  
  // Export the main function for external use
  module.exports = generateNationalSecurityNumber;
  