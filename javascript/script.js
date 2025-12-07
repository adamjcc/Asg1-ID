document.addEventListener("DOMContentLoaded", function () {
    const body = document.body;
    const header = document.querySelector(".site-header");
    if (!header) return;

    //! HOME PAGE
    if (body.classList.contains("home-page")) {
        const hero = document.querySelector(".hero-home");
        if (hero) {
            function toggleHomeHeader() {
                const heroBottom = hero.getBoundingClientRect().bottom;
                if (heroBottom <= 0) {
                    header.classList.remove("header-hidden");
                } else {
                    header.classList.add("header-hidden");
                }
            }
            toggleHomeHeader();
            window.addEventListener("scroll", toggleHomeHeader);
        }

        //! VIDEO PLAYER
        const videoPlayer = document.getElementById("video-player");
        const prevBtn = document.getElementById("prevBtn");
        const nextBtn = document.getElementById("nextBtn");
        const dots = document.querySelectorAll(".video-dot");

        if (videoPlayer && prevBtn && nextBtn && dots.length) {
            const videos = [
                {
                    src: "https://www.youtube.com/embed/QJO3ROT-A4E",
                    title: "One Direction - What Makes You Beautiful (Music Video)",
                },
                {
                    src: "https://www.youtube.com/embed/W-TE_Ys4iwM",
                    title: "One Direction - Story of My Life (Music Video)",
                },
                {
                    src: "https://www.youtube.com/embed/syFZfO_wfMQ",
                    title: "One Direction - Night Changes (Music Video)",
                },
            ];

            let currentIndex = 0;

            function showVideo(index) {
                const total = videos.length;
                // wrap around nicely
                currentIndex = (index + total) % total;

                const currentVideo = videos[currentIndex];
                videoPlayer.src = currentVideo.src;
                videoPlayer.title = currentVideo.title;

                dots.forEach((dot, i) => {
                    dot.classList.toggle("active", i === currentIndex);
                });
            }

            // arrow buttons
            prevBtn.addEventListener("click", () => {
                showVideo(currentIndex - 1);
            });

            nextBtn.addEventListener("click", () => {
                showVideo(currentIndex + 1);
            });

            // dot buttons
            dots.forEach((dot) => {
                dot.addEventListener("click", () => {
                    const index = Number(dot.dataset.index);
                    showVideo(index);
                });
            });

            // make sure dots match the initial video
            showVideo(0);
        }
    }


    //! BAND PAGE
    if (body.classList.contains("band-page")) {
        const bandHero = document.querySelector(".hero-band");
        if (bandHero) {
            function toggleBandHeader() {
                const heroBottom = bandHero.getBoundingClientRect().bottom;
                if (heroBottom <= 0) {
                    header.classList.add("header-solid");   // solid bar
                } else {
                    header.classList.remove("header-solid"); // transparent over image
                }
            }
            toggleBandHeader();
            window.addEventListener("scroll", toggleBandHeader);
        }
    }

    //! TOUR PAGE
    if (body.classList.contains("tour-page")) {
        const tourHero = document.querySelector(".hero-tour");
        if (tourHero) {
            function toggleTourHeader() {
                const heroBottom = tourHero.getBoundingClientRect().bottom;
                if (heroBottom <= 0) {
                    header.classList.add("header-solid");   // solid bar
                } else {
                    header.classList.remove("header-solid"); // transparent over image
                }
            }
            toggleTourHeader();
            window.addEventListener("scroll", toggleTourHeader);
        }
    }

    //! BOOKING PAGE
    if (body.classList.contains("booking-page")) {
        const bookingHero = document.querySelector(".hero-booking");
        if (bookingHero) {
            function toggleBookingHeader() {
                const heroBottom = bookingHero.getBoundingClientRect().bottom;
                if (heroBottom <= 0) {
                    header.classList.add("header-solid");   // solid bar
                } else {
                    header.classList.remove("header-solid"); // transparent over image
                }
            }
            toggleBookingHeader();
            window.addEventListener("scroll", toggleBookingHeader);
        }
    }

    //! MOBILE MENU
    const menuToggle = document.querySelector(".menu-toggle");
    const mobileMenu = document.querySelector(".mobile-menu");
    const menuClose = document.querySelector(".menu-close");
    const mobileLinks = document.querySelectorAll(".mobile-nav a");

    if (menuToggle && mobileMenu) {
        const openMenu = () => {
            mobileMenu.classList.add("is-open");
            document.body.classList.add("menu-open");
            mobileMenu.setAttribute("aria-hidden", "false");
        };

        const closeMenu = () => {
            mobileMenu.classList.remove("is-open");
            document.body.classList.remove("menu-open");
            mobileMenu.setAttribute("aria-hidden", "true");
        };

        menuToggle.addEventListener("click", openMenu);
        if (menuClose) {
            menuClose.addEventListener("click", closeMenu);
        }

        mobileMenu.addEventListener("click", (event) => {
            if (event.target === mobileMenu) {
                closeMenu();
            }
        });

        mobileLinks.forEach((link) => {
            link.addEventListener("click", closeMenu);
        });

        document.addEventListener("keydown", (event) => {
            if (event.key === "Escape") {
                closeMenu();
            }
        });
    }
});


//! GALLERY FILTER
document.addEventListener("DOMContentLoaded", () => {
    const filterSelect = document.querySelector("#galleryfilter");
    const galleryItems = document.querySelectorAll(".gallery-item");

    if (!filterSelect || !galleryItems.length) return;

    filterSelect.addEventListener("change", () => {
        const value = filterSelect.value; // "all", "live", "studio"

        galleryItems.forEach((item) => {
            const type = item.dataset.type; // from data-type="live" / "studio"

            if (value === "all" || type === value) {
                item.style.display = "";
            } else {
                item.style.display = "none";
            }
        });
    });
});

//! MOBILE MENU TOGGLE
document.addEventListener("DOMContentLoaded", () => {
    const body = document.body;
    const menuToggle = document.querySelector(".menu-toggle");
    const mobileMenu = document.querySelector(".mobile-menu");
    const menuClose = document.querySelector(".menu-close");
    const mobileLinks = document.querySelectorAll(".mobile-nav-link");

    if (!menuToggle || !mobileMenu) return;

    const openMenu = () => {
        mobileMenu.classList.add("open");
        body.classList.add("menu-open");
    };

    const closeMenu = () => {
        mobileMenu.classList.remove("open");
        body.classList.remove("menu-open");
    };

    menuToggle.addEventListener("click", openMenu);

    if (menuClose) {
        menuClose.addEventListener("click", closeMenu);
    }

    mobileMenu.addEventListener("click", (event) => {
        if (event.target === mobileMenu) {
            closeMenu();
        }
    });

    mobileLinks.forEach((link) => {
        link.addEventListener("click", closeMenu);
    });

    document.addEventListener("keydown", (event) => {
        if (event.key === "Escape") {
            closeMenu();
        }
    });
});
