const nav = document.querySelector('.nav');
const scrollTrigger = document.querySelector('.scrolltrigger');
const options={
    rootMargin: "-200px"
}
const navObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if(!entry.isIntersecting){
            nav.classList.add('nav-light')
            console.log('ok');
        }else{
            nav.classList.remove('nav-light')
        }
    })
}, options)

navObserver.observe(scrollTrigger)