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

const elToAnimate = document.querySelectorAll('.scroll_animation');
const scrollObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if(entry.isIntersecting){
            entry.target.classList.toggle('scroll_animation-active');
            scrollObserver.unobserve(entry.target);
        }
    })
    }, {  
        threshold: 0.2,
        
    }
)



elToAnimate.forEach(el => {
    scrollObserver.observe(el);
})


//Меню услуг

const btnServices = document.querySelectorAll('.btn_services');
const menuServices = document.querySelector('.services_menu');
const shadow = document.querySelector('.shadow');
const body = document.querySelector('body');


btnServices.forEach(el => {
    el.onclick = () => {
        menuServices.classList.add('services_menu-active');
        shadow.classList.add('shadow-active');
        body.classList.add('noscroll');
    }
})

shadow.onclick = () => {
    menuServices.classList.remove('services_menu-active');
    shadow.classList.remove('shadow-active');
    body.classList.remove('noscroll');
    mobileMenu.classList.remove('mobile_menu-active');

}

//Мобильное меню

const mobileMenuBtn = document.querySelector("#burger-btn");
const mobileMenu = document.querySelector(".mobile_menu");
const mobileSubMenu = document.querySelector(".mobile_submenu");
const mobileMenuCloseBtn = document.querySelector('.close');
const catalogBtn = document.querySelector('#catalogBtnMobile');
const catalogCloseBtn = document.querySelector('.mobile_submenu_top-back');
const catalogSidebarItem = document.querySelectorAll('.mobile_submenu_inner_sidebar-item');

mobileMenuBtn.onclick = () => {
    mobileMenu.classList.add('mobile_menu-active');
    shadow.classList.add('shadow-active');
    body.classList.add('noscroll');
    
}

mobileMenuCloseBtn.onclick = () => {
    mobileMenu.classList.remove('mobile_menu-catalogmode');
    mobileMenu.classList.remove('mobile_menu-active');
   
    shadow.classList.remove('shadow-active');
    body.classList.remove('noscroll');
}

catalogBtn.onclick = () => {
    mobileSubMenu.classList.add('mobile_submenu-active');
}

catalogCloseBtn.onclick = () => {
    mobileSubMenu.classList.remove('mobile_submenu-active');
}

catalogSidebarItem.forEach(el => {
    el.onclick = () => {
        catalogSidebarItem.forEach(el => {
            if(el.classList.contains('mobile_submenu_inner_sidebar-item-active')){
                el.classList.remove('mobile_submenu_inner_sidebar-item-active') 
            }
        })
        el.classList.add('mobile_submenu_inner_sidebar-item-active');
        
    }
})

