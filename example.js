gsap.registerPlugin(ScrollTrigger);

gsap.from('.intro-logo', {
    opacity: 0,
    duration: 4
})

let intro = gsap.timeline({
    scrollTrigger: {
        markers: true,
        trigger: 'header',
        start: 'top top',
        scrub: true,
        end: '+=300',
        pin: true,
    }
});

intro.to('.intro-logo', {
    scale: 0.8
})
.from('.intro-sub', {
    y: 600
}, '<')


let paralax = gsap.timeline({
    scrollTrigger: {
        markers: true,
        trigger: '.paralax-wrapper',
        start: 'top top',
        scrub: 3,
        end: '+=300',
        pin: true,
    }
});

paralax.from('.stars', {
    y: 200
}, '<')

.from('.meow', {
    y: 400
}, '<')

.from('.paralax-title', {
    y: 800
}, '<')

.fromTo('.paralax .bubbles', {
    y: 700
}, {
    y:-900, 
    filter: 'blur(2px)',
    opacity: 0.6
}, '<')


gsap.from('.looks-title, .looks-img', {
    scale: 2,
    stagger: 0.5,
    scrollTrigger: {
     trigger: '.looks-wrapper',
     scrub: true, 
    }
})

gsap.to('.look-content-wrapper1', {
    scrollTrigger:{
        trigger: '.look-content-wrapper1',
        pin:true,
        pinSpacing: false,
    }
})

gsap.to('.look-content-wrapper2', {
    scrollTrigger:{
        trigger: '.look-content-wrapper2',
        pin:true,
        pinSpacing: false,
    }
})

gsap.to('.look-content-wrapper3', {
    scrollTrigger:{
        trigger: '.look-content-wrapper3',
        pin:true,
        pinSpacing: false,
    }
})

gsap.to('.look-content-wrapper4', {
    scrollTrigger:{
        trigger: '.look-content-wrapper4',
        pin:true,
        pinSpacing: false,
    }
})

gsap.to('.look-content-wrapper5', {
    scrollTrigger:{
        trigger: '.look-content-wrapper5',
        pin:true,
        pinSpacing: false,
    }
})
gsap.to('.look-content-wrapper6', {
    scrollTrigger:{
        trigger: '.look-content-wrapper6',
        pin:true,
        pinSpacing: false,
    }
})