window.addEventListener("DOMContentLoaded", function () {
    const ghostieSvgObject = document.getElementById("ghostie-svg");
    ghostieSvgObject.addEventListener("load", function () {
        const svgDoc = ghostieSvgObject.contentDocument;
        // Any JavaScript code interacting with the SVG should be placed here.
    });
});

document.getElementById("sign-in-form").addEventListener("submit", function (event) {
    event.preventDefault();

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    if (username === "afromk" && password === "clumsy12345") {
        const signInScreen = document.getElementById("sign-in-screen");
        signInScreen.style.opacity = "0";
        setTimeout(function () {
            signInScreen.style.display = "none";
        }, 500);

        // Show the loading screen
        const loadingScreen = document.getElementById("loading-screen");
        loadingScreen.style.display = "flex";
        setTimeout(function () {
            loadingScreen.style.opacity = "1";
        }, 0);

        // Hide the loading screen after a short delay
        setTimeout(function () {
            loadingScreen.style.opacity = "0";
            setTimeout(function () {
                loadingScreen.style.display = "none";
            }, 500);
        }, 1000);
    } else {
        alert("Incorrect username or password.");
    }
});





window.addEventListener("scroll", function () {
    // Get the scroll position and the body element
    var scrollPos = window.scrollY;
    var body = document.getElementById("scrolling-body");

    // Calculate the background size based on the scroll position
    var backgroundSize = 100 + (scrollPos * 0.025); // Adjust the "0.05" value to change the zoom speed

    // Set the background size CSS property
    body.style.backgroundSize = backgroundSize + "%";
});



document.querySelector("#play-pause").addEventListener("click", function () {
    const audio = document.querySelector("#audio-player");
    if (audio.paused) {
        audio.play();
        this.textContent = 'Pause';
    } else {
        audio.pause();
        this.textContent = 'Play';
    }
});



const audioFiles = ['meadows.mp3', 'dunes.mp3', 'tundra.mp3', 'deadlands.mp3', 'toxicswamp.mp3', 'scorched.mp3', 'twilight.mp3', 'cyber.mp3'];
let currentAudioIndex = 0;

function updateAudioSource() {
    document.querySelector("#audio-source").src = audioFiles[currentAudioIndex];
    document.querySelector("#audio-player").load();
    document.querySelector("#audio-player").play();
    document.querySelector("#play-pause").textContent = 'Pause'; // pause symbol
}

document.querySelector("#prev").addEventListener("click", function () {
    currentAudioIndex--;
    if (currentAudioIndex < 0) {
        currentAudioIndex = audioFiles.length - 1;
    }
    updateAudioSource();
});

document.querySelector("#next").addEventListener("click", function () {
    currentAudioIndex++;
    if (currentAudioIndex >= audioFiles.length) {
        currentAudioIndex = 0;
    }
    updateAudioSource();
});



function toggleMenu() {
    var navContainer = document.querySelector('.nav-container');
    navContainer.classList.toggle('active');
}
