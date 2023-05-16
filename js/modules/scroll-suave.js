export  default function initScrollSuave() {
    const linksInternos = document.querySelectorAll("[data-menu='suave'] a[href^='#'");
    
    function scrollToSection(evento) {
        evento.preventDefault();
        const href = evento.currentTarget.getAttribute('href');
        const section = document.querySelector(href);
        const topo = section.offsetTop;
        window.scrollTo({
            top: topo,
            behavior: 'smooth',
            block: 'start',
        })
    }
    
    linksInternos.forEach((link)=>{
        link.addEventListener('click', scrollToSection);
    });
    }
