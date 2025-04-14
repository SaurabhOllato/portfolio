window.onload = function () {
    const phrases = ["artwork", "editorial", "motion"];
    let index = 0, char = 0, current = "", typing = true;
  
    function typeEffect() {
      if (typing) {
        if (char < phrases[index].length) {
          current += phrases[index][char++];
          document.getElementById("typingText").innerText = current;
          setTimeout(typeEffect, 100);
        } else {
          typing = false;
          setTimeout(typeEffect, 1000);
        }
      } else {
        if (char > 0) {
          current = current.slice(0, --char);
          document.getElementById("typingText").innerText = current;
          setTimeout(typeEffect, 50);
        } else {
          typing = true;
          index = (index + 1) % phrases.length;
          setTimeout(typeEffect, 500);
        }
      }
    }
  
    typeEffect();
  };
  