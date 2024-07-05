document.addEventListener("DOMContentLoaded", function() {
    
    // Revealing sections on scroll

    window.addEventListener('scroll', reveal);

    function reveal(){
        var reveals = document.querySelectorAll('.reveal');

        for (var i = 0; i < reveals.length; i++){
            var windowHeight = window.innerHeight;
            var revealTop = reveals[i].getBoundingClientRect().top;
            var revealpoint = 150;

            if (revealTop < windowHeight - revealpoint){
                reveals[i].classList.add('active');
            } else {
                reveals[i].classList.remove('active');
            }
        }
    }
        
    // Toggle menu

    var sidemenuid = document.getElementById("sidemenu");
    var menuBtn = document.getElementById("menuBtn");  

    function toggleMenu() {
        if (sidemenuid.style.right === "0px") {
            sidemenuid.style.right = "-200px";
            menuBtn.src = "Assests/bars-solid.svg"; 
        } else {
            sidemenuid.style.right = "0px";
            menuBtn.src = "Assests/xmark-solid.svg";
        }
    }
    
    menuBtn.addEventListener("click", toggleMenu);

    // Smooth scrolling function

    document.querySelectorAll('.header ul li a').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();

            const targetId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);

            window.scrollTo({
                top: targetSection.offsetTop - document.querySelector('.header').offsetHeight,
                behavior: 'smooth'
            });

            document.querySelectorAll('.header ul li a').forEach(link => {
                link.classList.remove('active');
            });
            this.classList.add('active');
        });
    });

    // Navbar active link highlighting on scroll

    window.addEventListener('scroll', () => {
        let fromTop = window.scrollY + window.innerHeight / 2; 

        let activeLinkFound = false;

        document.querySelectorAll('.header ul li a').forEach(link => {
            let section = document.getElementById(link.getAttribute('href').substring(1));

            if (!activeLinkFound && section.offsetTop <= fromTop && section.offsetTop + section.offsetHeight > fromTop) {
                document.querySelectorAll('.header ul li a').forEach(link => {
                    link.classList.remove('active');
                });
                link.classList.add('active');
                activeLinkFound = true;
            } else {
                link.classList.remove('active');
            }
        });
        document.getElementById('sidemenu').style.right = '-200px';
        document.getElementById('menuBtn').src = 'Assests/bars-solid.svg';
    });

    // Filtering portfolio categories

    const buttons = document.querySelectorAll('.category-button');
    const portfolioItems = document.querySelectorAll('.work');

    buttons.forEach(button => {
        button.addEventListener('click', function() {
            const category = button.getAttribute('data-category');
            filterPortfolio(category);
            setActiveButton(button);
        });
    });

    function filterPortfolio(category) {
        portfolioItems.forEach(item => {
            const itemCategory = item.getAttribute('data-category');
            if (category === 'all' || itemCategory === category) {
                item.style.display = 'block';
            } else {
                item.style.display = 'none';
            }
        });
    }

    function setActiveButton(activeButton) {
        buttons.forEach(button => {
            button.classList.remove('active');
        });
        activeButton.classList.add('active');
    }

    // Handling overlay for project details

    document.getElementById("element1").addEventListener("click", function() {
        openOverlay("Project1.html");
    });

    document.getElementById("element2").addEventListener("click", function() {
        openOverlay("Project2.html");
    });

    document.getElementById("element3").addEventListener("click", function() {
        openOverlay("Project3.html");
    });

    document.getElementById("element4").addEventListener("click", function() {
        openOverlay("Project4.html");
    });

    document.getElementById("element5").addEventListener("click", function() {
        openOverlay("Project5.html");
    });

    document.getElementById("element6").addEventListener("click", function() {
        openOverlay("Project6.html");
    });

    document.getElementById("element7").addEventListener("click", function() {
        openOverlay("Project7.html");
    });

    document.getElementById("element8").addEventListener("click", function() {
        openOverlay("Project8.html");
    });

    document.getElementById("overlay").addEventListener("click", function(event) {
        if (event.target === document.getElementById("overlay")) {
            closeOverlay();
        }
    });

    document.getElementById("close").addEventListener("click", function() {
        closeOverlay();
    });

    function openOverlay(page) {
        document.getElementById("overlay").style.display = "block";
        document.getElementById("overlay-box").style.display = "block";
        document.getElementById("overlay-iframe").src = page;
    }

    function closeOverlay() {
        document.getElementById("overlay").style.display = "none";
        document.getElementById("overlay-box").style.display = "none";
        document.getElementById("overlay-iframe").src = "";
    }
});
