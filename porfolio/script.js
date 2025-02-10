//Ajoute une classe au header pour le differencer lors du scroll

const scrollHeader = () =>{
    const header = document.getElementById('header')
    this.scrollY >= 50 ? header.classList.add('scroll-header') 
                       : header.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)

//fin

//Modal cv formation

const modalViews = document.querySelectorAll('.services__modal'),
      modalBtns = document.querySelectorAll('.services__button'),
      modalClose = document.querySelectorAll('.services__modal-close')

let modal = function(modalClick){
    modalViews[modalClick].classList.add('active-modal')
}

modalBtns.forEach((mb, i) =>{
    mb.addEventListener('click', () =>{
        modal(i)
    })
})

modalClose.forEach((mc) =>{
    mc.addEventListener('click', () =>{
        modalViews.forEach((mv) =>{
            mv.classList.remove('active-modal')
        })
    })
})

//fin


//Modal CV pro

const modalViews2 = document.querySelectorAll('.work__modal'),
      modalBtns2 = document.querySelectorAll('.work__button-modal'),
      modalClose2 = document.querySelectorAll('.work__modal-close')

let modal2 = function(modalClick){
    modalViews2[modalClick].classList.add('work__active-modal')
}

modalBtns2.forEach((mb, i) =>{
    mb.addEventListener('click', () =>{
        modal2(i)
    })
})

modalClose2.forEach((mc) =>{
    mc.addEventListener('click', () =>{
        modalViews2.forEach((mv) =>{
            mv.classList.remove('work__active-modal')
        })
    })
})

//fin

//Filtre CV

let mixerPortfolio = mixitup('.work__container', {
    selectors: {
        target: '.work__card'
    },
    animation: {
        duration: 300
    }
});

const linkWork = document.querySelectorAll('.work__item')

function activeWork(){
    linkWork.forEach(l=> l.classList.remove('active-work'))
    this.classList.add('active-work')
}

linkWork.forEach(l=> l.addEventListener('click', activeWork))



//fin

//Animation menu

const sections = document.querySelectorAll('section[id]')
    
const scrollActive = () =>{
  	const scrollY = window.pageYOffset

	sections.forEach(current =>{
		const sectionHeight = current.offsetHeight,
			  sectionTop = current.offsetTop - 58,
			  sectionId = current.getAttribute('id'),
			  sectionsClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']')

		if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
			sectionsClass.classList.add('active-link')
		}else{
			sectionsClass.classList.remove('active-link')
		}                                                    
	})
}
window.addEventListener('scroll', scrollActive)

//fin

//Bouton changement de theme

const themeButton = document.getElementById('theme-button')
const lightTheme = 'light-theme'
const iconTheme = 'bx-sun'

const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')


const getCurrentTheme = () => document.body.classList.contains(lightTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'bx bx-moon' : 'bx bx-sun'

if (selectedTheme) {
  document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](lightTheme)
  themeButton.classList[selectedIcon === 'bx bx-moon' ? 'add' : 'remove'](iconTheme)
}

themeButton.addEventListener('click', () => {
    document.body.classList.toggle(lightTheme)
    themeButton.classList.toggle(iconTheme)
    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
})

//fin


//Scroll Reveal

const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    delay: 10,
})

sr.reveal('.home__data')
sr.reveal('.home__handle', {delay: 100})
sr.reveal('.home__social, .home__scroll', {delay: 900, origin: 'bottom'})

//fin

//Filtre Portfolio


let mixerPortfolio2 = mixitup('.services__container', {
    selectors: {
        target: '.services__card'
    },
    animation: {
        duration: 300
    }
});

const linkWork2 = document.querySelectorAll('.title2')

function activeServices(){
    linkWork2.forEach(l=> l.classList.remove('active-services'))
    this.classList.add('active-services')
}

linkWork2.forEach(l=> l.addEventListener('click', activeServices))

//fin

//Formulaire de contact

var frmvalidator  = new Validator("contactform");
        frmvalidator.addValidation("nom","req","Please provide your name");
        frmvalidator.addValidation("mail","req","Please provide your email");
        frmvalidator.addValidation("mail","mail",
          "Please enter a valid email address");

//fin