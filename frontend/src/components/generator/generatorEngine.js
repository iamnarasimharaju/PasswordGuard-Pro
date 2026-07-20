// ==========================================================
// PasswordGuard Pro
// Enterprise Password Generator Engine
// Uses Web Crypto API
// ==========================================================

const UPPERCASE = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const LOWERCASE = "abcdefghijklmnopqrstuvwxyz";
const NUMBERS = "0123456789";
const SYMBOLS = "!@#$%^&*()_-+=<>?/{}[]";

const SIMILAR = "il1Lo0O";
const AMBIGUOUS = "{}[]()/\\'\"`~,;:.<>";

// ----------------------------------------------------------

function removeCharacters(source, chars) {
  return source
    .split("")
    .filter((c) => !chars.includes(c))
    .join("");
}

// ----------------------------------------------------------

function secureRandom(max) {

  const array = new Uint32Array(1);

  crypto.getRandomValues(array);

  return array[0] % max;

}

// ----------------------------------------------------------

function randomCharacter(charset) {

  return charset[
    secureRandom(charset.length)
  ];

}

// ----------------------------------------------------------

function shuffle(array) {

  for (let i = array.length - 1; i > 0; i--) {

    const j = secureRandom(i + 1);

    [array[i], array[j]] =
      [array[j], array[i]];

  }

  return array;

}

// ----------------------------------------------------------

export function generatePassword(options) {

  const {

    length,

    uppercase,

    lowercase,

    numbers,

    symbols,

    excludeSimilar,

    excludeAmbiguous,

  } = options;

  let upper = UPPERCASE;
  let lower = LOWERCASE;
  let nums = NUMBERS;
  let syms = SYMBOLS;

  if (excludeSimilar) {

    upper = removeCharacters(upper, SIMILAR);

    lower = removeCharacters(lower, SIMILAR);

    nums = removeCharacters(nums, SIMILAR);

  }

  if (excludeAmbiguous) {

    syms = removeCharacters(
      syms,
      AMBIGUOUS
    );

  }

  let charset = "";

  const password = [];

  if (uppercase) {

    charset += upper;

    password.push(
      randomCharacter(upper)
    );

  }

  if (lowercase) {

    charset += lower;

    password.push(
      randomCharacter(lower)
    );

  }

  if (numbers) {

    charset += nums;

    password.push(
      randomCharacter(nums)
    );

  }

  if (symbols) {

    charset += syms;

    password.push(
      randomCharacter(syms)
    );

  }

  if (!charset.length)
    return "";

  while (password.length < length) {

    password.push(
      randomCharacter(charset)
    );

  }

  return shuffle(password).join("");

}