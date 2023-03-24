const passwordBtn = document.getElementById("password-btn");
passwordBtn.addEventListener("click", () => {
  checkPassword();
});

function checkPassword() {
  const password = document.getElementById("password").value;
  const correctPassword = "bethishot"; // Replace this with your desired password

  if (password === correctPassword) {
    sessionStorage.setItem("authenticated", "true");
    location.href = "index.html"; // The main page of your website
  } else {
    alert("Incorrect password. Please try again.");
  }
}
