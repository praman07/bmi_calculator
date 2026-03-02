/* ===================================================
   FERRARI LANDING PAGE — JAVASCRIPT (DOM + setTimeout + setInterval)
   =================================================== */

// ============================================
// 1. NAVBAR — Change background on scroll
// ============================================
var navbar = document.getElementById("navbar");

window.addEventListener("scroll", function () {
    if (window.scrollY > 80) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }
});


// ============================================
// 2. HERO TAGLINE — Typewriter effect (setInterval)
// ============================================
var taglineEl = document.getElementById("hero-tagline");
var taglineText = "SCUDERIA FERRARI — SINCE 1947";
var charIndex = 0;

// setInterval runs this function every 80ms to type one character at a time
var typingInterval = setInterval(function () {
    taglineEl.textContent = taglineText.substring(0, charIndex + 1);
    charIndex++;

    // Stop when all characters are typed
    if (charIndex >= taglineText.length) {
        clearInterval(typingInterval);
    }
}, 80);


// ============================================
// 3. SCROLL INDICATOR — Show after a delay (setTimeout)
// ============================================
var scrollIndicator = document.getElementById("scroll-indicator");

// setTimeout runs this function once after 2 seconds
setTimeout(function () {
    scrollIndicator.classList.add("visible");
}, 2000);


// ============================================
// 4. MODEL CARDS — Create cards using DOM methods
// ============================================
var models = [
    {
        name: "SF90 Stradale",
        spec: "986 HP • Hybrid V8",
        desc: "The most powerful Ferrari ever made. A plug-in hybrid supercar that rewrites the rules.",
        img: "https://images.unsplash.com/photo-1583121274602-3e2820c69888?w=600&q=80"
    },
    {
        name: "F8 Tributo",
        spec: "710 HP • Twin-Turbo V8",
        desc: "A tribute to the most powerful V8 in Ferrari history. Pure mid-engine perfection.",
        img: "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=600&q=80"
    },
    {
        name: "Roma",
        spec: "612 HP • V8 Turbo",
        desc: "La Dolce Vita reborn. A grand touring coupé with timeless Italian elegance.",
        img: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=600&q=80"
    }
];

var modelsGrid = document.getElementById("models-grid");

// Loop through each model and create a card using DOM createElement
for (var i = 0; i < models.length; i++) {
    var card = document.createElement("div");
    card.classList.add("model-card");

    var img = document.createElement("img");
    img.src = models[i].img;
    img.alt = models[i].name;

    var info = document.createElement("div");
    info.classList.add("model-info");

    var h3 = document.createElement("h3");
    h3.textContent = models[i].name;

    var spec = document.createElement("p");
    spec.classList.add("model-spec");
    spec.textContent = models[i].spec;

    var desc = document.createElement("p");
    desc.textContent = models[i].desc;

    // Append children in order: h3 → spec → desc → info → card
    info.appendChild(h3);
    info.appendChild(spec);
    info.appendChild(desc);

    card.appendChild(img);
    card.appendChild(info);

    modelsGrid.appendChild(card);

    // setTimeout to reveal each card with a staggered delay (beginner-friendly animation)
    (function (cardElement, delay) {
        setTimeout(function () {
            cardElement.classList.add("visible");
        }, delay);
    })(card, 300 + i * 200);
}


// ============================================
// 5. STATS COUNTER — Count up with setInterval
// ============================================
var statElements = document.querySelectorAll(".stat-number");
var countersStarted = false;

function startCounters() {
    if (countersStarted) return;
    countersStarted = true;

    for (var i = 0; i < statElements.length; i++) {
        (function (el) {
            var target = parseInt(el.getAttribute("data-target"));
            var current = 0;
            var increment = Math.ceil(target / 60); // finish in ~60 steps

            // setInterval counts up from 0 to the target number
            var counter = setInterval(function () {
                current = current + increment;

                if (current >= target) {
                    current = target;
                    clearInterval(counter);
                }

                el.textContent = current;
            }, 30);
        })(statElements[i]);
    }
}

// Start counters when the stats section scrolls into view
window.addEventListener("scroll", function () {
    var statsSection = document.getElementById("stats");
    var rect = statsSection.getBoundingClientRect();

    if (rect.top < window.innerHeight && rect.bottom > 0) {
        startCounters();
    }
});


