document.addEventListener("DOMContentLoaded", function () {

    const form = document.getElementById("myform");

    form.addEventListener("submit", function (event) {

        event.preventDefault();

        const name = form.querySelector('input[type="text"]').value.trim();
        const email = form.querySelector('input[type="email"]').value.trim();
        const phone = form.querySelectorAll('input[type="text"]')[1].value.trim();
        const message = form.querySelector("textarea").value.trim();


        if (name === "") {
            alert("Please enter your name.");
            return;
        }

        if (email === "") {
            alert("Please enter your email.");
            return;
        }

        if (!email.includes("@")) {
            alert("Please enter a valid email address.");
            return;
        }

        if (phone.length < 10) {
            alert("Please enter a valid phone number.");
            return;
        }

        if (message === "") {
            alert("Please enter your message.");
            return;
        }

        alert("Thank you! Your message has been submitted successfully.");

        form.reset();

    });

});