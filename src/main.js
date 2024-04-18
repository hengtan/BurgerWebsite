const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');
const closeIcon = document.getElementById('nav-close');
const navLink = document.querySelectorAll('.nav__link');

navLink.forEach(link => {
  link.addEventListener('click', () => {
    navMenu.classList.add('hidden');
  })
})

closeIcon.addEventListener('click', () => {  
  navMenu.classList.add('hidden');
})

hamburger.addEventListener('click', () => {  
  navMenu.classList.remove("hidden");
  
})

const tabs = document.querySelectorAll(".tabs_wrap ul li");
const all = document.querySelectorAll(".item_wrap");
const foods = document.querySelectorAll(".food");
const beverages = document.querySelectorAll(".beverage");
const snacks = document.querySelectorAll(".snack");

tabs.forEach(tab => {
  tab.addEventListener("click", () => {
    tabs.forEach(tab => {
      tab.classList.remove("active")      
    })    

    tab.classList.add('active');

    const tabVal = tab.getAttribute("data-tabs");
   
    all.forEach(item => {
      item.style.display = "none";
    })

    if (tabVal == 'food') {
    // alert('food')
      foods.forEach(item => {
        item.style.display = "block";
    })
    } else if (tabVal == "snack") {
      snacks.forEach(item => {
        item.style.display = "block";
      })
    } else if (tabVal == "beverage") {
      beverages.forEach(item => {
        item.style.display = "block";
      })
    } else {
      all.forEach(item => {
        item.style.display = "block";
      })
    }
  })
})

const html = document.querySelector('html');
const themeBtn = document.getElementById('theme-toggle');

if(localStorage.getItem('mode') === 'dark'){
  darkMode();
}

themeBtn.addEventListener('click', (e) => {
  if(localStorage.getItem('mode') === 'light'){
    darkMode();
  }else{
    lightMode();
  }
})

function darkMode () {  
  html.classList.add('dark');
  themeBtn.classList.replace("ri-moon-line", "ri-sun-line");
  localStorage.setItem('mode', 'dark');
}

function lightMode () {
  html.classList.remove('dark');
  themeBtn.classList.replace("ri-sun-line", "ri-moon-line");
  localStorage.setItem('mode', 'light');
}

const scrollUp = () => {
  const scrollUPBtn = document.getElementById('scroll-up');
  if(this.scrollY >= 250){
    scrollUPBtn.classList.remove("-bottom-1/2");
    scrollUPBtn.classList.add("bottom-4");
  }
  else{
    scrollUPBtn.classList.add("-bottom-1/2");
    scrollUPBtn.classList.remove("bottom-4");
  }
}
window.addEventListener('scroll', scrollUp);

const scrollHeader = () => {
  const header = document.getElementById('header');
  
  if(this.scrollY >= 50){    
    header.classList.add("border-b","border-secondaryColor");    
  }
  else{
    header.classList.remove("border-b","border-secondaryColor");    
  }
}
window.addEventListener('scroll', scrollHeader);

const activeLink = () => { 
  const sections = document.querySelectorAll('section');
  const navLinks = document.querySelectorAll('.nav__link');

  let current = "home";
  
  sections.forEach((section) => {
    const sectiontop = section.offsetTop;

    if(this.scrollY >= sectiontop - 60){
      current = section.getAttribute('id');
    }
  });
  navLinks.forEach((item) => {
    item.classList.remove('text-secondaryColor');
    if(item.href.includes(current)){
      item.classList.add('text-secondaryColor');
    }
  })
  navMenu.classList.remove("hidden");
}
window.addEventListener('scroll', activeLink);



const sr = ScrollReveal({
  origin: 'top',
  distance: '60px',
  duration: 2500,
  delay: 400,
})

sr.reveal('.home__image', {});
sr.reveal('.home__content', {origin: "bottom", delay: 300});
sr.reveal('.category__card', {delay: 200});

sr.reveal('.promo_card-1', {origin:'left', delay: 200});
sr.reveal('.promo_card-2', {origin:'right', delay: 200});

sr.reveal('.about__img', {origin:'bottom', delay: 200});
sr.reveal('.about__content', {origin:'top', delay: 200});

sr.reveal('.menu__items', {origin:'left', delay: 200});

sr.reveal('.customer__review', {origin:'right', delay: 200});

sr.reveal('.footer');
