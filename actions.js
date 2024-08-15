document.addEventListener("DOMContentLoaded", function() {
    const showButtons = document.querySelectorAll(".showListButton");

    showButtons.forEach(button => {
        button.addEventListener("click", function() {
            const details = this.nextElementSibling;

            const isVisible = window.getComputedStyle(details).getPropertyValue('opacity') !== '0';

            if (isVisible) {
                details.style.opacity = '0';
                setTimeout(() => {
                    details.style.display = 'none'; 
                }, 2000); 
            } else {
                details.style.display = 'block';
                setTimeout(() => {
                    details.style.opacity = '1';
                }, 100);
            }
        });
    });
});