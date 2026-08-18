/* =========================================
   PROFESSOR PLUMB NI
   JAVASCRIPT
========================================= */


/* =========================================
   MOBILE MENU
========================================= */

const mobileMenu =
    document.getElementById("mobileMenu");

const mobileNav =
    document.getElementById("mobileNav");


mobileMenu.addEventListener("click", () => {

    mobileNav.classList.toggle("active");


    const icon =
        mobileMenu.querySelector("i");


    if (mobileNav.classList.contains("active")) {

        icon.classList.remove("fa-bars");

        icon.classList.add("fa-xmark");

    } else {

        icon.classList.remove("fa-xmark");

        icon.classList.add("fa-bars");

    }

});


/* Close mobile menu after clicking link */

document.querySelectorAll(".mobile-nav a")
    .forEach(link => {

        link.addEventListener("click", () => {

            mobileNav.classList.remove("active");

            const icon =
                mobileMenu.querySelector("i");

            icon.classList.remove("fa-xmark");

            icon.classList.add("fa-bars");

        });

    });



/* =========================================
   SCROLL REVEAL
========================================= */

const revealElements =
    document.querySelectorAll(".reveal");


const revealObserver =
    new IntersectionObserver(

        (entries, observer) => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.classList.add("visible");

                    observer.unobserve(entry.target);

                }

            });

        },

        {
            threshold: 0.12
        }

    );


revealElements.forEach(element => {

    revealObserver.observe(element);

});



/* =========================================
   NAVBAR SCROLL EFFECT
========================================= */

const navbar =
    document.querySelector(".navbar");


window.addEventListener("scroll", () => {

    if (window.scrollY > 80) {

        navbar.style.background =
            "rgba(10,10,10,.98)";

    } else {

        navbar.style.background =
            "rgba(16,16,16,.94)";

    }

});



/* =========================================
   FORM SUBMISSION
========================================= */

const quoteForm =
    document.getElementById("quoteForm");


if (quoteForm) {

    quoteForm.addEventListener("submit", () => {

        const button =
            quoteForm.querySelector(".submit-button");


        button.innerHTML = `
            
            Sending enquiry...

            <span>
                <i class="fa-solid fa-spinner fa-spin"></i>
            </span>

        `;


        button.style.opacity = ".7";

    });

}



/* =========================================
   SMOOTH ANCHOR SCROLLING
========================================= */

document.querySelectorAll('a[href^="#"]')
    .forEach(anchor => {

        anchor.addEventListener("click", function(event) {

            const target =
                document.querySelector(this.getAttribute("href"));


            if (target) {

                event.preventDefault();


                target.scrollIntoView({

                    behavior: "smooth",

                    block: "start"

                });

            }

        });

    });



/* =========================================
   PARALLAX HERO
========================================= */

const heroImage =
    document.querySelector(".hero-image img");


window.addEventListener("scroll", () => {

    if (!heroImage) return;


    const scroll =
        window.scrollY;


    if (scroll < window.innerHeight) {

        heroImage.style.transform =
            `translateY(${scroll * 0.12}px) scale(1.01)`;

    }

});