// ============================================
// 6. GALLERY — Create gallery items using DOM
// ============================================
var galleryImages = [
    { src: "https://images.unsplash.com/photo-1621135802920-133df287f89c?w=600&q=80", label: "Engine Detail" },
    { src: "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=600&q=80", label: "Interior Luxury" },
    { src: "https://images.unsplash.com/photo-1606220838315-056192d5e927?w=600&q=80", label: "Aerodynamics" },
    { src: "https://images.unsplash.com/photo-1494976388531-d1058494cdd8?w=600&q=80", label: "On The Road" },
    { src: "https://images.unsplash.com/photo-1511919884226-fd3cad34687c?w=600&q=80", label: "Racing Heritage" },
    { src: "https://images.unsplash.com/photo-1525609004556-c46c0133bbbb?w=600&q=80", label: "Showroom" }
];

var galleryGrid = document.getElementById("gallery-grid");

for (var j = 0; j < galleryImages.length; j++) {
    var item = document.createElement("div");
    item.classList.add("gallery-item");

    var galleryImg = document.createElement("img");
    galleryImg.src = galleryImages[j].src;
    galleryImg.alt = galleryImages[j].label;

    var overlay = document.createElement("div");
    overlay.classList.add("gallery-overlay");

    var label = document.createElement("span");
    label.textContent = galleryImages[j].label;

    overlay.appendChild(label);
    item.appendChild(galleryImg);
    item.appendChild(overlay);
    galleryGrid.appendChild(item);
}


// ============================================
// 7. GALLERY & QUOTE — Reveal on scroll
// ============================================
function revealOnScroll() {
    // Gallery items
    var galleryItems = document.querySelectorAll(".gallery-item");
    for (var k = 0; k < galleryItems.length; k++) {
        var rect = galleryItems[k].getBoundingClientRect();
        if (rect.top < window.innerHeight - 50) {
            galleryItems[k].classList.add("visible");
        }
    }

    // Quote
    var quoteText = document.getElementById("quote-text");
    var quoteAuthor = document.getElementById("quote-author");
    var quoteRect = quoteText.getBoundingClientRect();
    if (quoteRect.top < window.innerHeight - 50) {
        quoteText.classList.add("visible");
        quoteAuthor.classList.add("visible");
    }
}

window.addEventListener("scroll", revealOnScroll);


// ============================================
// 8. BACK TO TOP BUTTON — Show/hide + smooth scroll
// ============================================
var backToTopBtn = document.getElementById("back-to-top");

window.addEventListener("scroll", function () {
    if (window.scrollY > 600) {
        backToTopBtn.classList.add("visible");
    } else {
        backToTopBtn.classList.remove("visible");
    }
});

backToTopBtn.addEventListener("click", function () {
    window.scrollTo({ top: 0, behavior: "smooth" });
});


// ============================================
// 9. EXPLORE BUTTON — Smooth scroll to models
// ============================================
var exploreBtn = document.getElementById("explore-btn");

exploreBtn.addEventListener("click", function () {
    document.getElementById("models").scrollIntoView({ behavior: "smooth" });
});


// ============================================
// 10. ROTATING QUOTES — Change quote with setInterval + setTimeout
// ============================================
var quotes = [
    { text: '"People dream of driving a Ferrari. We build the dream."', author: "— Enzo Ferrari" },
    { text: '"What\'s behind you doesn\'t matter."', author: "— Enzo Ferrari" },
    { text: '"I am not a driver. I am a racer."', author: "— Gilles Villeneuve" },
    { text: '"Racing is life. Everything before and after is just waiting."', author: "— Steve McQueen" }
];

var currentQuote = 0;
var quoteTextEl = document.getElementById("quote-text");
var quoteAuthorEl = document.getElementById("quote-author");

// setInterval rotates the quote every 5 seconds
setInterval(function () {
    // Fade out
    quoteTextEl.classList.remove("visible");
    quoteAuthorEl.classList.remove("visible");

    // setTimeout to change text after fade-out completes
    setTimeout(function () {
        currentQuote = (currentQuote + 1) % quotes.length;
        quoteTextEl.textContent = quotes[currentQuote].text;
        quoteAuthorEl.textContent = quotes[currentQuote].author;
        quoteTextEl.classList.add("visible");
        quoteAuthorEl.classList.add("visible");
    }, 800);
}, 5000);
