gsap.registerPlugin(ScrollTrigger);

gsap.from('.intro-logo', {
    opacity:0, 
    duration:2
})

let intro = gsap.timeline({
    scrollTrigger: {
    trigger: 'header',
    markers: true,
    scrub: 1,
    pin: true,
    // pinSpacing: false,
    end: '+=500',
    toggleActions: 'restart none none reverse',
}});

intro.to('.intro-logo', {
        scale:0,
        y:-800
    })

    .fromTo('.intro-sub', {
        opacity: 0,
        y: 500
    },{
        duration: 3,
        opacity:1,
        y:100
    },)

    .to('.intro-sub', {
        duration: 3,
        y:-600,
        opacity: 0
    })

    .to('.paralax', {
        backgroundColor: 'black',
        duration:2,
        ease: "sine.out"
    },'<')


    let paralax = gsap.timeline({
        scrollTrigger: {
        trigger: '.paralax-wrapper',
        markers: true,
        start: 'top 10%',
        toggleActions: 'restart none none reverse',
        scrub: 2,
        end: '+=200',
        pin: true
    }});

    paralax.from('.paralax .stars', {
        duration:1,
        y: 200
    })
    .from('.paralax .meow', {
        y: 400
    }, '<')
    .from('.paralax .paralax-title', {
        duration:1,
        y: 800
    }, '<')
    .fromTo('.paralax .bubbles', {
        y: 700
    }, {
        duration:1,
        y:-900, 
        filter: 'blur(2px)',
        opacity: 0.6
    }, '<')


    let discos1 = gsap.timeline({
        scrollTrigger: {
            trigger: '.discos1',
            start: 'top top',
            markers: true,
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
            markers: true,
            toggleActions: 'restart none none reverse',
            // scrub: 2,
            end: '+=1000',
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
    })

    let discos3 = gsap.timeline({
        scrollTrigger: {
            trigger: '.discos3',
            start: 'top top',
            markers: true,
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

    .from('.cd5 .cd-name, .cd5 .cd-info, .cd5 .cd-img', {
        opacity:0.5,
    }, 0)

    .from('.cd6 .cd-name, .cd6 .cd-info, .cd6 .cd-img', {
        opacity:0.3,
    })

    let discos4 = gsap.timeline({
        scrollTrigger: {
            trigger: '.discos4',
            start: 'top top',
            markers: true,
            toggleActions: 'restart none none reverse',
            // scrub: 2,
            end: '+=1000',
            pin: true,
            // pinSpacing: false
        }});

    discos4.from('.discos4 .year', {
        y:500,
        opacity:0.3
    })
    .from('.cd7 .cd-name, .cd7 .cd-info, .cd7 .cd-img', {
        opacity:0.5,
    }, 0)

    .from('.cd8 .cd-name, .cd8 .cd-info, .cd8 .cd-img', {
        opacity:0.3,
    })









