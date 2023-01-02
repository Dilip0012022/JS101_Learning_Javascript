//Problem 4: Given stored username and password and input username and password, Print if the user can login or not.
let stored_username = "shyam";
let stored_password = "shyam234";
let username = "shyam";
let password = "shyam234";
if (stored_username == username) {
  if (stored_password == password) {
    console.log("login successful")
  } else {
    console.log("password is wrong")
  }
}
else {
  console.log("username is wrong")
}