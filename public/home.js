const texts = ["The mastermind behind IPL, Lalit Modi, initially pitched a 50 over (One Day format) format tournament back in 1995 to the BCCI (Board of Control for Cricket in India), but was rejected them. It was only when ICL was launched by Zee in 2007, BCCI decided to start its own Twenty20 league. Isn’t this an interesting IPL fact.", "The IPL finale has been played 12 times and there is one team who has never played in the finale of the Indian Premier League, yet. Can you guess this team? Well, if you guessed Delhi Daredevils (DD) you are absolutely correct. This is one of the most unknown fact of the IPL. With this said, do you know the team which has played the most IPL Finals? Check out our next fact."]; // Replace with your image URLs
let currentIndex = 0;
const textElement = document.getElementById("fact"); // Replace with the ID of your target DOM element

function displayText() {
  textElement.textContent = texts[currentIndex];
  
  currentIndex = (currentIndex + 1) % texts.length;
}

setInterval(displayText, 8000);

function moreVis() {
  document.getElementById("more-content").style.display = 'block';
  document.getElementById("more").style.fontSize = 'small';
}
function moreInVis() {
  document.getElementById("more-content").style.display = 'none';
  document.getElementById("more").style.fontSize = '2.3rem';
}


document.getElementById("more").addEventListener("mouseover",moreVis);
document.getElementById("more").addEventListener('mouseout',moreInVis);

