gsap.registerPlugin(ScrollTrigger);

gsap.from('.intro-logo', {
    opacity:0, 
    duration:2
})

let intro = gsap.timeline({
    scrollTrigger: {
    trigger: 'header',
    // markers: true,
    scrub: 1,
    pin: true,
    // pinSpacing: false,
    end: '+=500',
    toggleActions: 'restart none none reverse',
}});

intro.to('.intro-logo', {
        duration: 2,
        scale:0,
        y:-600,
    })

    .fromTo('.intro-sub', {
        opacity: 0,
        y: 500
    },{
        duration: 1,
        opacity:1,
        y:100
    },)

    .to('.intro-sub', {
        duration: 4,
        y:-200,
        opacity: 0
    }, '<8')

    .to('.paralax', {
        backgroundColor: 'black',
        duration:2,
        ease: "sine.out"
    },'<')


    let paralax = gsap.timeline({
        scrollTrigger: {
        trigger: '.paralax-wrapper',
        start: 'top 10%',
        toggleActions: 'restart none none reverse',
        scrub: 4,
        end: '+=500',
        pin: true
    }});

    paralax.from('.paralax .stars', {
        y: 150
    })
    .from('.paralax .meow', {
        y: 400
    }, '<')
    .from('.paralax .paralax-title', {
        y: 800
    }, '<')
    .fromTo('.paralax .bubbles', {
        y: 700
    }, {
        y:-900, 
        filter: 'blur(2px)',
        opacity: 0.6
    }, '<')


    let discos1 = gsap.timeline({
        scrollTrigger: {
            trigger: '.discos1',
            start: 'top top',
            toggleActions: 'restart none none reverse',
            scrub: 2,
            end: '+=200',
            pin: true,
            // pinSpacing: false
        }});

    discos1.from('.discos1 .year', {
        y:2200,
        opacity:0
    })
    
    .from('.cd1 .cd-name', {
        y:400,
        opacity:0
    },0)

    .from('.cd1 .cd-info', {
        y: 900,
        opacity:0
    },0)

    .from('.cd1 .cd-img', {
        opacity:0,
        x:-800,
        transformOrigin: 'left center',
    },0)

    .from('.cd2 .cd-name', {
        y:300,
        opacity:0
    },)

    .from('.cd2 .cd-info', {
        y: 500,
        opacity:0
    },'<')

    .from('.cd2 .cd-img', {
        opacity:0,
        x:-800,
        transformOrigin: 'left center',
    },'<')

    let discos2 = gsap.timeline({
        scrollTrigger: {
            trigger: '.discos2',
            start: 'top top',
            toggleActions: 'restart none none reverse',
            // scrub: 2,
            // end: '+=1000',
            pin: true,
            pinSpacing: false
        }});

    discos2.from('.discos2 .year', {
        y:500,
        opacity:0.3,
    })

    .from('.cd3 .cd-name, .cd3 .cd-info, .cd3 .cd-img', {
        opacity:0.5,
    }, 0)

    .from('.cd4 .cd-name, .cd4 .cd-info, .cd4 .cd-img', {
        opacity:0.3,
    },0)

    .from('.cd5 .cd-name, .cd5 .cd-info, .cd5 .cd-img', {
        opacity:0.5,
    },0)

    let discos3 = gsap.timeline({
        scrollTrigger: {
            trigger: '.discos3',
            start: 'top top',
            toggleActions: 'restart none none reverse',
            // scrub: true,
            end: '+=1000',
            pin: true,
            pinSpacing: false
        }});

    discos3.from('.discos3 .year', {
        y:500,
        opacity:0.3
    })

    .from('.cd6 .cd-name, .cd6 .cd-info, .cd6 .cd-img', {
        opacity:0.3,
    },0)
    
    .from('.cd7 .cd-name, .cd7 .cd-info, .cd7 .cd-img', {
        opacity:0.3,
    })


    gsap.from('.looks-wrapper h2, .looks-wrapper img', {
        duration:1,
        scale: 2,
        stagger:0.5,
        scrollTrigger: {
            trigger: '.looks',
            scrub: true,
            end: '80% 80%'
        }
    })

    gsap.from('.look-content-wrapper1', {
        scrollTrigger: {
            trigger: '.look-content-wrapper1',
            pin: true,
            pinSpacing: false
        }
    })

    gsap.from('.look-content-wrapper2', {
        scrollTrigger: {
            trigger: '.look-content-wrapper2',
            pin: true,
            pinSpacing: false
        }
    })

    gsap.from('.look-content-wrapper3', {
        scrollTrigger: {
            trigger: '.look-content-wrapper3',
            pin: true,
            pinSpacing: false
        }
    })

    gsap.from('.look-content-wrapper4', {
        scrollTrigger: {
            trigger: '.look-content-wrapper4',
            pin: true,
            pinSpacing: false
        }
    })

    gsap.from('.look-content-wrapper5', {
        scrollTrigger: {
            trigger: '.look-content-wrapper5',
            pin: true,
            pinSpacing: false
        }
    })

    gsap.from('.look-content-wrapper6', {
        scrollTrigger: {
            trigger: '.look-content-wrapper6',
            pin: true,
        }
    })

    gsap.from('.lookpic1, .look1', {
        filter: 'blur(4px)',
        duration:1,
        opacity:0,
        scale: 1.2,
        stagger:1,
        scrollTrigger: {
            trigger: '.look-content-wrapper1',
            start: 'top 80%',
        }
    })

    gsap.from('.lookpic2, .look2', {
        filter: 'blur(4px)',
        duration:1,
        opacity:0,
        scale: 1.2,
        stagger:1,
        scrollTrigger: {
            trigger: '.look-content-wrapper2',
            start: 'top 80%',
        }
    })

    gsap.from('.lookpic3, .look3', {
        filter: 'blur(4px)',
        duration:1,
        opacity:0,
        scale: 1.2,
        stagger:1,
        scrollTrigger: {
            trigger: '.look-content-wrapper3',
            start: 'top 80%',
        }
    })

    gsap.from('.lookpic4, .look4', {
        filter: 'blur(4px)',
        duration:1,
        opacity:0,
        scale: 1.2,
        stagger:1,
        scrollTrigger: {
            trigger: '.look-content-wrapper4',
            start: 'top 80%',
        }
    })

    gsap.from('.lookpic5, .look5', {
        filter: 'blur(4px)',
        duration:1,
        opacity:0,
        scale: 1.2,
        stagger:1,
        scrollTrigger: {
            trigger: '.look-content-wrapper5',
            start: 'top 80%',
        }
    })

    gsap.from('.lookpic6, .look6', {
        filter: 'blur(4px)',
        duration:1,
        opacity:0,
        scale: 1.2,
        stagger:1,
        scrollTrigger: {
            trigger: '.look-content-wrapper6',
            start: 'top 80%'
        }
    })

    gsap.from('.end img', {
        duration:1,
        opacity:0,
        scale: 2,
        scrollTrigger: {
            trigger: '.end',
            scrub: true,
            end: '80% 80%'
        }
    })







