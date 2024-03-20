// show menu
const navMenu = document.getElementById("nav-menu");
const navToggle = document.getElementById("nav-toggle");
const navClose = document.getElementById("nav-close");

if(navToggle) {
    navToggle.addEventListener("click", () => {
        navMenu.classList.add("show-menu");
    });
}

if (navClose) {
    navClose.addEventListener("click", () => {
        navMenu.classList.remove("show-menu");
    });
}

// remove menu mobile
const navLink = document.querySelectorAll(".nav__link");

const linkAction = () => {
    const navMenu = document.getElementById("nav-menu");
    // when we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove("show-menu");
}
navLink.forEach(n => n.addEventListener("click", linkAction));

// change background header
const blurHeader = () => {
    const header = document.getElementById("header");
    // when the scroll is greater than 50 viewport height, add the blur-header class to the header tag
    this.scrollY >= 50 ? header.classList.add("blur-header")
                        : header.classList.remove("blur-header");
}
window.addEventListener("scroll", blurHeader);

// EMAIL JS
const contactForm = document.getElementById("contact-form");
const contactMessage = document.getElementById("contact-message");

const sendEmail = (e) => {
    e.preventDefault();

    // serviceID - templateID - #form - publicKey
    emailjs.sendForm("service_458gvwq", "template_3x0ezr6", "#contact-form", "E7-jv6yi6bsim15zf")
        .then(() => {
            contactMessage.textContent = "Message sent successfully ✅";

            // remove message after 5 seconds
            setTimeout(() => {
               contactMessage.textContent = "";
            }, 5000);

            // clear input fields
            contactForm.reset();
        }, () => {
            // Show error message
            contactMessage.textContent = "Message not sent (service error) ❌";
        });
}

contactForm.addEventListener("submit", sendEmail)