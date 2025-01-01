// Time count
function updateTime() {
    const startDate = new Date("2005-01-14T00:00:00");
    const now = new Date();

    let years = now.getFullYear() - startDate.getFullYear();
    let months = now.getMonth() - startDate.getMonth();
    let days = now.getDate() - startDate.getDate();
    let hours = now.getHours() - startDate.getHours();
    let minutes = now.getMinutes() - startDate.getMinutes();
    let seconds = now.getSeconds() - startDate.getSeconds();

    if (seconds < 0) {
        seconds += 60;
        minutes--;
    }

    if (minutes < 0) {
        minutes += 60;
        hours--;
    }

    if (hours < 0) {
        hours += 24;
        days--;
    }

    if (days < 0) {
        const previousMonth = new Date(now.getFullYear(), now.getMonth(), 0);
        days += previousMonth.getDate();
        months--;
    }

    if (months < 0) {
        months += 12;
        years--;
    }

    document.getElementById("years").textContent = years;
    document.getElementById("months").textContent = months;
    document.getElementById("days").textContent = days;
    document.getElementById("hours").textContent = hours;
    document.getElementById("minutes").textContent = minutes;
    document.getElementById("seconds").textContent = seconds;
}

setInterval(updateTime, 1000);

// Candle

// Passcode
const correctPasscode = "140105";

function pressKey(key) {
  const passcodeField = document.getElementById("passcode");
  if (passcodeField.value.length < 6) {
    passcodeField.value += key;
  }
}

function clearPasscode() {
  document.getElementById("passcode").value = "";
}

function submitPasscode() {
  const passcodeField = document.getElementById("passcode");
  if (passcodeField.value === correctPasscode) {
    window.location.href = "page2.html"; // Ganti dengan URL halaman tujuan
  } else {
    alert("Hayooo salah, coba lagi yuk!!!");
    clearPasscode();
  }
}

// button page1 -> timer
function scrollToSection(id) {
    const section = document.getElementById(id);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
    }
}

// greating slideshow
const images = [
    "/src/img/BB.jpg",
    "/src/img/CC.jpg",
    "/src/img/DD.jpg",
    "/src/img/EE.jpg",
    "/src/img/FF.jpg",
    "/src/img/GG.jpg",
    "/src/img/HH.jpg",
    "/src/img/II.jpg",
    "/src/img/JJ.jpg",
    "/src/img/KK.jpg",
    "/src/img/LL.jpg",
    "/src/img/MM.jpg",
    "/src/img/NN.jpg",
];
let currentImageIndex = 0;
    const slideshow = document.getElementById("slideshow");

    function changeImage() {
        slideshow.style.opacity = 0;
        setTimeout(() => {
            slideshow.src = images[currentImageIndex];
            slideshow.style.opacity = 1;
            currentImageIndex = (currentImageIndex + 1) % images.length;
        }, 500);
    }
    setInterval(changeImage, 3000);

// Play Lagu
document.getElementById("playButton").addEventListener("click", function () {
    const audio = document.getElementById("birthdaySong");

    // Mulai pemutaran dari detik tertentu (opsional)
    const startTime = 0; // Mulai dari detik ke-10
    const endTime = 96; // Berhenti pada detik ke-20

    audio.currentTime = startTime;
    audio.play();

    // Hentikan audio saat mencapai waktu akhir
    audio.addEventListener("timeupdate", function () {
      if (audio.currentTime >= endTime) {
        audio.pause();
        audio.currentTime = startTime; // Kembali ke awal jika perlu
      }
    });

    // Sembunyikan tombol setelah lagu dimulai
    this.style.display = "none";
  });