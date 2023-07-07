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