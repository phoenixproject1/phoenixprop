function updateHeader() {
  const loggedIn = localStorage.getItem("loggedIn") === "true";
  const chartLink = document.getElementById("chartLink");
  const logoutBtn = document.getElementById("logoutBtn");
  const authLink = document.getElementById("authLink");

  if (loggedIn) {
    chartLink.style.display = "inline-block";
    logoutBtn.style.display = "inline-block";
    authLink.style.display = "none";
  } else {
    chartLink.style.display = "none";
    logoutBtn.style.display = "none";
    authLink.style.display = "inline-block";
  }
}

// اضافه کردن رفتار خروج
document.addEventListener("DOMContentLoaded", () => {
  const logoutBtn = document.getElementById("logoutBtn");
  if (logoutBtn) {
    logoutBtn.addEventListener("click", function(e){
      e.preventDefault();
      localStorage.removeItem("loggedIn");
      localStorage.removeItem("currentUser");
      updateHeader();
      window.location.href = "index.html"; // برگشت به خانه
    });
  }
  updateHeader();
});
