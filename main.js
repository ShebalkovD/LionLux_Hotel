//Паралакс анимация шапки

const nav = document.querySelector('.nav');
const scrollTrigger = document.querySelector('.scrolltrigger');
const options={
    rootMargin: "-100px"
}
const navObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if(!entry.isIntersecting){
            nav.classList.add('nav-light')
        }else{
            nav.classList.remove('nav-light')
        }
    })
}, options)

navObserver.observe(scrollTrigger)

//Меню услуг

const btnServices = document.querySelectorAll('.btn_services');
const menuServices = document.querySelector('.services_menu');
const shadow = document.querySelector('.shadow');
const body = document.querySelector('body');


btnServices.forEach(el => {
    el.onclick = () => {
        menuServices.classList.toggle('services_menu-active');
        shadow.classList.toggle('shadow-active');
        body.classList.toggle('noscroll');
    }
})

shadow.onclick = () => {
    menuServices.classList.remove('services_menu-active');
    shadow.classList.remove('shadow-active');
    body.classList.remove('noscroll');
}