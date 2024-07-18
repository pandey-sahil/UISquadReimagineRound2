
// locomotive JS for smooth scolling

function loco() {

    gsap.registerPlugin(ScrollTrigger);

    const locoScroll = new LocomotiveScroll({
        el: document.querySelector("#main"),
        smooth: true,

        // for tablet smooth
        tablet: { smooth: true },
        // for mobile
        smartphone: { smooth: true }
    });
    locoScroll.on("scroll", ScrollTrigger.update);

    ScrollTrigger.scrollerProxy("#main", {
        scrollTop(value) {
            return arguments.length
                ? locoScroll.scrollTo(value, 0, 0)
                : locoScroll.scroll.instance.scroll.y;
        },
        getBoundingClientRect() {
            return {
                top: 0,
                left: 0,
                width: window.innerWidth,
                height: window.innerHeight
            };
        }

    });

    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

    ScrollTrigger.refresh();

};
loco();


function page5Animation() {
    gsap.from("#container", {
        opacity: 0,
        y: 100,
        duration: 1,
        delay:2,
        scrollTrigger: {
            trigger: "#container",
            start: 'top 100%',
            end: 'top 50%', 
            scrub: true,
            scroller:"#main",
            markers: true,
        }
    }
    )

}
page5Animation();