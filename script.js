/* =========================================================
   POULAMI NANDI PORTFOLIO — PREMIUM INTERACTIONS
   ========================================================= */

document.addEventListener("DOMContentLoaded", () => {

    /* ---------------------------------------------------------
       PRELOADER
    --------------------------------------------------------- */

    const preloader = document.querySelector(".preloader");

    if (preloader) {
        setTimeout(() => {
            preloader.classList.add("hide");

            setTimeout(() => {
                preloader.style.display = "none";
            }, 700);

        }, 700);
    }


    /* ---------------------------------------------------------
       SMOOTH SCROLL
    --------------------------------------------------------- */

    document.querySelectorAll('a[href^="#"]').forEach(link => {

        link.addEventListener("click", function(e) {

            const targetId = this.getAttribute("href");

            if (!targetId || targetId === "#") return;

            const target = document.querySelector(targetId);

            if (target) {
                e.preventDefault();

                target.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });
            }

        });

    });


    /* ---------------------------------------------------------
       ACTIVE NAVIGATION
    --------------------------------------------------------- */

    const sections = document.querySelectorAll("section[id]");
    const navLinks = document.querySelectorAll(".nav-link");

    const updateActiveNav = () => {

        let currentSection = "";

        sections.forEach(section => {

            const sectionTop = section.offsetTop - 180;
            const sectionHeight = section.offsetHeight;

            if (
                window.scrollY >= sectionTop &&
                window.scrollY < sectionTop + sectionHeight
            ) {
                currentSection = section.getAttribute("id");
            }

        });

        navLinks.forEach(link => {

            link.classList.remove("active");

            if (link.getAttribute("href") === `#${currentSection}`) {
                link.classList.add("active");
            }

        });

    };

    window.addEventListener("scroll", updateActiveNav);

    updateActiveNav();


    /* ---------------------------------------------------------
       SCROLL REVEAL
       
       IMPORTANT:
       Images are NOT hidden by this animation.
       --------------------------------------------------------- */

    const revealElements = document.querySelectorAll(
        ".section-heading, " +
        ".about-content, " +
        ".education-card, " +
        ".skill-card, " +
        ".timeline-item, " +
        ".project-card, " +
        ".contact-content, " +
        ".creative-content"
    );

    revealElements.forEach(element => {
        element.classList.add("reveal-element");
    });


    const revealObserver = new IntersectionObserver(
        (entries, observer) => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.classList.add("revealed");

                    observer.unobserve(entry.target);
                }

            });

        }, {
            threshold: 0.12
        }
    );


    revealElements.forEach(element => {
        revealObserver.observe(element);
    });


    /* ---------------------------------------------------------
       PROJECT CARD MAGNETIC HOVER
       --------------------------------------------------------- */

    const projectCards = document.querySelectorAll(".project-card");

    projectCards.forEach(card => {

        card.addEventListener("mousemove", e => {

            const rect = card.getBoundingClientRect();

            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            const moveX = (x / rect.width - 0.5) * 4;
            const moveY = (y / rect.height - 0.5) * 4;

            card.style.transform =
                `translate(${moveX}px, ${moveY}px)`;

        });


        card.addEventListener("mouseleave", () => {

            card.style.transform = "translate(0, 0)";

        });

    });


    /* ---------------------------------------------------------
       IMAGE PARALLAX
       
       ONLY changes transform.
       NEVER changes opacity/display.
       --------------------------------------------------------- */

    const imageFrames = document.querySelectorAll(
        ".hero-image-frame, " +
        ".about-image-wrapper, " +
        ".experience-image-frame, " +
        ".creative-visual, " +
        ".contact-visual"
    );


    window.addEventListener("scroll", () => {

        const scrollY = window.scrollY;

        imageFrames.forEach(frame => {

            const rect = frame.getBoundingClientRect();

            const windowHeight = window.innerHeight;

            if (
                rect.top < windowHeight &&
                rect.bottom > 0
            ) {

                const progress =
                    (windowHeight - rect.top) /
                    (windowHeight + rect.height);

                const movement =
                    (progress - 0.5) * 20;

                const image = frame.querySelector("img");

                if (image) {

                    image.style.transform =
                        `scale(1.03) translateY(${movement}px)`;

                }

            }

        });

    });


    /* ---------------------------------------------------------
       PROJECT IMAGE HOVER
       --------------------------------------------------------- */

    document.querySelectorAll(".project-image").forEach(imageBox => {

        const image = imageBox.querySelector("img");

        if (!image) return;

        imageBox.addEventListener("mouseenter", () => {
            image.style.transform = "scale(1.05)";
        });

        imageBox.addEventListener("mouseleave", () => {
            image.style.transform = "scale(1)";
        });

    });


    /* ---------------------------------------------------------
       BACK TO TOP
       --------------------------------------------------------- */

    const backToTop = document.querySelector(".back-to-top");

    if (backToTop) {

        window.addEventListener("scroll", () => {

            if (window.scrollY > 600) {
                backToTop.classList.add("show");
            } else {
                backToTop.classList.remove("show");
            }

        });

    }


    /* ---------------------------------------------------------
       CURSOR GLOW
       --------------------------------------------------------- */

    const cursorGlow = document.createElement("div");

    cursorGlow.className = "cursor-glow";

    document.body.appendChild(cursorGlow);


    document.addEventListener("mousemove", e => {

        cursorGlow.style.left = `${e.clientX}px`;
        cursorGlow.style.top = `${e.clientY}px`;

    });


});