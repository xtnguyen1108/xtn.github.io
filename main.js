window.onload = () => {
    setTimeout(() => {
        document.body.classList.remove("not-loaded");

        // Assign --word-index to each word span for delay effect
        document.querySelectorAll('.text-top-left .word, .text-bottom-right .word').forEach((word, index) => {
            word.style.setProperty('--word-index', index);
        });

    }, 1000); // Initial delay before starting animations
};
