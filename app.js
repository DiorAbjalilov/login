let btn = document.querySelector("button");
let arr = [];

btn.addEventListener("click", (e) => {
  e.preventDefault();
  let user_name = document.querySelector("#name").value;
  let password = document.querySelector("#password").value;
  let obj = {
    user: user_name,
    pass: password,
  };
  console.log(obj);
});
