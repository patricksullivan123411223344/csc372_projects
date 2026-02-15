/* Declare variables globally to avoid scope problems */
const questionButton = document.getElementById("toEmailForm");
const bookButtn = document.getElementById("toCalendlyBooker");
const bookSection = document.getElementById("bookingSection");
const emailSection = document.getElementById("contactSection");

/* DOM Event handler for Email Form button */
questionButton.addEventListener("click", () => {
    emailSection.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
    });
});

/* DOM Event handler for Session Booker buton */
bookButton.addEventListener("click", () => {
    bookingSection.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
    });
});