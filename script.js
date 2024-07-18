function page5Animation(){
    document.addEventListener("DOMContentLoaded", () => {
        gsap.registerPlugin(ScrollTrigger);

        gsap.fromTo("#container", 
            {
                opacity: 0, 
                y: 50
            }, 
            {
                opacity: 1,
                y: 0,
                duration: 1,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: "#container",
                    start: "top 80%",
                    toggleActions: "play none none none"
                }
            }
        );
    });
}
page5Animation();