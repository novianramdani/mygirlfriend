AOS.init();

/* ================= TYPING EFFECT ================= */
const text = "Dina Nur Rohimah";
let index = 0;

function typeEffect() {
    if (index < text.length) {
        document.getElementById("typing-name").innerHTML += text.charAt(index);
        index++;
        setTimeout(typeEffect, 120);
    }
}
typeEffect();


/* ================= CHANGE SCENE ================= */
const meetBtn = document.getElementById("meet-btn");
meetBtn.addEventListener("click", changeScene);

function changeScene() {
    const music = document.getElementById("bg-music");
    music.play();
    music.volume = 0.4;

    startHeartLoop();

    document.getElementById("intro").classList.add("fade-out");

    setTimeout(() => {
        document.getElementById("intro").style.display = "none";
        const tl = document.getElementById("timeline");
        tl.classList.remove("hidden");
        tl.classList.add("fade-in");
        initParticles();
        AOS.refresh();
    }, 1000);
}


/* ================= HEART LOOP ================= */
function startHeartLoop() {
    const container = document.getElementById("hearts-container");

    setInterval(() => {
        const heart = document.createElement("div");
        heart.classList.add("heart");

        heart.style.left = Math.random() * 100 + "vw";

        const duration = Math.random() * 3 + 4;
        heart.style.animationDuration = duration + "s";

        const size = Math.random() * 15 + 10;
        heart.style.width = size + "px";
        heart.style.height = size + "px";

        container.appendChild(heart);

        setTimeout(() => {
            heart.remove();
        }, duration * 1000);

    }, 350);
}


/* ================= MODAL SYSTEM ================= */
let slideInterval;
let sparkleInterval;

const dinaPhotos = [
    "assets/dina1.jpeg",
    "assets/dina2.jpeg",
    "assets/dina3.jpeg",
    "assets/dina4.jpeg",
    "assets/dina5.jpeg",
    "assets/dina6.jpeg"
];

function openModal(topic) {

    const body = document.getElementById("modal-body");
    const modal = document.getElementById("story-modal");

    clearInterval(slideInterval);
    clearInterval(sparkleInterval);

    /* ===== ABOUT YOU FULL VERSION ===== */
    if (topic === 'about') {

        body.innerHTML = `
    <div class="about-scene">

        <div class="about-header">
            <div class="about-ornament">
                <span></span>
                <div class="diamond"></div>
                <span></span>
            </div>

            <h1 class="shimmer-title">About The Most Beautiful Girl</h1>

            <div class="about-ornament bottom">
                <span></span>
                <div class="diamond"></div>
                <span></span>
            </div>
            <p class="about-quote">
                “The girl who changed my world forever.”
            </p>
        </div>

        <div class="about-layout">

            <div class="photo-wrapper">
                <div class="photo-box">
                    <img id="slideshow-img" src="${dinaPhotos[0]}" alt="Dina">
                </div>

                <div class="photo-caption">My Favorite Person 💖</div>

                <div class="marvel-signature-vertical">
                    <div class="marvel-icon top spidey">
                        <img src="assets/spiderman.png" alt="Spidey" class="spidey-img">
                    </div>
        
                    <div class="marvel-icon bottom cap">
                        <img src="assets/captain-america.png" alt="Captain America" class="icon-img">
                     </div>
                </div>
        </div>

            <div class="text-lines">

                <div class="info-row">
                    <strong>Nama Lengkap</strong>
                    <span>DINA NUR ROHIMAH</span>
                </div>

                <div class="info-row">
                    <strong>Nama Panggilan</strong>
                    <span>Diverss & Sayangg</span>
                </div>

                <div class="info-row">
                    <strong>Lahir</strong>
                    <span>MAJALAYA, 24 Februari 2003 (Usia 23, masih muda banget 😌)</span>
                </div>

                <div class="info-row">
                    <strong>Pasangan</strong>
                    <span>NOVIAN RAMDANI</span>
                </div>

                <div class="info-row">
                    <strong>Tinggi & Berat</strong>
                    <span>Tinggi di bawah Vian, beratnya kurus nggak usah diet 😆</span>
                </div>

                <div class="info-row">
                    <strong>Penampilan & Kepribadian</strong>
                    <span>Cantik banget (walau sering disebut aku pembohong), baik, lucu, gemes, pinter, pekerja keras, nggak mudah nyerah, keren banget, dan care.</span>
                </div>

                <div class="info-row">
                    <strong>Hobi</strong>
                    <span>Jajan, main, bercanda, kadang suka marah-marah hehehe</span>
                </div>

                <div class="info-row">
                    <strong>Warna Favorit</strong>
                    <span>Monochrome, Cream, dan Pink</span>
                </div>

                <div class="info-row">
                    <strong>Kewarganegaraan</strong>
                    <span>Warga negara Asgard mau pindah Wakanda 🌌</span>
                </div>

            </div>
        </div>

        <div class="sparkle-container" id="sparkle-container"></div>

            <div class="floating-orbs">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
            </div>

        </div>
`;


        setTimeout(startSlideshow, 100);
        setTimeout(startSparkles, 200);
    }


    /* ===== BIRTHDAY (COMING SOON FOR NOW) ===== */
    else if (topic === 'birthday') {

        body.innerHTML = `
            <div class="birthday-scene">
                <h1 class="birthday-title">Happy Birthday My Love 🎂</h1>
                <p class="birthday-text">
                    Coming soon… akan dibuat jauh lebih spesial lagi ✨
                </p>
            </div>
        `;
    }


    /* ===== OTHER MENU ===== */
    else {
        body.innerHTML = `
            <h2 style="color:#FFB6C1; text-align:center; padding-top:100px; font-family:'Playfair Display';">
                COMING SOON ✨
            </h2>
        `;
    }

    modal.style.display = "block";
}


