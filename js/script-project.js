let slideIndex = 1;
        let timer;

        function showSlides(n) {
            let slides = document.getElementsByClassName("mySlides");
            let buttons = document.getElementsByClassName("manual-btn");

            if (n > slides.length) {
                slideIndex = 1;
            } else if (n < 1) {
                slideIndex = slides.length;
            }

            for (let i = 0; i < slides.length; i++) {
                slides[i].style.display = "none";
            }

            for (let i = 0; i < buttons.length; i++) {
                buttons[i].classList.remove("active");
            }

            slides[slideIndex - 1].style.display = "block";
            buttons[slideIndex - 1].classList.add("active");

            clearTimeout(timer);
            timer = setTimeout(() => { plusSlides(1); }, 2500); 
        }

        function plusSlides(n) {
            showSlides(slideIndex += n);
        }

        function currentSlide(n) {
            showSlides(slideIndex = n);
        }

        showSlides(slideIndex);