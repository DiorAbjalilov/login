let btn = document.querySelector("button");

btn.addEventListener("click", (e) => {
  let user_name = document.querySelector("#name").value;
  let email = document.querySelector("#email").value;
  let pass = document.querySelector("#password").value;
  let form_date = JSON.parse(localStorage.getItem("formDate")) || [];
  form_date.push({
    user: user_name,
    email: email,
    password: pass,
  });
  let aa = JSON.parse(localStorage.getItem("formDate"));
  (aa || []).map((item) => {
    console.log(item);
  });
  localStorage.setItem("formDate", JSON.stringify(form_date));
  dispDate();
  console.log(form_date);
  e.preventDefault();
});
function dispDate() {
  let adddd = JSON.parse(localStorage.getItem("formDate"));
  if (localStorage.getItem("formDate")) {
    let table = document.querySelector("table");
    table.innerHTML = "";
    adddd.forEach((data) => {
      table.innerHTML += `
        <tr>
            <td>${data.user}</td>
            <td>${data.email}</td>
            <td>${data.password}</td>
        </tr>
        `;
    });
  }
}
dispDate();
