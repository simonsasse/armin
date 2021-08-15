gsap.registerPlugin(ScrollTrigger);

gsap.from(
    "#content-1",
    {
        scrollTrigger: {
            // scrub: true,
            trigger: "#content-1",
            start: "top 60%",
            end: "top 30%",
            toggleActions:"restart none none reverse"
        },
        x: "-10vw",
        alpha: "0",
        ease:"ease"
        
    }
);

gsap.from(
    "#content-2" ,
    {
        scrollTrigger: {
            // scrub: true,
            trigger: "#content-2",
            start: "top 60%",
            end: "top 30%",
            toggleActions:"restart none none reverse"
        },
        x: "10vw",
        alpha: "0",
        ease:"ease"
        
    }
);

gsap.from(
    "#content-3",
    {
        scrollTrigger: {
            // scrub: true,
            trigger: "#content-3",
            start: "top 60%",
            end: "top 30%",
            toggleActions:"restart none none reverse"
        },
        x: "-10vw",
        alpha: "0",
        ease:"ease"
        
    }
);
// gsap.to(
//     "#brass",
//     {
//         scrollTrigger: {
//             scrub: true,
//             trigger: "#concerts_container",
//             start: "top 100%",
//             end: "top 0%"
//         },
//         x: "40vw",
//         alpha: "0"
//     }
// );
// gsap.from(
//     "#brass",
//     {
//         scrollTrigger: {
//             trigger: "#scroll_text",
//             toggleAction: "restart pause pause pause",
//             end: "top center"
//         },
//         duration: 1,
//         scale: 40,
//         rotation:90,
//         color: "#000000"
//     }
// );
// gsap.from(
//     "#riot",
//     {
//         scrollTrigger: {
//             trigger: "#scroll_text",
//             toggleAction: "restart pause pause pause",
//             end: "top center"
//         },
//         duration: 1,
//         scale: 40,
//         rotation:-90,
//         color: "#000000"
//     }
// );

// gsap.to(
//     "#scroll_text",
//     {
//         scrollTrigger: {
//             trigger: "#scroll_text",
//             toggleAction: "restart pause pause pause",
//             end: "top center"
//         },
//         duration: 1,
//         alpha:0.2,
//         y:"3vh"
//     }
// ).repeat(-1).yoyo(true);

// gsap.from("#concerts_container",{
//     scrollTrigger: {
//         scrub: true,
//         trigger: "#concerts_container",
//         start: "top 80%",
//         end: "+=80%"
//     },
//     alpha: 0
// });


// gsap.from(".date",{
//     scrollTrigger: {
//         trigger: "#concerts_container",
//         start: "top 0.1%",
//         end: "+=2%",
//         toggleActions:"restart none none reverse"
//     },
//     stagger: .05,
//     duration: .3,
//     scale:5,
//     alpha: 0,
//     ease:"ease"});
 
//     gsap.from("#concerts_heading",{
//         scrollTrigger: {
//             pin:true,
//             scrub:true,
//             trigger: "#concerts_container",
//             start: "top 0.1%",
//             end: "+=50%",
//             toggleActions:"restart none none reverse"
//         },
//         scale:30,
//         background: "#000000",
//         alpha: 0,
//         // rotation: 180,
//         ease:"ease"});

// gsap.from("#contact_container",{
//     scrollTrigger: {
//         scrub: true,
//         trigger: "#contact_container",
//         start: "top bottom",
//         end: "+=99.9%"
//     },
//     alpha: .2
// });

// gsap.from(".link",{
//     scrollTrigger: {
//         trigger: "#contact_container",
//         start: "top 0.1%",
//         end: "+=99.9%",
//         toggleActions:"restart none none reverse"
//     },
//     stagger: .05,
//     duration: .2,
//     scale:50,
//     alpha: 0});

// gsap.from("#contact-heading",{
//     scrollTrigger: {
//         scrub: true,
//         pin: true,
//         trigger: "#contact_container",
//         start: "top top",
//         end: "bottom top"
//     },
//     background:"#000000",
//     alpha: 0,
//     scale:2,
//     y: "70vh"});
