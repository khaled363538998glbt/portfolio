const canvas = document.getElementById("stars");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const stars = [];

for (let i = 0; i < 100; i++) {
  stars.push({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    radius: Math.random() * 1.5,
    velocity: Math.random() * 0.5 + 0.2
  });
}

function drawStars() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = "#00f2ff";
  stars.forEach(star => {
    ctx.beginPath();
    ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
    ctx.fill();
    star.y += star.velocity;
    if (star.y > canvas.height) {
      star.y = 0;
      star.x = Math.random() * canvas.width;
    }
  });
  requestAnimationFrame(drawStars);
}
drawStars();

window.addEventListener("resize", () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
});

// JavaScript to toggle the sidebar menu
document.getElementById('hamburger-menu').addEventListener('click', function() {
  const sidebar = document.getElementById('sidebar');
  sidebar.classList.toggle('open');
});

// إغلاق الـ sidebar عند السحب للأسفل
window.addEventListener('scroll', function () {
  const sidebar = document.getElementById('sidebar');
  sidebar.classList.remove('open');
});

// إغلاق الـ sidebar عند الضغط خارجها
document.addEventListener('click', function (event) {
  const sidebar = document.getElementById('sidebar');
  const menuButton = document.getElementById('hamburger-menu');

  // إذا لم يكن الضغط على الزر أو داخل الـ sidebar
  if (!sidebar.contains(event.target) && !menuButton.contains(event.target)) {
    sidebar.classList.remove('open');
  }
});



window.addEventListener('scroll', function() {
  const nav = document.querySelector('nav');
  if (window.scrollY > 50) {
    if (!nav.classList.contains('fixed-nav')) {
      nav.classList.add('fixed-nav');
    }
  } else {
    if (nav.classList.contains('fixed-nav')) {
      nav.classList.remove('fixed-nav');
    }
  }
});


// منع النقر بزر الماوس الأيمن
document.addEventListener('contextmenu', function(e) {
  e.preventDefault();
});

// منع اختصارات لوحة المفاتيح
document.addEventListener('keydown', function(e) {
  if (
    e.key === 'F12' ||
    (e.ctrlKey && e.shiftKey && ['I', 'J', 'C'].includes(e.key)) ||
    (e.ctrlKey && e.key === 'U')
  ) {
    e.preventDefault();
    window.location.href = "https://www.google.com"; // إعادة التوجيه عند محاولة فتح DevTools
  }
});




// // خدعة console لكشف فتح DevTools
// (function () {
//   let devtools = /./;
//   devtools.toString = function () {
//     this.open = true;
//     return 'devtools';
//   };
//   setInterval(function () {
//     console.log(devtools); // محاولة كشف فتح أدوات المطور
//   }, 1000);
// })();

// // كشف DevTools عن طريق قياس أبعاد النافذة كل ثانية
// (function () {
//   const threshold = 160;
//   let alreadyRedirected = false;

//   function detectDevTools() {
//     const widthExceeded = window.outerWidth - window.innerWidth > threshold;
//     const heightExceeded = window.outerHeight - window.innerHeight > threshold;

//     if ((widthExceeded || heightExceeded) && !alreadyRedirected) {
//       alreadyRedirected = true;
//       alert('تم اكتشاف فتح أدوات المطور، سيتم خروجك من الموقع.');
//       window.location.href = 'about:blank'; // أو استخدم: window.close();
//     }
//   }

//   setInterval(detectDevTools, 1000);
//   window.addEventListener('resize', detectDevTools);
// })();

