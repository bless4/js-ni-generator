// nationalSecurityNumberGenerator.test.js
const generateNationalSecurityNumber = require('./nationalSecurityNumberGenerator');

describe('generateNationalSecurityNumber', () => {
  test('generates a valid number for male', () => {
    const dateOfBirth = '15071990';
    const isMale = true;
    const result = generateNationalSecurityNumber(dateOfBirth, isMale);

    // Check if the format is correct
    expect(result).toMatch(/^\d{8}-\d{4}$/);

    // Check if the last digit is odd for male
    const lastDigit = parseInt(result.slice(-1), 10);
    expect(lastDigit % 2).toBe(1);
  });

  test('generates a valid number for female', () => {
    const dateOfBirth = '15071990';
    const isMale = false;
    const result = generateNationalSecurityNumber(dateOfBirth, isMale);

    // Check if the format is correct
    expect(result).toMatch(/^\d{8}-\d{4}$/);

    // Check if the last digit is even for female
    const lastDigit = parseInt(result.slice(-1), 10);
    expect(lastDigit % 2).toBe(0);
  });
});
