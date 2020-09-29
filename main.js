const user1 = 'colin.jaffe@codeimmersives.com';
const password1 = 'Hotforhimself';
const user2 = 'mesuara@codeimmersives.com';
const password2 = 'Console.logger';
const user3 = 'anthony@codeimmersives.com';
const password3 = 'like a BOSS';


function isValidEmail(email) {
  return email.endsWith('@codeimmersives.com') && email.length >= 20;
}

function isValidPassword(password) {
  return password.length >= 8
    && password.toUpperCase() !== password
    && password.toLowerCase() !== password;
}

function isRegisteredUser(email) {
  return email === user1 || email === user2 || email === user3;
}

function passwordMatches(email, password) {
  return email === user1 && password === password1
    || email === user2 && password === password2
    || email === user3 && password === password3;
}


// Don' t touch the code below! Some utility functions that you can use if you want.

function getEmail() {
    return process.argv[2];
}

function getPassword() {
    return process.argv[3];
}


if (typeof isValidEmail === 'undefined') {
  isValidEmail = undefined;
}

if (typeof isValidPassword === 'undefined') {
  isValidPassword = undefined;
}

if (typeof isRegisteredUser === 'undefined') {
  isRegisteredUser = undefined;
}

if (typeof passwordMatches === 'undefined') {
  passwordMatches = undefined;
}

if (typeof user1 === 'undefined') {
  user1 = undefined;
}

if (typeof user2 === 'undefined') {
  user2 = undefined;
}

if (typeof user3 === 'undefined') {
  user3 = undefined;
}

if (typeof password1 === 'undefined') {
  password1 = undefined;
}

if (typeof password2 === 'undefined') {
  password2 = undefined;
}

if (typeof password3 === 'undefined') {
  password3 = undefined;
}



module.exports = {
  isValidEmail,
  isValidPassword,
  isRegisteredUser,
  passwordMatches,
  user1,
  user2,
  user3,
  password1,
  password2,
  password3,
}
