var generateButton = document.getElementById("generate-button");
var passwordField = document.getElementById("password");
var lengthField = document.getElementById("length");

generateButton.addEventListener("click", function() {
  var length = lengthField.value;
  var charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+";
  var password = "";
  for (var i = 0, n = charset.length; i < length; ++i) {
    password += charset.charAt(Math.floor(Math.random() * n));
  }
  passwordField.value = password;
});
