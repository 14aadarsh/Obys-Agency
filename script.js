var timer = document.querySelector("#time h3")
var grow = 0

setInterval(function () {
    if (grow < 100) {
        grow++
        timer.innerHTML = grow
    }
}, 30)

setTimeout(function () {
    clearInterval(int)
}, 3000)

function loco() {
    gsap.registerPlugin(ScrollTrigger);

    // Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

    const locoScroll = new LocomotiveScroll({
        el: document.querySelector("#main"),
        smooth: true
    });
    // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
    locoScroll.on("scroll", ScrollTrigger.update);

    // tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
    ScrollTrigger.scrollerProxy("#main", {
        scrollTop(value) {
            return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
        }, // we don't have to define a scrollLeft because we're only scrolling vertically.
        getBoundingClientRect() {
            return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
        },
        // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
        pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
    });

    // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

    // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
    ScrollTrigger.refresh();

}

loco()

var tl = gsap.timeline()
tl.from("#text-1 h1,#text-2 h1", {
    y: 100,
    duration: 0.7,
    opacity: 0,
    stagger: 0.2
})

tl.from("#time h3, #time h4", {
    opacity: 0,
    delay: -1,
})


tl.to("#time h3, #time h4", {
    opacity: 0,
    delay: 1.8,
})

tl.to("#text-1 h1,#text-2 h1", {
    opacity: 0,
    stagger: -0.2
})


tl.to("#loader", {
    top: "-100%",
    delay: 0.9,
    duration: 1,
    ease: "power4.out"
})

Shery.mouseFollower()
Shery.makeMagnet("h4")


function page4Animation() {
    gsap.to(".ani1 h1", {
        x: -1000,
        duration: 50,
        // repeat: -1,
        // yoyo: true,
        // // // repeatDelay: 0
        // scrollTrigger: {
        //     trigger: "#page5",
        //     scroller: "#main",
        //     start: "top 150%",
        //     end: "top -50%",
        //     scrub: 2,
        //     markers: true
        // }
    })

    gsap.from(".ani2 h1", {
            x: -1000,
            duration: 50,
            // scrollTrigger: {
            //     trigger: "#page4",
            //     scroller: "#main",
            //     start: "top 150%",
            //     end: "top -50%",
            //     scrub: 2,
            //     markers:true
        // }
    })

}

page4Animation()

var img = document.querySelector("#page2 img")
var video = document.querySelector("#page2 video")

video.addEventListener("mouseenter", function () {
    gsap.to(".mousefollower", {
        opacity: 0
    })
})

video.addEventListener("mouseleave", function () {
    gsap.to(".mousefollower", {
        opacity: 1
    })

    gsap.to("#playbtn", {
        left: "75%",
        top: "0%"
    })
})

var playbtn = document.querySelector("#playbtn")
var flag = 0;
video.addEventListener("click", function () {

    if (flag === 0) {
        video.style.opacity = "1"
        playbtn.innerHTML = `<i class="ri-pause-line"></i>`

        gsap.to("#playbtn", {
            scale: 0.5
        })

        video.play();
        flag = 1;
    }

    else {
        video.style.opacity = "0"

        gsap.to("#playbtn", {
            scale: 1
        })

        video.pause();
        playbtn.innerHTML = `<i class="ri-play-fill"></i>`
        flag = 0;
    }

})

video.addEventListener("mousemove", function (dets) {
    gsap.to("#playbtn", {
        left: dets.x - 170,
        top: dets.y - 170
    })
})


function SheryAnimation() {
    Shery.mouseFollower()

    Shery.makeMagnet("#nav h4")

    Shery.imageEffect(".images", {
        style: 6,
        // debug:true,
        gooey: true,
        config: { "noiseDetail": { "value": 6.11, "range": [0, 100] }, "distortionAmount": { "value": 2.9, "range": [0, 10] }, "scale": { "value": 59.54, "range": [0, 100] }, "speed": { "value": 0.58, "range": [0, 1] }, "zindex": { "value": -999999, "range": [-9999999, 9999999] }, "aspect": { "value": 0.8333333134651184 }, "ignoreShapeAspect": { "value": true }, "shapePosition": { "value": { "x": 0, "y": 0 } }, "shapeScale": { "value": { "x": 0.5, "y": 0.5 } }, "shapeEdgeSoftness": { "value": 0, "range": [0, 0.5] }, "shapeRadius": { "value": 0, "range": [0, 2] }, "currentScroll": { "value": 0 }, "scrollLerp": { "value": 0.07 }, "gooey": { "value": true }, "infiniteGooey": { "value": false }, "growSize": { "value": 4, "range": [1, 15] }, "durationOut": { "value": 1, "range": [0.1, 5] }, "durationIn": { "value": 1.5, "range": [0.1, 5] }, "displaceAmount": { "value": 0.5 }, "masker": { "value": true }, "maskVal": { "value": 1.27, "range": [1, 5] }, "scrollType": { "value": 0 }, "geoVertex": { "range": [1, 64], "value": 1 }, "noEffectGooey": { "value": true }, "onMouse": { "value": 0 }, "noise_speed": { "value": 0.84, "range": [0, 10] }, "metaball": { "value": 0.44, "range": [0, 2] }, "discard_threshold": { "value": 0.5, "range": [0, 1] }, "antialias_threshold": { "value": 0, "range": [0, 0.1] }, "noise_height": { "value": 0.38, "range": [0, 2] }, "noise_scale": { "value": 8.4, "range": [0, 100] } }
    })

}

SheryAnimation()
