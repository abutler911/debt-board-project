const form = document.querySelector("form");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const password = document.querySelector("#password").value;

  if (password === "mypassword") {
    sessionStorage.setItem("password", password);
    window.location.href = "index.html";
  } else {
    alert("Incorrect password, please try again.");
  }
});
