const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");

if (hamburger) {
    hamburger.addEventListener("click", () => {
        navLinks.classList.toggle("active");
    });
}


const themeBtn = document.getElementById("themeToggle");

if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark");
    if (themeBtn) {
        themeBtn.textContent = "☀️";
    }
}

if (themeBtn) {
    themeBtn.addEventListener("click", () => {

        document.body.classList.toggle("dark");

        if (document.body.classList.contains("dark")) {
            localStorage.setItem("theme", "dark");
            themeBtn.textContent = "☀️";
        } else {
            localStorage.setItem("theme", "light");
            themeBtn.textContent = "🌙";
        }

    });
}


const slider = document.getElementById("slider");

if (slider) {

    const images = [
        "https://picsum.photos/id/1015/1200/500",
        "https://picsum.photos/id/1018/1200/500",
        "https://picsum.photos/id/1019/1200/500",
        "https://picsum.photos/id/1020/1200/500"
    ];

    let current = 0;

    setInterval(() => {
        current++;

        if (current >= images.length) {
            current = 0;
        }

        slider.src = images[current];

    }, 3000);
}


const modal = document.getElementById("modal");
const openModal = document.getElementById("openModal");
const closeModal = document.getElementById("closeModal");

if (openModal && modal) {

    openModal.addEventListener("click", () => {
        modal.style.display = "flex";
    });

}

if (closeModal && modal) {

    closeModal.addEventListener("click", () => {
        modal.style.display = "none";
    });

    window.addEventListener("click", (e) => {

        if (e.target === modal) {
            modal.style.display = "none";
        }

    });
}

const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll", () => {

    if (!topBtn) return;

    if (window.scrollY > 300) {
        topBtn.style.display = "block";
    } else {
        topBtn.style.display = "none";
    }

});

if (topBtn) {

    topBtn.addEventListener("click", () => {

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    });

}


const form = document.getElementById("contactForm");

if (form) {

    form.addEventListener("submit", (e) => {

        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const phone = document.getElementById("phone").value.trim();

        const emailPattern =
            /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        const phonePattern =
            /^[0-9]{10}$/;

        if (name.length < 3) {
            alert("Name must contain at least 3 characters.");
            e.preventDefault();
            return;
        }

        if (!emailPattern.test(email)) {
            alert("Enter a valid email address.");
            e.preventDefault();
            return;
        }

        if (!phonePattern.test(phone)) {
            alert("Enter a valid 10 digit phone number.");
            e.preventDefault();
            return;
        }

        alert("Form submitted successfully!");

    });

}



const counters = document.querySelectorAll(".counter");

counters.forEach(counter => {

    const updateCounter = () => {

        const target =
            +counter.getAttribute("data-target");

        const count =
            +counter.innerText;

        const increment =
            Math.ceil(target / 100);

        if (count < target) {

            counter.innerText =
                count + increment;

            setTimeout(updateCounter, 20);

        } else {

            counter.innerText = target;

        }

    };

    updateCounter();

});