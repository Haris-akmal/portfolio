document.querySelectorAll('.cert-img').forEach(img => {
    img.addEventListener('click', function () {
        document.getElementById("imgModal").style.display = "block";
        document.getElementById("imgModalDisplay").src = this.src;
    });
});

document.querySelector(".img-modal-close").addEventListener("click", function () {
    document.getElementById("imgModal").style.display = "none";
});

window.addEventListener("click", function (e) {
    if (e.target.id === "imgModal") {
        document.getElementById("imgModal").style.display = "none";
    }
});
const typedTextSpan = document.querySelector(".typed-text");
const textArray = ["a Data Analyst", "a Minecraft Builder"];
const typingDelay = 100;
const erasingDelay = 50;
const newTextDelay = 1500;
let textArrayIndex = 0;
let charIndex = 0;

function type() {
    if (charIndex < textArray[textArrayIndex].length) {
        typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
        charIndex++;
        setTimeout(type, typingDelay);
    } else {
        setTimeout(erase, newTextDelay);
    }
}

function erase() {
    if (charIndex > 0) {
        typedTextSpan.textContent = textArray[textArrayIndex].substring(0, charIndex - 1);
        charIndex--;
        setTimeout(erase, erasingDelay);
    } else {
        textArrayIndex = (textArrayIndex + 1) % textArray.length;
        setTimeout(type, typingDelay + 500);
    }
}

document.addEventListener("DOMContentLoaded", function() {
    if (textArray.length) setTimeout(type, newTextDelay + 250);
});


