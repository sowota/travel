const nav_menu = document.querySelector('.nav__menu')
const nav_toggle = document.querySelector('.nav__toggle')
const nav_close = document.querySelector('.nav__close')

if(nav_toggle){
    nav_toggle.addEventListener('click', ()=>{
        nav_menu.classList.toggle('show')
    })
}

if(nav_close){
    nav_close.addEventListener('click', ()=>{
        nav_menu.classList.toggle('show')
    })
}


const nav_link = document.querySelectorAll('.nav__link')

const link_action = () => {
    const nav_menu = document.querySelector('.nav__menu')
    nav_menu.classList.remove('show')
} 

nav_link.forEach(link =>{
    link.addEventListener('click', link_action)
})


// change header color by a scroll

function scroll_header () {
    const header = document.querySelector('.header')
    this.scrollY >= 100? header.classList.add('scroll'): header.classList.remove('scroll')
}
window.addEventListener('scroll', scroll_header)

// swiper

let swiper = new Swiper(".discover__container", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    loop:true,
    spaceBetween:32,
    coverflowEffect: {
      rotate: 0,
    },
  });


// Play video

const video_file = document.querySelector('#video-file')
const video_btn = document.querySelector('#video-button')
const video_icon = document.querySelector('#video-icon')

video_btn.addEventListener('click', () =>{
    if(video_file.paused){
        video_file.play()
        video_icon.classList.remove('ri-play-fill')
        video_icon.classList.add('ri-pause-line')
    }else{
        video_file.pause()
        video_icon.classList.add('ri-play-fill')
        video_icon.classList.remove('ri-pause-line')
    }

})

video_file.addEventListener('ended', ()=>{
    video_icon.classList.remove('ri-pause-line')
    video_icon.classList.add('ri-play-fill')
})

window.addEventListener('scroll', ()=>{
    const up = document.querySelector('.scroll-up')
    this.scrollY >= 200? up.classList.add('show') : up.classList.remove('show')
})


const nav_items = document.querySelectorAll('.nav__link')
const sections = document.querySelectorAll('section')
console.log(sections)


//Intersection Observer

const active_section = (section_id) =>{
    
    nav_items.forEach(nav => {
        if(nav.dataset.section === section_id ){
            nav.classList.add('active')
        }else{
            nav.classList.remove('active')
        }
    })
}

const section_watcher_callback = (sections, section_watcher) =>{
    sections.forEach(section =>{
        console.log(section)
        if(!section.isIntersecting){
            return
        }
        active_section(section.target.id)
    })
}

const section_watcher_options = {
    threshold:.6
}

const section_watcher = new IntersectionObserver(section_watcher_callback, section_watcher_options)

sections.forEach(section =>{
    section_watcher.observe(section)
})

//Dark light theme 

const mode_btn = document.querySelector('.theme-button')
let dark_mode =localStorage.getItem('dark_mode')

const enable_dark_mode = () =>{
    document.body.classList.add('dark-mode')
    localStorage.setItem('dark_mode', 'enabled')
    
}
const disable_dark_mode = () =>{
    document.body.classList.remove('dark-mode')
    localStorage.setItem('dark_mode', 'disabled')
    
}

if(dark_mode === 'enabled'){
    enable_dark_mode()
}

mode_btn.addEventListener('click', ()=>{
    dark_mode =localStorage.getItem('dark_mode')
    if(dark_mode !== 'enabled'){
        enable_dark_mode()
        console.log(dark_mode)
    }else{
        disable_dark_mode()
        console.log(dark_mode)
    }
})

//animate items 

const items = document.querySelectorAll('.anime-1')

observer = new IntersectionObserver(entries =>{
    entries.forEach(entry =>{
        if(entry.intersectionRatio > 0){
            entry.target.style.animation = `anime-1 2s ${entry.target.dataset.delay} forwards ease-out`
        }else {
            entry.target.style.animation = `none`
        }
    })
})

items.forEach(item =>{
    observer.observe(item)
})