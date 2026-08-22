// =====================================
// PORTFOLIO JAVASCRIPT
// =====================================

document.addEventListener("DOMContentLoaded", function() {

    // =====================================
    // WELCOME SCREEN
    // =====================================

    const welcomeScreen = document.getElementById("welcome-screen");
    const enterPortfolio = document.getElementById("enter-portfolio");

    const typingText = document.getElementById("typing-text");


    // =====================================
    // TYPING EFFECT
    // =====================================

    const text = "Aspiring Software Engineer";

    let i = 0;

    function startTyping() {

        // Make absolutely sure the old text is removed
        typingText.textContent = "";

        i = 0;

        function typeWriter() {

            if (i < text.length) {

                typingText.textContent += text.charAt(i);

                i++;

                setTimeout(typeWriter, 100);

            }

        }

        typeWriter();
    }


    // =====================================
    // ENTER PORTFOLIO
    // =====================================

    enterPortfolio.addEventListener("click", function() {

        // Hide welcome screen
        welcomeScreen.classList.add("hide");

        // Start typing AFTER entering portfolio
        setTimeout(function() {

            startTyping();

        }, 500);

    });


    // =====================================
    // SMOOTH SCROLLING
    // =====================================

    document.querySelectorAll("nav a").forEach(function(link) {

        link.addEventListener("click", function(event) {

            event.preventDefault();

            const target = document.querySelector(
                this.getAttribute("href")
            );

            if (target) {

                target.scrollIntoView({
                    behavior: "smooth"
                });

            }

        });

    });


    // =====================================
    // SCROLL REVEAL
    // =====================================

    const sections = document.querySelectorAll("section");

    const observer = new IntersectionObserver(

        function(entries) {

            entries.forEach(function(entry) {

                if (entry.isIntersecting) {

                    entry.target.classList.add("show");

                }

            });

        },

        {
            threshold: 0.15
        }

    );


    sections.forEach(function(section) {

        section.classList.add("hidden");

        observer.observe(section);

    });


    // =====================================
    // ACTIVE NAVIGATION
    // =====================================

    const sectionsForNav =
        document.querySelectorAll("section");

    const navLinks =
        document.querySelectorAll("nav ul li a");


    window.addEventListener("scroll", function() {

        let currentSection = "";

        sectionsForNav.forEach(function(section) {

            const sectionTop =
                section.offsetTop - 150;

            if (window.scrollY >= sectionTop) {

                currentSection =
                    section.getAttribute("id");

            }

        });


        navLinks.forEach(function(link) {

            link.classList.remove("active");

            if (
                link.getAttribute("href") ===
                "#" + currentSection
            ) {

                link.classList.add("active");

            }

        });

    });


    // =====================================
    // BACK TO TOP
    // =====================================

    const backToTop =
        document.getElementById("backToTop");


    window.addEventListener("scroll", function() {

        if (window.scrollY > 400) {

            backToTop.style.display = "block";

        } else {

            backToTop.style.display = "none";

        }

    });


    backToTop.addEventListener("click", function() {

        window.scrollTo({

            top: 0,

            behavior: "smooth"

        });

    });


    // =====================================
    // 3D LETTER HOVER EFFECT
    // =====================================

    const interactiveHeadings =
        document.querySelectorAll(
            ".about h1, .education h2, .skills h2, .projects h2, .experience h2, .contact h2"
        );


    interactiveHeadings.forEach(function(heading) {

        const text = heading.textContent;

        heading.innerHTML = "";


        [...text].forEach(function(letter) {

            const span =
                document.createElement("span");

            span.classList.add("hover-letter");

            span.textContent =
                letter === " " ?
                "\u00A0" :
                letter;

            heading.appendChild(span);

        });

    });

});