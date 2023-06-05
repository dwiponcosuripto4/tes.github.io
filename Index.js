document.addEventListener('DOMContentLoaded', function() {
    function getsalam() {
      hour = new Date().getHours();
      let greeting;
  
      if (hour < 12) {
        greeting = "Selamat Pagi,";
      } else if (hour < 18) {
        greeting = "Selamat Siang,";
      } else {
        greeting = "Selamat Malam,";
      }
  
      return greeting;
    }

    function getCurrentDate() {
        const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
        const currentDate = new Date().toLocaleDateString('en-US', options);
        return currentDate;
      }
    
      function getCurrentTime() {
        const options = { hour: 'numeric', minute: 'numeric', second: 'numeric' };
        const currentTime = new Date().toLocaleTimeString('en-US', options);
        return currentTime;
      }
      document.getElementById("greeting").textContent = getGreeting();
      document.getElementById("date").textContent = getCurrentDate();
      document.getElementById("time").textContent = getCurrentTime();

  });
  