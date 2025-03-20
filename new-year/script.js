document.addEventListener("DOMContentLoaded", function () {
  const yearElement = document.getElementById("year");
  const messageElement = document.getElementById("message");
  const fireworks = document.querySelector(".pyro");

  setTimeout(() => {
    // محو کردن ۱۴۰۳
    yearElement.classList.add("fade-out");

    setTimeout(() => {
      // تغییر به ۱۴۰۴
      yearElement.innerHTML = "<span>۱۴۰۴</span>";
      yearElement.classList.remove("fade-out");
      yearElement.classList.add("fade-in");

      setTimeout(() => {
        // نمایش پیام تبریک
        messageElement.classList.add("show-message");

        // نمایش آتش‌بازی
        // fireworks.style.display = "block";
      }, 1000);
    }, 1500);
  }, 2000);
});

