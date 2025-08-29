const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});

var tl = gsap.timeline()

tl.to("#page1",{
    y: "100vh",
    scale: 0.6,
    duration: 0,
})

tl.to("#page1",{
    y:"30vh",
    duration:1,
    delay:1
})
tl.to("#page1", {
    rotate:"2",
    duration:0.4
})
tl.to("#page1", {
    y:"0vh",
    rotate: "360",
    scale:1,
    ease: "in-out",
    duration:0.7
})

