// =========================================
// RWANYANGWE HIGH SCHOOL WEBSITE
// =========================================


// =========================================
// ANNOUNCEMENT POPUP
// =========================================

document.addEventListener("DOMContentLoaded", function () {

    const popup = document.getElementById("announcementPopup");
    const closeButton = document.getElementById("closeAnnouncement");

    if (popup && closeButton) {

        // Show announcement after 1 second
        setTimeout(function () {
            popup.style.display = "flex";
        }, 1000);

        // Close announcement
        closeButton.addEventListener("click", function () {
            popup.style.display = "none";
        });

        // Close when clicking outside the box
        popup.addEventListener("click", function (event) {

            if (event.target === popup) {
                popup.style.display = "none";
            }

        });

    }


    // =========================================
    // MOBILE NAVIGATION
    // =========================================

    const menuButton = document.getElementById("menuButton");
    const mainNav = document.getElementById("mainNav");

    if (menuButton && mainNav) {

        // Open and close menu
        menuButton.addEventListener("click", function () {

            mainNav.classList.toggle("show");

        });


        // Close menu after clicking a link
        const navLinks = mainNav.querySelectorAll("a");

        navLinks.forEach(function (link) {

            link.addEventListener("click", function () {

                mainNav.classList.remove("show");

            });

        });

    }

});

