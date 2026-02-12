AOS.init();

/* --- TYPING --- */
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

/* --- CHANGE SCENE --- */
const meetBtn = document.getElementById("meet-btn");
meetBtn.addEventListener("click", changeScene);

function changeScene() {
    const music = document.getElementById("bg-music");
    music.play();
    music.volume = 0.4;

    startHeartLoop(); // Jalankan love loop terus-menerus

    document.getElementById("intro").classList.add("fade-out");
    setTimeout(() => {
        document.getElementById("intro").style.display = "none";
        const tl = document.getElementById("timeline");
        tl.classList.remove("hidden");
        tl.classList.add("fade-in");
        initParticles(); // Jalankan 500 titik putih
        AOS.refresh();
    }, 1000);
}

/* --- HEART LOOP --- */
function startHeartLoop() {
    const container = document.getElementById("hearts-container");
    setInterval(() => {
        const heart = document.createElement("div");
        heart.classList.add("heart");
        heart.style.left = Math.random() * 100 + "vw";
        const duration = Math.random() * 3 + 4;
        heart.style.animationDuration = duration + "s";
        const size = Math.random() * 15 + 10;
        heart.style.width = size + "px"; heart.style.height = size + "px";
        container.appendChild(heart);
        setTimeout(() => { heart.remove(); }, duration * 1000);
    }, 350); 
}

/* --- MODAL & SLIDESHOW .JPEG --- */
let slideInterval;
const dinaPhotos = [
    "assets/dina1.jpeg", "assets/dina2.jpeg", "assets/dina3.jpeg", 
    "assets/dina4.jpeg", "assets/dina5.jpeg", "assets/dina6.jpeg"
];

function openModal(topic) {
    const body = document.getElementById("modal-body");
    const modal = document.getElementById("story-modal");

    if (topic === 'about') {
        body.innerHTML = `
            <div class="about-layout">
                <div class="photo-box">
                    <img id="slideshow-img" src="${dinaPhotos[0]}" onerror="this.src='https://via.placeholder.com/350x450?text=Cek+File+.jpeg'" alt="Dina">
                </div>
                <div class="text-lines">
                    <div class="info-row"><strong>Nama Lengkap</strong><span>DINA NUR ROHIMAH</span></div>
                    <div class="info-row"><strong>Nama Panggilan</strong><span>Diverss & Sayangg</span></div>
                    <div class="info-row"><strong>Lahir</strong><span>MAJALAYA, 24 Febuari 2003 (Usia 23, berasa masih muda kan!)</span></div>
                    <div class="info-row"><strong>Pasangan</strong><span>NOVIAN RAMDANI</span></div>
                    <div class="info-row"><strong>Tinggi & Berat</strong><span>Tinggi di bawah Vian, Beratnya kurus ngga usah diet</span></div>
                    <div class="info-row"><strong>Penampilan & Kepribadian</strong><span>Cantik banget walau disebut bohong, baik, lucu, gemes, pinter, pekerja keras, ngga mudah nyerah, keren banget, dan care.</span></div>
                    <div class="info-row"><strong>Hobi</strong><span>Jajan, main, bercanda, kadang suka marah-marah hehehe</span></div>
                    <div class="info-row"><strong>Warna Favorit</strong><span>Monochrome, Cream, dan Pink</span></div>
                    <div class="info-row"><strong>Kewarganegaraan</strong><span>Warga negara Asgard mau pindah Wakanda</span></div>
                </div>
            </div>
        `;
        setTimeout(startSlideshow, 100);
    } else {
        body.innerHTML = `<h2 style="color:#FFB6C1; text-align:center; padding-top:100px; font-family:'Playfair Display';">COMING SOON ✨</h2>`;
    }
    modal.style.display = "block";
}

function startSlideshow() {
    let i = 0;
    const imgElement = document.getElementById("slideshow-img");
    if(!imgElement) return;
    clearInterval(slideInterval);
    slideInterval = setInterval(() => {
        i = (i + 1) % dinaPhotos.length;
        imgElement.style.opacity = 0;
        setTimeout(() => {
            imgElement.src = dinaPhotos[i];
            imgElement.style.opacity = 1;
        }, 300);
    }, 2500);
}

function closeModal() {
    document.getElementById("story-modal").style.display = "none";
    clearInterval(slideInterval);
}

/* --- PARTIKEL SANGAT RAMAI (500 TITIK) --- */
function initParticles() {
    const canvas = document.getElementById('particleCanvas');
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth; canvas.height = window.innerHeight;
    let particles = [];
    for(let i=0; i<500; i++) {
        particles.push({ 
            x: Math.random()*canvas.width, 
            y: Math.random()*canvas.height, 
            r: Math.random()*2, 
            d: Math.random()*0.4 + 0.1 
        });
    }
    function draw() {
        ctx.clearRect(0,0,canvas.width, canvas.height);
        ctx.fillStyle = "rgba(255, 255, 255, 0.7)";
        particles.forEach(p => {
            ctx.beginPath(); ctx.arc(p.x, p.y, p.r, 0, Math.PI*2); ctx.fill();
            p.y -= p.d; if(p.y < 0) p.y = canvas.height;
        });
        requestAnimationFrame(draw);
    }
    draw();
}

const muteBtn = document.getElementById("mute-btn");
const music = document.getElementById("bg-music");
muteBtn.addEventListener("click", () => {
    music.muted = !music.muted;
    muteBtn.innerHTML = music.muted ? "🔇" : "🔊";
});