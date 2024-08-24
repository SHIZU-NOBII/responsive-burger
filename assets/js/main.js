/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu')
      navClose = document.getElementById('nav-close'),
      navToggle = document.getElementById('nav-toggle')

// SHOW MENU
if (navToggle) {
    navToggle.addEventListener('click', ()=>{
        navMenu.classList.add('show-menu')
    })
}

// CLOSE MENU
if (navClose) {
    navClose.addEventListener('click', ()=>{
        navMenu.classList.remove('show-menu')
    })
}

/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll('.nav-link')

const linkAction = ()=>{
    const navMenu = document.getElementById('nav-menu')

    navMenu.classList.remove('show-menu')
}

navLink.forEach(n =>n.addEventListener('click', linkAction))

/*=============== ADD SHADOW HEADER ===============*/
 const shadowHeader = ()=>{
        const header = document.getElementById('header')

        this.scrollY >= 50 ? header.classList.add('shadow-header')
                           : header.classList.remove('shadow-header')
 }

 window.addEventListener('scroll' , shadowHeader)

/*=============== SHOW SCROLL UP ===============*/ 
const scroolUp = ()=>{
    const scroolBar = document.getElementById('scroll-up')

    this.scrollY >= 350  ? scroolBar.classList.add('show-scroll')
                        : scroolBar.classList.remove('show-scroll')
}

window.addEventListener('scroll', scroolUp)

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/


/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
    origin: 'top',
    distance : '60px',
    duration: 2500,
    delay: 300,
})

sr.reveal('.home-data, .footer')
sr.reveal('.home-dish', {delay:500, distance: '100px', origin: 'bottom'})
sr.reveal('.home-burger', {delay:1200, distance:'100px', duration: 1500})
sr.reveal('. .home-ingrediants', {delay: 1600, interval: 100})
sr.reveal('.recipe-img,  .delivery-image, .contact-img', {origin: 'left'})
sr.reveal('.recipe-data, .delivery-data, .content-data', {origin: 'right'})
sr.reveal('.popular-card', {interval: 100})