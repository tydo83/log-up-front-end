const userEmail1 = 'colin.jaffe@codeimmersives.com';
const userPassword1 = 'Hotforhimself';
const userEmail2 = 'mesuara@codeimmersives.com';
const userPassword2 = 'Console.logger';
const userEmail3 = 'anthony@codeimmersives.com';
const userPassword3 = 'like a BOSS';

// We'll be running our code as userEmails by typing in
// `node [path to this file]` on the command line,
// followed by our userEmail address and our userPassword.
// (Or the userEmail and pw we want to test!)
// We want to perform checks on that userEmail and
// userPassword to arrive at one of the following messages
// for the userEmail:
//
// 1. If the userEmail belongs to one of our registered
// userEmails AND the userPassword matches that userEmail, tell them
// that they are logged in.
//
// 2. If the userEmail belongs to one of our registered
// userEmails but the userPassword does not match that userEmail,
// tell them their userPassword is incorrect.
//
// 3. If the userEmail does not belong to one of our
// registered userEmails, and the userEmail and userPassword are
// both valid, tell them they're signed up.
//
// 4. If the userEmail does not belong to one of our
// registered userEmails, and the userEmail is not valid,
// tell them their userEmail is not valid. Preferably
// also tell them what makes a valid userEmail.
//
// 5. If the userEmail does not belong to one of our
// registered userEmails, and the userPassword is not valid,
// tell them their userPassword is not valid. Preferably
// also tell them what makes a valid userPassword.
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

const userEmail = process.argv[2];
const userPassword = process.argv[3];

if(isRegistereduserEmail(userEmail)) {
  if(userPasswordMatches(userEmail, userPassword)) {
    console.log("You are logged in");
  }
  else {
    console.log("Your userPassword is incorrect");
  }
}
else { 
  if(isValiduserEmail(userEmail) && isValiduserPassword(userPassword)) {
    console.log("Yoy are signed up");
  }
  else if(!isValiduserEmail(userEmail)) {
    console.log("Your userEmail is not valid.");
    console.log("It has to be end with codeimmersives.com");
  }
  else if(!isValiduserPassword(userPassword)) {
    console.log("Your userPassword is not valid."); 
    console.log("Your userPassword has to have at least 8 characters and one upper and lower case");
  }
}  

// Solution to the back-end portion of this app.
// Don't need to touch this, but you can check it out!

function isValiduserEmail(userEmail) {
  return userEmail.endsWith('@codeimmersives.com') && userEmail.length >= 20;
}

function isValiduserPassword(userPassword) {
  return userPassword.length >= 8
    && userPassword.toUpperCase() !== userPassword
    && userPassword.toLowerCase() !== userPassword;
}

function isRegistereduserEmail(userEmail) {
  return userEmail === userEmail1 || userEmail === userEmail2 || userEmail === userEmail3;
}

function userPasswordMatches(userEmail, userPassword) {
  return userEmail === userEmail1 && userPassword === userPassword1
    || userEmail === userEmail2 && userPassword === userPassword2
    || userEmail === userEmail3 && userPassword === userPassword3;
}

// Don't touch the code below!
// These are two utility functions that you can use if
// you don't want to use `process.argv` directly.

function getuserEmail() {
    return process.argv[2];
}

function getuserPassword() {
    return process.argv[3];
}


// Scaffolding code to make sure testing works. No need to touch this either!

if (typeof isValiduserEmail === 'undefined') {
  isValiduserEmail = undefined;
}

if (typeof isValiduserPassword === 'undefined') {
  isValiduserPassword = undefined;
}

if (typeof isRegistereduserEmail === 'undefined') {
  isRegistereduserEmail = undefined;
}

if (typeof userPasswordMatches === 'undefined') {
  userPasswordMatches = undefined;
}

if (typeof userEmail1 === 'undefined') {
  userEmail1 = undefined;
}

if (typeof userEmail2 === 'undefined') {
  userEmail2 = undefined;
}

if (typeof userEmail3 === 'undefined') {
  userEmail3 = undefined;
}

if (typeof userPassword1 === 'undefined') {
  userPassword1 = undefined;
}

if (typeof userPassword2 === 'undefined') {
  userPassword2 = undefined;
}

if (typeof userPassword3 === 'undefined') {
  userPassword3 = undefined;
}



module.exports = {
  isValiduserEmail,
  isValiduserPassword,
  isRegistereduserEmail,
  userPasswordMatches,
  userEmail1,
  userEmail2,
  userEmail3,
  userPassword1,
  userPassword2,
  userPassword3,
}
