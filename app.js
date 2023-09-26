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
        pinSpacing: false,
        end: '+=600',
}});

intro.to('.intro-logo', {
        scale: 0.8,
    })

    .from('.intro-sub', {
        opacity: 0,
        y: 500
    }, '<')

    .from('.bg-black', {
        duration: 4,
        yPercent: 100,
    })

    .to('.intro-sub, .intro-logo', {
        duration:1,
        filter: 'invert(1)'
    }, '<2')

    .to('.paralax', {
        backgroundColor: 'black',
        duration:2,
        ease: "sine.out"
    },'<')


    let paralax = gsap.timeline({
        scrollTrigger: {
        trigger: '.paralax-wrapper',
        start: 'top top',
        scrub: 2,
        end: '+=600',
        pin: true,
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
        opacity: 0.6
    }, '<')


    let discos1 = gsap.timeline({
        scrollTrigger: {
            trigger: '.discos1',
            start: 'top 50%',
            // toggleActions: 'restart none none reverse',
            scrub: 2,
            end: '+=200',
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
            start: 'top 50%',
            toggleActions: 'restart none none reverse',
        }});

    discos2.from('.discos2 .year', {
        y:500,
        opacity:0.3,
    })

    .from('.cd3 .cd-name', {
        y:400,
        opacity:0
    },0)

    .from('.cd3 .cd-info', {
        y: 900,
        opacity:0
    },0)

    .from('.cd3 .cd-img', {
        opacity:0,
        x:-800,
        transformOrigin: 'left center',
    },0)

    .from('.cd4 .cd-name', {
        y:300,
        opacity:0
    },)

    .from('.cd4 .cd-info', {
        y: 500,
        opacity:0
    },'<')

    .from('.cd4 .cd-img', {
        opacity:0,
        x:-800,
        transformOrigin: 'left center',
    },'<')

    .from('.cd5 .cd-name', {
        y:300,
        opacity:0
    },)

    .from('.cd5 .cd-info', {
        y: 500,
        opacity:0
    },'<')

    .from('.cd5 .cd-img', {
        opacity:0,
        x:-800,
        transformOrigin: 'left center',
    },'<')


    let discos3 = gsap.timeline({
        scrollTrigger: {
            trigger: '.discos3',
            start: 'top 50%',
            toggleActions: 'restart none none reverse',
            scrub: true,
            end: '+=600',
        }});

    discos3.from('.discos3 .year', {
        yPercent: 200,
        opacity:0.3
    })

    .from('.cd6 .cd-name, .cd6 .cd-info, .cd6 .cd-img', {
        opacity:0,
        stagger: 0.5,
        yPercent: 100
    })
    
    .from('.cd7 .cd-name, .cd7 .cd-info, .cd7 .cd-img', {
        opacity:0,
        stagger: 0.5,
        yPercent: 100
    })


    gsap.from('.looks-wrapper h2, .looks-wrapper img', {
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







