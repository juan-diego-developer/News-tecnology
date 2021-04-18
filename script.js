
// scritp pag main
document.querySelector(".menu-btn").addEventListener("click", () => {
    document.querySelector(".nav-menu").classList.toggle("show");
});


ScrollReveal().reveal('.showcase');
ScrollReveal().reveal(".news-cards-1", { delay: 500 });
ScrollReveal().reveal(".news-cards-2", { delay: 600 });
ScrollReveal().reveal(".news-cards-3", { delay: 700 });
ScrollReveal().reveal(".news-cards-4", { delay: 800 });
ScrollReveal().reveal(".news-cards-5", { delay: 900 });
ScrollReveal().reveal(".news-cards-6", { delay: 1000 });
ScrollReveal().reveal(".grid-container-two", { delay: 700 });


// script acordion
const accordion = document.getElementsByClassName('contentBx');
        const content = document.getElementsByClassName('content-0');

            // console.log('accordion')
            
        for (let i = 0; i < accordion.length; i++ ) {
            accordion[i].addEventListener('click', () => {
                content.item(i).classList.toggle("active");
            });
        };
