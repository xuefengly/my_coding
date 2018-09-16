var register = document.getElementById("register");
var login = document.getElementById("login");
var btn_register = document.getElementById("btn-register");
var btn_login = document.getElementById("btn-login");

btn_login.onclick = function(){
  register.style.display = "none";
  login.style.display = "block";
};
btn_register.onclick = function(){
  login.style.display = "none";
  register.style.display = "block";
};
