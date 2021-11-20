function sigin(e) {
  e.preventDefault();
  let user_name = document.querySelector("#name").value;
  let email = document.querySelector("#email").value;
  let password = document.querySelector("#password").value;
  let obj = {
    user: user_name,
    email: email,
    pass: password,
  };
  if (user_name && password) {
    let json = JSON.stringify(obj);
    localStorage.setItem("back", json);
    console.log("quwildi");
  } else {
    console.log("tuldir");
  }
}
function login(e) {
  e.preventDefault();
  let user_name = document.querySelector("#name").value;
  let password = document.querySelector("#password").value;
  let user = localStorage.getItem("back");
  let data = JSON.parse(user);
  if (user == null) {
    console.log("buw");
  } else if (user_name == data.user_name && password == data.password) {
    console.log("login buldi");
  }
}
