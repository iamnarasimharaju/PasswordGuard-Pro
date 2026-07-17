/**
 * PasswordGuard Pro
 * Enterprise Password Security Suite
 *
 * Security Constants
 */

export const PASSWORD_POLICY = {
  MIN_LENGTH: 12,
  MAX_LENGTH: 128,

  REQUIRE_UPPERCASE: true,
  REQUIRE_LOWERCASE: true,
  REQUIRE_NUMBER: true,
  REQUIRE_SYMBOL: true,
};

export const SCORE = {
  LENGTH: 30,
  UPPERCASE: 15,
  LOWERCASE: 15,
  NUMBER: 15,
  SYMBOL: 15,
  BONUS: 10,
};

export const STRENGTH_LEVEL = [
  "Very Weak",
  "Weak",
  "Fair",
  "Good",
  "Strong",
  "Very Strong",
];

export const COMMON_PASSWORDS = [
  "password",
  "password123",
  "admin",
  "administrator",
  "root",
  "qwerty",
  "qwerty123",
  "welcome",
  "welcome123",
  "abc123",
  "123456",
  "12345678",
  "123456789",
  "1234567890",
  "111111",
  "000000",
  "letmein",
  "iloveyou",
  "dragon",
  "monkey",
  "football",
  "baseball",
  "master",
  "login",
  "test",
  "guest",
  "default",
];

export const KEYBOARD_PATTERNS = [
  "qwerty",
  "asdf",
  "zxcv",
  "1234",
  "12345",
  "123456",
  "9876",
  "abcd",
];

export const SYMBOLS =
  "!@#$%^&*()_+-=[]{}|;:',.<>/?`~";