const correctPasscode = "140105"; // Change this to your desired passcode
const startDate = new Date(2005, 0, 14, 0, 0, 0); // Januari adalah bulan ke-0

function checkPasscode() {
    const input = document.getElementById("passcode-input").value;
    const errorMessage = document.getElementById("error-message");
    if (input === correctPasscode) {
      document.getElementById("passcode-screen").classList.add("hidden");
      document.getElementById("timer-screen").classList.remove("hidden");
      startTimer();
    } else {
      errorMessage.classList.remove("hidden");
    }
  }
  
  function startTimer() {
    const updateTimer = () => {
      const now = new Date();
      let elapsed = now - startDate; // Selisih waktu dalam milidetik
      
      console.log(`Start Date: ${startDate}`);
      console.log(`Current Date: ${new Date()}`);
      console.log(`Elapsed Time (ms): ${elapsed}`);
  
      // Hitung tahun, bulan, hari, jam, menit, detik
      const totalDays = Math.floor(elapsed / (1000 * 60 * 60 * 24));
      const years = Math.floor(totalDays / 365);
      const months = Math.floor((totalDays % 365) / 30);
      const days = totalDays % 30;
      const hours = Math.floor((elapsed / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((elapsed / (1000 * 60)) % 60);
      const seconds = Math.floor((elapsed / 1000) % 60);
  
      // Update elemen HTML
      document.getElementById("years").textContent = years;
      document.getElementById("months").textContent = months;
      document.getElementById("days").textContent = days;
      document.getElementById("hours").textContent = hours.toString().padStart(2, "0");
      document.getElementById("minutes").textContent = minutes.toString().padStart(2, "0");
      document.getElementById("seconds").textContent = seconds.toString().padStart(2, "0");
    };
  
    // Jalankan update timer setiap detik
    setInterval(updateTimer, 1000);
    updateTimer(); // Panggil sekali untuk menghindari delay awal
  }
  