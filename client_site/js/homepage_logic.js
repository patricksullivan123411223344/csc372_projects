/*
Name: Patrick Sullivan
Date: Feb 8th 2026
File: homepage_logic.js
Description: Handles homepage interactivity. Implements CTA
button click to scroll to contact section by calliing each element by its
respective Id
*/

const heroCtaButton = document.getElementById('heroCtaButton');  // Select CTA button by id
const contactSection = document.getElementById('contactSection'); //Select contact section by id

//State and event when CTA button is clicked, contactSection is scrolled into view
heroCtaButton.addEventListener("click", () => {
    contactSection.scrollIntoView({ behavior: "smooth"});
});