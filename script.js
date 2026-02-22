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

    const music = document.getElementById("bg-music");
    fadeOutMusic(music, () => {
        music.src = "assets/birthday-song.mp3"; // lagu birthday kamu
        music.load();
        fadeInMusic(music);
    });

    body.innerHTML = `
        <div class="birthday-scene">

            <div class="birthday-bg"></div>

            <div class="birthday-content">
                <h1 class="birthday-title">
                    Happy Birthday Dirverss 🎂
                </h1>

                <p class="birthday-text">
                    Hari ini ulang taun harus happy happy yaa cantik  
                    have a wonderful and great day lovely ✨
                </p>
                <div class="cake-wrapper">
                    <div class="cake">
                        <div class="layer layer-bottom"></div>
                        <div class="layer layer-middle"></div>
                        <div class="layer layer-top"></div>

                        <div class="candle">
                            <div class="flame"></div>
                        </div>
                    </div>
                </div>

                <p class="blow-text">
                Tiup lilinnya (pencet apinya) ✨
                </p>

                <p class="wish-text" style="display:none;">
                Make a wish Sayangg 💫
                </p>

            </div>

        </div>

        <div id="confetti-container"></div>
        <div id="heart-container"></div>
    `;

    bigFirstExplosion();
    startExplosionConfetti();
    startHearts();
    setTimeout(() => {
        initCandleBlow();
    }, 300);
}
/* Tambahkan di dalam fungsi openModal(topic) */
    else if (topic === 'letter') {

        body.innerHTML = `
            <div class="letter-scene">
                <div class="stars"></div>
                <div class="shooting-stars"></div>

                <div class="letter-box">
                    <div id="letter-text"></div>
                </div>
            </div>
        `;

        createStars();
        startShootingStars();

        setTimeout(() => {
            startTypewriter();
        }, 100);
    }
    /* ===== OTHER MENU ===== */
    else {
        body.innerHTML = `
            <h2 style="color:#FFB6C1; text-align:center; padding-top:100px; font-family:'Playfair Display';">
                COMING SOON YANG LAINYA ✨ <br>
                yang lainya belum sempet sayangg maaf yaa, masih belajar banyakk
                ini juga banyak di bantu ai huhu
                maaf yaa sayangg 😔😓
            </h2>
        `;
    }

    modal.style.display = "block";
}
function startShootingStars() {

    const container = document.querySelector(".shooting-stars");

    setInterval(() => {

        const star = document.createElement("div");
        star.classList.add("shooting-star");

        star.style.left = Math.random() * window.innerWidth + "px";
        star.style.top = Math.random() * 300 + "px";

        container.appendChild(star);

        setTimeout(() => {
            star.remove();
        }, 2000);

    }, 4000);
}
function startTypewriter() {

    const element = document.getElementById("letter-text");
    const container = document.querySelector(".letter-scene");
    if (!element) return;

    const text = `
Untuk Pacar aku Dina Nur Rohimah...

Miladuki saidah 💫
Barakallah fii umrik, fii rizki, fii ilmi, fii dunya wal akhirat🤍

Aku doain di umur kamu yang sekarang kamu diberikan kemudahan,
kelancaran dan kesabaran yang luas yaa cantikk,😎
rezekinya makin lancar semua usahanya pasti membuahkan hasil🤩

Aku belum bisa bantu banyak di umur kamu yang sekarang 🥹
Aku belum banyak supprot yang berdampak buat kamu
Aku ngga teralu berharap ini berharga buat kamu😻
Ini cuma codigan biasa banyak AI nya aja hehe
Semoga suka yaa sayangg💝
Cuma bisa ngasih doa sama cinta yang bisa aku kasih🫰🏻

Aku belajar banyak dari kamu tentang kesabaran, 💗
kebaikan, dan cinta yang tulus 🥰
Bersyukur masih bisa ngasih ini di ulang tahun kamu sekarang💓
Di hari ulang tahun kamu ini, 🫀
aku berdoa semoga hidup kamu selalu dipenuhi kebahagiaan🫶🏻
Setiap langkah kamu dipermudah
Semoga setiap mimpi kamu menjadi nyata satu per satu🩷
Semoga setiap tangis kamu diganti tawa yang tulus ❤️‍🔥
Karena kebahagiaan kamu kebahagiaan aku juga😊

Aku sayang kamu lebih dari kata-kata bisa ungkapkan💖
I love you more than anything in this universe ✨
I Love You In Eveny Universe🌌
I Love You 3000❤️

Novian Ramdani
`;

    element.innerHTML = "";
    let i = 0;

    function typing() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;

            // 🔥 AUTO SCROLL
            container.scrollTop = container.scrollHeight;

            setTimeout(typing, 60); // ⬅️ lebih pelan & romantis 😭
        }
    }

    typing();
}
function typing() {
    if (i < text.length) {

        element.innerHTML += text.charAt(i);
        i++;

        let speed;

        if (text.charAt(i) === "." || text.charAt(i) === ",") {
            speed = 300; // jeda kalau tanda baca
        } else {
            speed = Math.random() * 80 + 80; // random biar natural
        }

        setTimeout(typing, speed);
    }
}
function createStars() {

    const container = document.querySelector(".stars");
    if (!container) return;

    container.innerHTML = "";

    for (let i = 0; i < 120; i++) {

        const star = document.createElement("div");
        star.classList.add("star");

        star.style.left = Math.random() * 100 + "%";
        star.style.top = Math.random() * 100 + "%";

        star.style.animationDuration = (Math.random() * 3 + 1) + "s";
        star.style.opacity = Math.random();

        container.appendChild(star);
    }
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
    clearInterval(confettiInterval);

    const music = document.getElementById("bg-music");

    // Stop dulu
    music.pause();
    music.currentTime = 0;

    // Balikin lagu awal
    music.src = "assets/love.mp3"; // pastikan ini lagu awal kamu
    music.load();

    // Play lagi (pakai promise biar aman)
    music.play().catch(() => {
        console.log("Autoplay blocked, user interaction needed.");
    });
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
let confettiInterval;

function startExplosionConfetti() {

    const container = document.getElementById("confetti-container");

    clearInterval(confettiInterval);

    confettiInterval = setInterval(() => {

        explodeSide("left", container);
        explodeSide("right", container);

    }, 800);
}

function explodeSide(side, container) {

    for (let i = 0; i < 25; i++) {

        const confetti = document.createElement("div");
        confetti.classList.add("confetti");

        const colors = ["#FFB6C1", "#FFD700", "#FF69B4", "#ffffff"];
        confetti.style.background = colors[Math.floor(Math.random() * colors.length)];

        const startX = side === "left" ? 0 : window.innerWidth;
        const startY = window.innerHeight * (0.3 + Math.random() * 0.4);

        confetti.style.left = startX + "px";
        confetti.style.top = startY + "px";

        const randomX = (Math.random() - 0.5) * 800;
        const randomY = Math.random() * -600;

        confetti.style.setProperty("--x", randomX + "px");
        confetti.style.setProperty("--y", randomY + "px");

        container.appendChild(confetti);

        setTimeout(() => {
            confetti.remove();
        }, 4000);
    }
}
/* ================= MUSIC FADE ================= */

function fadeOutMusic(audio, callback) {
    let fade = setInterval(() => {
        if (audio.volume > 0.05) {
            audio.volume -= 0.05;
        } else {
            clearInterval(fade);
            audio.pause();
            audio.currentTime = 0;
            audio.volume = 0.6;
            if (callback) callback();
        }
    }, 100);
}

function fadeInMusic(audio) {
    audio.volume = 0;
    audio.play();
    let fade = setInterval(() => {
        if (audio.volume < 0.6) {
            audio.volume += 0.05;
        } else {
            clearInterval(fade);
        }
    }, 100);
}

/* ================= BIG FIRST EXPLOSION ================= */

function bigFirstExplosion() {
    const container = document.getElementById("confetti-container");

    for (let i = 0; i < 80; i++) {
        explodeSide("left", container);
        explodeSide("right", container);
    }
}

/* ================= FLOATING HEARTS ================= */

let heartInterval;

function startHearts() {
    const container = document.getElementById("heart-container");

    heartInterval = setInterval(() => {

        const heart = document.createElement("div");
        heart.classList.add("heart");

        heart.style.left = Math.random() * window.innerWidth + "px";

        container.appendChild(heart);

        setTimeout(() => {
            heart.remove();
        }, 6000);

    }, 500);
}
/* ================= BLOW CANDLE ================= */

function initCandleBlow() {

    const flame = document.querySelector(".flame");
    if (!flame) return;

    flame.addEventListener("click", () => {

        flame.style.display = "none";

        createSmoke();
        megaExplosion();
        showWishText();
    });
}

function createSmoke() {

    const candle = document.querySelector(".candle");

    const smoke = document.createElement("div");
    smoke.classList.add("smoke");

    candle.appendChild(smoke);

    setTimeout(() => {
        smoke.remove();
    }, 2000);
}

function megaExplosion() {

    const container = document.getElementById("confetti-container");

    for (let i = 0; i < 120; i++) {
        explodeSide("left", container);
        explodeSide("right", container);
    }
}

/* ================= BLOW CANDLE → WISH → LETTER ================= */

function showWishText() {

    const wish = document.querySelector(".wish-text");
    if (!wish) return;

    wish.style.display = "block";

    setTimeout(() => {

        const nextBtn = document.createElement("button");
        nextBtn.innerHTML = "Open My Letter 💌";
        nextBtn.className = "menu-btn next-scene-btn";
        nextBtn.style.marginTop = "20px";
        nextBtn.style.opacity = "0";
        nextBtn.style.transition = "opacity 1s ease";

        nextBtn.onclick = () => {

            fadeToNewMusic("assets/mellow.mp3");

            setTimeout(() => {
                openModal('letter');
            }, 800);

        };

        document.querySelector(".birthday-content").appendChild(nextBtn);

        setTimeout(() => {
            nextBtn.style.opacity = "1";
        }, 100);

    }, 2000);
}


/* ================= FADE MUSIC ================= */

function fadeToNewMusic(newSrc) {

    const music = document.getElementById("bg-music");

    let fadeOut = setInterval(() => {
        if (music.volume > 0.05) {
            music.volume -= 0.05;
        } else {
            clearInterval(fadeOut);

            music.pause();
            music.src = newSrc;
            music.load();
            music.volume = 0;
            music.play();

            let fadeIn = setInterval(() => {
                if (music.volume < 0.95) {
                    music.volume += 0.05;
                } else {
                    clearInterval(fadeIn);
                }
            }, 100);
        }
    }, 100);
}
