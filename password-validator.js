const readlineSync = require('readline-sync');

function isValidPassword(password) {
  const hasUpperCase = /[A-Z]/.test(password);
  const hasNumber = /[0-9]/.test(password);
  const isLongEnough = password.length >= 8;

  return hasUpperCase && hasNumber && isLongEnough;
}

let password;

do {
  password = readlineSync.question('Enter a password: ');

  if (isValidPassword(password)) {
    console.log('Password accepted.');
  } else {
    console.log('Password must be at least 8 characters long, include a number, and an uppercase letter.\n');
  }

} while (!isValidPassword(password));

