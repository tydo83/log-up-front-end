const email1 = 'colin.jaffe@codeimmersives.com';
const password1 = 'Hotforhimself';
const email2 = 'mesuara@codeimmersives.com';
const password2 = 'Console.logger';
const email3 = 'anthony@codeimmersives.com';
const password3 = 'like a BOSS';

// We'll be running our code as emails by typing in
// `node [path to this file]` on the command line,
// followed by our email address and our password.
// (Or the email and pw we want to test!)
// We want to perform checks on that email and
// password to arrive at one of the following messages
// for the email:
//
// 1. If the email belongs to one of our registered
// emails AND the password matches that email, tell them
// that they are logged in.
//
// 2. If the email belongs to one of our registered
// emails but the password does not match that email,
// tell them their password is incorrect.
//
// 3. If the email does not belong to one of our
// registered emails, and the email and password are
// both valid, tell them they're signed up.
//
// 4. If the email does not belong to one of our
// registered emails, and the email is not valid,
// tell them their email is not valid. Preferably
// also tell them what makes a valid email.
//
// 5. If the email does not belong to one of our
// registered emails, and the password is not valid,
// tell them their password is not valid. Preferably
// also tell them what makes a valid password.
//
//
// As long as given those inputs you get the right
// outputs, how your branching `if` logic works is
// up to you!
//
// Remember to test (using command-line calls to your
// app) each of those possibilities!
//
// You can and should use all four back-end functions
// from the first part of this assignment. They're
// farther down this page.
//
// You can also use the two "utility functions" below
// them if you'd like!
//

// Being sure to do all that's outlined above, write
// your code below!

const email = process.argv[2];
const password = process.argv[3];

if(isRegisteredemail(email) && passwordMatches(email, password)) {
  console.log("You are logged in");
}

if(isRegisteredemail(email) && !passwordMatches(email, password)) {
  console.log("Your password is incorrect");
}

if(!isRegisteredemail(email) && isValidEmail(email) && isValidPassword(password)) {
  console.log("Yoy are signed up");
}

if(!isRegisteredemail(email) && !isValidEmail(email)) {
  console.log("Your email is not valid.");
  console.log("It has be end with codeimmersives.com");
}

if(!isRegisteredemail(email) && !isValidPassword(password)) {
  console.log("Your password is not valid."); 
  console.log("Your password has to have at least 8 characters and one upper and lower case");
}

// Solution to the back-end portion of this app.
// Don't need to touch this, but you can check it out!

function isValidEmail(email) {
  return email.endsWith('@codeimmersives.com') && email.length >= 20;
}

function isValidPassword(password) {
  return password.length >= 8
    && password.toUpperCase() !== password
    && password.toLowerCase() !== password;
}

function isRegisteredemail(email) {
  return email === email1 || email === email2 || email === email3;
}

function passwordMatches(email, password) {
  return email === email1 && password === password1
    || email === email2 && password === password2
    || email === email3 && password === password3;
}

// Don't touch the code below!
// These are two utility functions that you can use if
// you don't want to use `process.argv` directly.

function getEmail() {
    return process.argv[2];
}

function getPassword() {
    return process.argv[3];
}


// Scaffolding code to make sure testing works. No need to touch this either!

if (typeof isValidEmail === 'undefined') {
  isValidEmail = undefined;
}

if (typeof isValidPassword === 'undefined') {
  isValidPassword = undefined;
}

if (typeof isRegisteredemail === 'undefined') {
  isRegisteredemail = undefined;
}

if (typeof passwordMatches === 'undefined') {
  passwordMatches = undefined;
}

if (typeof email1 === 'undefined') {
  email1 = undefined;
}

if (typeof email2 === 'undefined') {
  email2 = undefined;
}

if (typeof email3 === 'undefined') {
  email3 = undefined;
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
  isRegisteredemail,
  passwordMatches,
  email1,
  email2,
  email3,
  password1,
  password2,
  password3,
}
