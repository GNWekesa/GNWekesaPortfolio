 /////////////////////////////////////////
// Show the scroll-up button when scrolled down
window.onscroll = function () {
    const scrollUpButton = document.getElementById("scroll-up");
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
      scrollUpButton.classList.add("show");
    } else {
      scrollUpButton.classList.remove("show");
    }
  };
  
  // Scroll to the top of the page when the button is clicked
  document.getElementById("scroll-up").addEventListener("click", function (event) {
    event.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
  
 /////////////////////////////////////////
  //  JavaScript for rotating hobbies 
  document.addEventListener("DOMContentLoaded", function () {
    const hobbies = [
      { icon: "bi-mic-fill", text: "Singing" },
      { icon: "bi-headphones", text: "Listening to Music" },
      { icon: "bi-geo-alt-fill", text: "Travelling" },
      { icon: "bi-book-fill", text: "Reading" },
      { icon: "bi-egg-fried", text: "Cooking" },
      { icon: "bi-scissors", text: "Crocheting" },
      { icon: "bi-tree-fill", text: "Hiking" },
      { icon: "bi-droplet-fill", text: "Soap Making" }
    ];

    const hobbyElement = document.getElementById("hobbyText");
    let index = 0;

    setInterval(() => {
      index = (index + 1) % hobbies.length;
      const { icon, text } = hobbies[index];
      hobbyElement.innerHTML = `<i class="bi ${icon} me-2"></i>${text}`;
    }, 2500);
  });

 /////////////////////////////////////////
  //script below is for loading greetings
      const greetings = [
      { text: "Hello", lang: "English" },
      { text: "Habari", lang: "Swahili" },
      { text: "Oriena", lang: "Bukusu" },
      { text: "Sawubona", lang: "Zulu" },
      { text: "Bonjour", lang: "French" },
      { text: "Hola", lang: "Spanish" },
      { text: "مرحبًا", lang: "Arabic" },
      { text: "你好", lang: "Chinese (Mandarin)" },
      { text: "こんにちは", lang: "Japanese" },
      { text: "नमस्ते", lang: "Hindi" },
      { text: "Hallo", lang: "German" },
      { text: "Ciao", lang: "Italian" },
      { text: "Olá", lang: "Portuguese" },
      { text: "Привет", lang: "Russian" },
      { text: "안녕하세요", lang: "Korean" },
      { text: "ሰላም", lang: "Amharic" }
    ];

    let index = 0;
    const greetingDiv = document.getElementById('greetingDisplay');



function showGreeting() {
  const greeting = greetings[index];
  greetingDiv.classList.remove('show', 'animate__fadeIn');
  
  setTimeout(() => {
    greetingDiv.innerHTML = `${greeting.text}<small>${greeting.lang}</small>`;
    greetingDiv.classList.add('show', 'animate__fadeIn');
    index = (index + 1) % greetings.length;
  }, 500);// Wait before showing new greeting
}

    showGreeting();
    setInterval(showGreeting, 3000);

