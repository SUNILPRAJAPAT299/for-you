let step = 0;

const messages = [
  "So Valentine’s Day is coming… 💀",
  "And you thought no one would wish you?",
  "Relax. It's still not a boyfriend 😎",
  "It's ME. Your emotional support bestie.",
  "No chocolates ❌ No roses ❌",
  "Just sarcasm, friendship & free trauma 😂",
  "Happy Valentine’s Day Bhondu💖",
  "You’re welcome. Website effort matters 😌"
];

function nextMessage() {
  if (step < messages.length) {
    document.getElementById("messageBox").innerHTML +=
      `<p>👉 ${messages[step]}</p>`;
    step++;

    // Random funny popup
    if (step % 2 === 0 && step < messages.length) {
      alert(randomPopup());
    }

    // Show Valentine popup after last message
    if (step === messages.length) {
      setTimeout(function() {
        document.getElementById("valentinePopup").classList.add("active");
      }, 600);
    }
  }
}

function randomPopup() {
  const popups = [
    "Why are you smiling right now? 😏",
    "This is friendship. Don't get ideas 💀",
    "Screenshot allowed. Falling in love not allowed 😎",
    "Best friend effort > boyfriend effort 😌",
    "Yes, I made this on purpose 💅"
  ];
  return popups[Math.floor(Math.random() * popups.length)];
}

function acceptProposal() {
  document.getElementById("valentinePopup").classList.remove("active");
  setTimeout(function() {
    document.getElementById("prankPopup").classList.add("active");
  }, 500);
}

function closePrank() {
  document.getElementById("prankPopup").classList.remove("active");
  setTimeout(function() {
    document.getElementById("emotionalPopup").classList.add("active");
    startTypingEffect();
  }, 600);
}

const emotionalLines = [
  "Okay jokes aside...",
  "I just want you to know something real.",
  "No matter how crazy life gets,",
  "no matter how far apart we are,",
  "I will always be there with you.",
  "When the world feels too heavy,",
  "I'll be your safe place to fall.",
  "You don't have to be strong all the time,",
  "because I'll be strong for you.",
  "Every tear you've ever cried,",
  "I wish I could have caught it.",
  "You are not just my friend,",
  "you are my favorite heartbeat in this noisy world.",
  "If the stars ever forget to shine,",
  "I'll light up your sky myself.",
  "You deserve a love so soft,",
  "it makes your soul feel like a warm hug on a cold night.",
  "So here's my promise to you —",
  "through every storm, every silence, every broken day...",
  "I'll be right here. Always. Bhondu💛",
  "you love  Bhondu  🖤🧿❤️"
];

let lineIndex = 0; 
let charIndex = 0;
let currentDisplayedText = "";
let typingTimer = null;

function startTypingEffect() {
  lineIndex = 0;
  charIndex = 0;
  currentDisplayedText = "";
  document.getElementById("typingText").innerHTML = "";
  document.getElementById("emotionalFooter").style.display = "none";
  typeNextChar();
}

function typeNextChar() {
  if (lineIndex >= emotionalLines.length) {
    document.getElementById("typingCursor").style.display = "none";
    document.getElementById("emotionalFooter").style.display = "block";
    return;
  }

  var currentLine = emotionalLines[lineIndex];

  if (charIndex < currentLine.length) {
    currentDisplayedText += currentLine.charAt(charIndex);
    document.getElementById("typingText").innerHTML = formatLines(currentDisplayedText);
    var container = document.getElementById("typingContainer");
    container.scrollTop = container.scrollHeight;
    charIndex++;
    typingTimer = setTimeout(typeNextChar, 45);
  } else {
    currentDisplayedText += "\n";
    charIndex = 0;
    lineIndex++;
    typingTimer = setTimeout(typeNextChar, 400);
  }
}

function formatLines(text) {
  return text.split("\n").map(function(line) {
    return line;
  }).join("<br>");
}

function restartWebsite() {
  window.location.reload();
}
