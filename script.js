// =====================================
// PORTFOLIO JAVASCRIPT
// =====================================

document.addEventListener("DOMContentLoaded", function() {


    // =====================================
    // WELCOME SCREEN
    // =====================================

    const welcomeScreen =
        document.getElementById("welcome-screen");

    const enterPortfolio =
        document.getElementById("enter-portfolio");


    // =====================================
    // TYPING EFFECT
    // =====================================

    const typingText =
        document.getElementById("typing-text");

    const text =
        "Aspiring Software Engineer";

    let i = 0;


    function startTyping() {

        typingText.textContent = "";

        i = 0;


        function typeWriter() {

            if (i < text.length) {

                typingText.textContent +=
                    text.charAt(i);

                i++;

                setTimeout(typeWriter, 100);

            }

        }

        typeWriter();

    }


    // =====================================
    // ENTER PORTFOLIO
    // =====================================

    if (enterPortfolio) {

        enterPortfolio.addEventListener(
            "click",
            function() {

                welcomeScreen.classList.add("hide");


                setTimeout(
                    function() {

                        startTyping();

                    },
                    500
                );

            }
        );

    }


    // =====================================
    // MOBILE MENU
    // =====================================

    const mobileMenuBtn =
        document.getElementById("mobileMenuBtn");

    const navMenu =
        document.getElementById("navMenu");


    if (mobileMenuBtn && navMenu) {

        mobileMenuBtn.addEventListener(
            "click",
            function() {

                navMenu.classList.toggle(
                    "mobile-open"
                );


                const icon =
                    mobileMenuBtn.querySelector("i");


                if (
                    navMenu.classList.contains(
                        "mobile-open"
                    )
                ) {

                    icon.classList.remove(
                        "fa-bars"
                    );

                    icon.classList.add(
                        "fa-xmark"
                    );

                } else {

                    icon.classList.remove(
                        "fa-xmark"
                    );

                    icon.classList.add(
                        "fa-bars"
                    );

                }

            }
        );


        // Close menu after clicking a link

        navMenu
            .querySelectorAll("a")
            .forEach(function(link) {

                link.addEventListener(
                    "click",
                    function() {

                        navMenu.classList.remove(
                            "mobile-open"
                        );


                        const icon =
                            mobileMenuBtn.querySelector(
                                "i"
                            );


                        icon.classList.remove(
                            "fa-xmark"
                        );

                        icon.classList.add(
                            "fa-bars"
                        );

                    }
                );

            });

    }


    // =====================================
    // SMOOTH SCROLLING
    // =====================================

    document
        .querySelectorAll("nav a")
        .forEach(function(link) {

            link.addEventListener(
                "click",
                function(event) {

                    event.preventDefault();


                    const target =
                        document.querySelector(
                            this.getAttribute("href")
                        );


                    if (target) {

                        target.scrollIntoView({

                            behavior: "smooth",

                            block: "start"

                        });

                    }

                }
            );

        });


    // =====================================
    // SCROLL REVEAL
    // =====================================

    const sections =
        document.querySelectorAll("section");


    const observer =
        new IntersectionObserver(

            function(entries) {

                entries.forEach(
                    function(entry) {

                        if (
                            entry.isIntersecting
                        ) {

                            entry.target.classList.add(
                                "show"
                            );

                        }

                    }
                );

            },

            {
                threshold: 0.15
            }

        );


    sections.forEach(
        function(section) {

            section.classList.add("hidden");

            observer.observe(section);

        }
    );


    // =====================================
    // ACTIVE NAVIGATION
    // =====================================

    const sectionsForNav =
        document.querySelectorAll(
            "section"
        );


    const navLinks =
        document.querySelectorAll(
            "nav ul li a"
        );


    window.addEventListener(
        "scroll",
        function() {

            let currentSection = "";


            sectionsForNav.forEach(
                function(section) {

                    const sectionTop =
                        section.offsetTop - 150;


                    if (
                        window.scrollY >=
                        sectionTop
                    ) {

                        currentSection =
                            section.getAttribute(
                                "id"
                            );

                    }

                }
            );


            navLinks.forEach(
                function(link) {

                    link.classList.remove(
                        "active"
                    );


                    if (
                        link.getAttribute(
                            "href"
                        ) ===
                        "#" + currentSection
                    ) {

                        link.classList.add(
                            "active"
                        );

                    }

                }
            );

        }
    );


    // =====================================
    // BACK TO TOP
    // =====================================

    const backToTop =
        document.getElementById(
            "backToTop"
        );


    if (backToTop) {

        window.addEventListener(
            "scroll",
            function() {

                if (
                    window.scrollY > 400
                ) {

                    backToTop.style.display =
                        "block";

                } else {

                    backToTop.style.display =
                        "none";

                }

            }
        );


        backToTop.addEventListener(
            "click",
            function() {

                window.scrollTo({

                    top: 0,

                    behavior: "smooth"

                });

            }
        );

    }


    // =====================================
    // 3D LETTER HOVER EFFECT
    // =====================================

    const interactiveHeadings =
        document.querySelectorAll(

            ".about h1, " +
            ".education h2, " +
            ".skills h2, " +
            ".projects-section h2, " +
            ".experience h2, " +
            ".contact h2"

        );


    interactiveHeadings.forEach(
        function(heading) {


            // Prevent duplicate processing

            if (
                heading.querySelector(
                    ".hover-letter"
                )
            ) {

                return;

            }


            const headingText =
                heading.textContent.trim();


            heading.innerHTML = "";


            [...headingText].forEach(
                function(letter) {


                    const span =
                        document.createElement(
                            "span"
                        );


                    span.classList.add(
                        "hover-letter"
                    );


                    span.textContent =
                        letter === " " ?
                        "\u00A0" :
                        letter;


                    heading.appendChild(
                        span
                    );

                }
            );

        }
    );


});