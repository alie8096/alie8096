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

setTimeout(() => {
  // توقف تمام setTimeout و setInterval‌ها
  let highestTimeoutId = setTimeout(() => {}, 0);
  for (let i = 0; i <= highestTimeoutId; i++) {
    clearTimeout(i);
    clearInterval(i);
  }

  // توقف درخواست‌های requestAnimationFrame
  let highestAnimationFrameId = requestAnimationFrame(() => {});
  for (let i = 0; i <= highestAnimationFrameId; i++) {
    cancelAnimationFrame(i);
  }

  // پاک کردن پردازش آتش‌بازی و جلوگیری از ایجاد ذرات جدید
  particles = [];
  probability = 0; // دیگر ذره‌ای ایجاد نشود

  // پاک کردن صفحه و نمایش آخرین وضعیت
  ctx.clearRect(0, 0, w, h);

  // نمایش پیام ثابت شدن
  let freezeMessage = document.createElement("div");
  freezeMessage.innerText = "🎉 جشن تمام شد! برای مشاهده دوباره صفحه را رفرش کنید.";
  freezeMessage.style.cssText = "position:fixed; bottom:10px; left:50%; transform:translateX(-50%); background:#000; color:#fff; padding:10px 20px; border-radius:10px; font-size:16px; z-index:1000;";
  document.body.appendChild(freezeMessage);

}, 20000); // توقف کامل بعد از ۲۰ ثانیه

