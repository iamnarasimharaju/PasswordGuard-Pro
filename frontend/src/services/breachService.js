const breachedPasswords = [

  "123456",
  "123456789",
  "password",
  "Password123",
  "admin",
  "admin123",
  "welcome",
  "welcome123",
  "qwerty",
  "abc123",
  "letmein",
  "football",
  "monkey",
  "dragon",
  "iloveyou",

];

export function checkPassword(password) {

  if (!password.trim()) {

    return {

      found: false,

      message: "Enter a password.",

      risk: "None",

    };

  }

  const found = breachedPasswords.some(

    item => item.toLowerCase() === password.toLowerCase()

  );

  if (found) {

    return {

      found: true,

      risk: "Critical",

      message:
        "This password exists in the local breach database.",

    };

  }

  return {

    found: false,

    risk: "Safe",

    message:
      "No match found in the local breach database.",

  };

}