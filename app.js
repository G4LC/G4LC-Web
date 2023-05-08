const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav  = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li')

    burger.addEventListener('click',()=>{
        nav.classList.toggle('nav-active')
    });
    //Animate
    navLinks.forEach((link, index)=>{
       link.style.animation =  `navLinkFade 0.5s ease fowards ${index / 7 + 0.3}s`
    });
}

navSlide();