/* ================= SLIDESHOW ================= */
function startSlideshow() {

    let i = 0;
    const imgElement = document.getElementById("slideshow-img");

    if (!imgElement) return;

    slideInterval = setInterval(() => {

        i = (i + 1) % dinaPhotos.length;

        imgElement.style.opacity = 0;

        setTimeout(() => {
            imgElement.src = dinaPhotos[i];
            imgElement.style.opacity = 1;
        }, 300);

    }, 2500);
}


/* ================= SPARKLE EFFECT ================= */
function startSparkles() {

    const container = document.getElementById("sparkle-container");
    if (!container) return;

    sparkleInterval = setInterval(() => {

        const sparkle = document.createElement("div");
        sparkle.classList.add("sparkle");

        sparkle.style.left = Math.random() * 100 + "%";
        sparkle.style.top = Math.random() * 100 + "%";

        container.appendChild(sparkle);

        setTimeout(() => {
            sparkle.remove();
        }, 2000);

    }, 300);
}


/* ================= CLOSE MODAL ================= */
function closeModal() {
    document.getElementById("story-modal").style.display = "none";
    clearInterval(slideInterval);
    clearInterval(sparkleInterval);
}


/* ================= PARTICLES ================= */
function initParticles() {

    const canvas = document.getElementById('particleCanvas');
    const ctx = canvas.getContext('2d');

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    let particles = [];

    for (let i = 0; i < 500; i++) {
        particles.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            r: Math.random() * 2,
            d: Math.random() * 0.4 + 0.1
        });
    }

    function draw() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.fillStyle = "rgba(255, 255, 255, 0.7)";

        particles.forEach(p => {
            ctx.beginPath();
            ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
            ctx.fill();

            p.y -= p.d;
            if (p.y < 0) p.y = canvas.height;
        });

        requestAnimationFrame(draw);
    }

    draw();
}


/* ================= MUTE BUTTON ================= */
const muteBtn = document.getElementById("mute-btn");
const music = document.getElementById("bg-music");

muteBtn.addEventListener("click", () => {
    music.muted = !music.muted;
    muteBtn.innerHTML = music.muted ? "🔇" : "🔊";
});
