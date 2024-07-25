
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

function navAnime() {
    let activeItemIndicator = CSSRulePlugin.getRule(".menu-item p#active::after");
    const toggleButton = document.querySelector(".burger");

    let isopen = false;

    gsap.set(".menu-item p", { y: 225 });

    const timeline = gsap.timeline({ paused: true });

    timeline.to(".overlayNav", {
        duration: 1.5,
        clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
        ease: 'power4.inOut'
    });

    timeline.to(".menu-item p", {
        duration: 1.5,
        y: 0,
        stagger: 0.2,
        ease: "power4.inOut"

    }, "-=1");

    timeline.to(activeItemIndicator, {
        width: "100%",
        duration: 1,
        ease: "power4.inOut",
        // delay: 0.5,

    }, "<");


    toggleButton.addEventListener("click", function () {
        if (isopen) {
            timeline.reverse();
            // isopen = false;

        } else {
            timeline.play();
            // isopen = true;
        }
        isopen = !isopen;
    })
};

navAnime();

// Page 1 Canvas
function page1Canvas() {
    const canvas = document.querySelector("#overlay canvas");
    const context = canvas.getContext("2d");

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;


    window.addEventListener("resize", function () {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        render();
    });

    function files(index) {
        var data = `
./src/canvasImages/001.jpg
./src/canvasImages/002.jpg
./src/canvasImages/003.jpg
./src/canvasImages/004.jpg
./src/canvasImages/005.jpg
./src/canvasImages/006.jpg
./src/canvasImages/007.jpg
./src/canvasImages/008.jpg
./src/canvasImages/009.jpg
./src/canvasImages/010.jpg
./src/canvasImages/011.jpg
./src/canvasImages/012.jpg
./src/canvasImages/013.jpg
./src/canvasImages/014.jpg
./src/canvasImages/015.jpg
./src/canvasImages/016.jpg
./src/canvasImages/017.jpg
./src/canvasImages/018.jpg
./src/canvasImages/019.jpg
./src/canvasImages/020.jpg
./src/canvasImages/021.jpg
./src/canvasImages/022.jpg
./src/canvasImages/023.jpg
./src/canvasImages/024.jpg
./src/canvasImages/025.jpg
./src/canvasImages/026.jpg
./src/canvasImages/027.jpg
./src/canvasImages/028.jpg
./src/canvasImages/029.jpg
./src/canvasImages/030.jpg
./src/canvasImages/031.jpg
./src/canvasImages/032.jpg
./src/canvasImages/033.jpg
./src/canvasImages/034.jpg
./src/canvasImages/035.jpg
./src/canvasImages/036.jpg
./src/canvasImages/037.jpg
./src/canvasImages/038.jpg
./src/canvasImages/039.jpg
./src/canvasImages/040.jpg
./src/canvasImages/041.jpg
./src/canvasImages/042.jpg
./src/canvasImages/043.jpg
./src/canvasImages/044.jpg
./src/canvasImages/045.jpg
./src/canvasImages/046.jpg
./src/canvasImages/047.jpg
./src/canvasImages/048.jpg
./src/canvasImages/049.jpg
./src/canvasImages/050.jpg
./src/canvasImages/051.jpg
./src/canvasImages/052.jpg
./src/canvasImages/053.jpg
./src/canvasImages/054.jpg
./src/canvasImages/055.jpg
./src/canvasImages/056.jpg
./src/canvasImages/057.jpg
./src/canvasImages/058.jpg
./src/canvasImages/059.jpg
./src/canvasImages/060.jpg
./src/canvasImages/061.jpg
./src/canvasImages/062.jpg
./src/canvasImages/063.jpg
./src/canvasImages/064.jpg
./src/canvasImages/065.jpg
./src/canvasImages/066.jpg
./src/canvasImages/067.jpg
./src/canvasImages/068.jpg
./src/canvasImages/069.jpg
./src/canvasImages/070.jpg
./src/canvasImages/071.jpg
./src/canvasImages/072.jpg
./src/canvasImages/073.jpg
./src/canvasImages/074.jpg
./src/canvasImages/075.jpg
./src/canvasImages/076.jpg
./src/canvasImages/077.jpg
./src/canvasImages/078.jpg
./src/canvasImages/079.jpg
./src/canvasImages/080.jpg
./src/canvasImages/081.jpg
./src/canvasImages/082.jpg
./src/canvasImages/083.jpg
./src/canvasImages/084.jpg
./src/canvasImages/085.jpg
./src/canvasImages/086.jpg
./src/canvasImages/087.jpg
./src/canvasImages/088.jpg
./src/canvasImages/089.jpg
./src/canvasImages/090.jpg
./src/canvasImages/091.jpg
./src/canvasImages/092.jpg
./src/canvasImages/093.jpg
./src/canvasImages/094.jpg
./src/canvasImages/095.jpg
./src/canvasImages/096.jpg
./src/canvasImages/097.jpg
./src/canvasImages/098.jpg
./src/canvasImages/099.jpg
./src/canvasImages/100.jpg
./src/canvasImages/101.jpg
./src/canvasImages/102.jpg
./src/canvasImages/103.jpg
./src/canvasImages/104.jpg
./src/canvasImages/105.jpg
./src/canvasImages/106.jpg
./src/canvasImages/107.jpg
./src/canvasImages/108.jpg
./src/canvasImages/109.jpg
./src/canvasImages/110.jpg
./src/canvasImages/111.jpg
./src/canvasImages/112.jpg
./src/canvasImages/113.jpg
./src/canvasImages/114.jpg
./src/canvasImages/115.jpg
./src/canvasImages/116.jpg
./src/canvasImages/117.jpg
./src/canvasImages/118.jpg
./src/canvasImages/119.jpg
./src/canvasImages/120.jpg
./src/canvasImages/121.jpg
./src/canvasImages/122.jpg
./src/canvasImages/123.jpg
./src/canvasImages/124.jpg
./src/canvasImages/125.jpg
./src/canvasImages/126.jpg
./src/canvasImages/127.jpg
./src/canvasImages/128.jpg
./src/canvasImages/129.jpg
./src/canvasImages/130.jpg
./src/canvasImages/131.jpg
./src/canvasImages/132.jpg
./src/canvasImages/133.jpg
./src/canvasImages/134.jpg
./src/canvasImages/135.jpg
./src/canvasImages/136.jpg
./src/canvasImages/137.jpg
./src/canvasImages/138.jpg
./src/canvasImages/139.jpg
./src/canvasImages/140.jpg
./src/canvasImages/141.jpg
./src/canvasImages/142.jpg
./src/canvasImages/143.jpg
./src/canvasImages/144.jpg
./src/canvasImages/145.jpg
./src/canvasImages/146.jpg
./src/canvasImages/147.jpg
./src/canvasImages/148.jpg
./src/canvasImages/149.jpg
./src/canvasImages/150.jpg
./src/canvasImages/151.jpg
./src/canvasImages/152.jpg
./src/canvasImages/153.jpg
./src/canvasImages/154.jpg
./src/canvasImages/155.jpg
./src/canvasImages/156.jpg
./src/canvasImages/157.jpg
./src/canvasImages/158.jpg
 `;
        return data.split("\n")[index];
    }

    const frameCount = 158;

    const images = [];
    const imageSeq = {
        frame: 1,
    };

    for (let i = 0; i < frameCount; i++) {
        const img = new Image();
        img.src = files(i);
        images.push(img);
    }

    gsap.to(imageSeq, {
        frame: frameCount - 1,
        snap: "frame",
        ease: `none`,
        scrollTrigger: {
            scrub: 0.5,
            trigger: `#overlay`,
            start: `top top`,
            end: `250% top`,
            scroller: `#main`,
            onUpdate: (self) => {
                render();
                const progress = self.progress;
                var tl = gsap.timeline();
                tl.to("#page1Text h1", {
                    y: progress * -400 + "%",
                    opacity: 100 - progress * 400 + "%",
                    duration: 0,
                    overwrite: true
                }, 'a')

                tl.to("#canvasOverlay", {
                    // y: progress * -40 + "%",
                    backgroundColor: `rgba(20, 20, 20, ${progress / 2} )`,
                    // opacity: 100 - progress *400 + "%",
                    // backgroundColor: `rgba(20, 20, 20, ${progress})`,
                    duration: 0,
                    // delay: 1,
                    overwrite: true
                }, 'a')
            }


        },

    });

    images[1].onload = render;

    function render() {
        scaleImage(images[imageSeq.frame], context);
    }

    function scaleImage(img, ctx) {
        var canvas = ctx.canvas;
        var hRatio = canvas.width / img.width;
        var vRatio = canvas.height / img.height;
        var ratio = Math.max(hRatio, vRatio);
        var centerShift_x = (canvas.width - img.width * ratio) / 2;
        var centerShift_y = (canvas.height - img.height * ratio) / 2;
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.drawImage(
            img,
            0,
            0,
            img.width,
            img.height,
            centerShift_x,
            centerShift_y,
            img.width * ratio,
            img.height * ratio
        );
    }
    ScrollTrigger.create({
        trigger: "#overlay",
        pin: true,
        scroller: `#main`,
        start: `top top`,
        end: `250% top`,
    });



};

page1Canvas();

// Page 2 Animation
function page1Anime() {

    var loader = gsap.timeline()

    loader.to("#loader img", {
        // height: 0,
        opacity:0,
        y: "-100%",
        duration: 0.8,
        delay: 0.5
    })
    .to("#loader1", {
        height: 0,
        duration: 0.8,
        delay: 0.5
    })
        .to("#loader2", {
            height: 0,
            duration: 0.8,
        }, "-=0.3")
        .to("#loader3", {
            height: 0,
            duration: 0.8,
        }, "-=1")
        .to("#loader4", {
            height: 0,
            duration: 0.8,
        }, "-=0.7")
        .to("#loader", {
            top: "-100vh",
            duration: 0.1
        })
        .from("nav", {
            // top: "",
            y: -200,
            opacity: 0,
            duration: 1
        }, "aaa")

    var clutter = "";
    var pg1H1 = document.querySelectorAll("#page1Text h1");

    pg1H1.forEach(function (e) {
        loader.from(e, {
            y: 400,
            rotate: "30deg",
            stagger: 2,
            duration: 1.2,
            // delay:2  
        }, "aaa");
    });


}
page1Anime()
function page2() {
    var videoImage = document.querySelector("#video-container img")
    var videoVideo = document.querySelector("#video-container video")

    var flag = 0
    var videoC = document.querySelector("#video-container")
    videoC.addEventListener("mouseenter", function () {
        var mouse = document.querySelector(".mousefollower");
    })

    var tlpage2 = gsap.timeline({
        scrollTrigger: {
            trigger: "#page2",
            scroller: "#main",
            start: "top 80%",
            end: "top 10%",
            scrub: true
            // toggleActions: "play none none pause"
        }
    })
    tlpage2.from('#page2Overlay h1', {
        x: -200,
        opacity: 0,
        duration: 1,
        // ease: "ela/stic.inOut(1.5)",
        stagger: 0.2,
        delay: 0.5,

    }).from(videoC, {
        y: 200,
        opacity: 0,
        duration: 1,
        // ease: "elastic.inOut(1.5)",
        stagger: 0.2,
        delay: 0.5,

    })


    videoC.addEventListener("click", function () {
        if (flag == 0) {
            flag = 1
            gsap.to(videoVideo, {
                opacity: 1
            })
            gsap.to(videoImage, {
                opacity: 0
            })
            videoVideo.play()
        } else {
            gsap.to(videoImage, {
                opacity: 1
            })
            gsap.to(videoVideo, {
                opacity: 0
            })
            videoVideo.pause()
            flag = 0
        }
    })

};

page2();

function page3Anime() {
    var tlpage3 = gsap.timeline({
        scrollTrigger: {
            trigger: "#page3",
            scroller: "#main",
            start: "top 40%",
            end: "top 10%",
            scrub: true
            // toggleActions: "play none none pause"
        }
    })
    tlpage3.to('#main', {
        backgroundColor: "#FFCC00",
        duration: 5,
        // ease: "ela/stic.inOut(1.5)",
        stagger: 0.2,
        delay: 0.5,

    }, "a")
        .from('#page3 h1', {
            x: -200,
            opacity: 0,
            duration: 1,
            // ease: "ela/stic.inOut(1.5)",
            stagger: 0.2,
            delay: 0.5,

        }, "a")
    document.querySelectorAll('.card').forEach((card) => {
        tlpage3.from(card, {

            opacity: 0,
            duration: 1.5,
            // ease: "elastic.inOut(1.5)",
            stagger: 2,
            delay: 0.5,

        })
    });

};
page3Anime();
function SheryAnimation() {
    Shery.mouseFollower({
        //Parameters are optional
        ease: "cubic-bezier(1,-0.7,1,-0.51)",

    });
    Shery.makeMagnet(".arrow" /* Element to target.*/, {
        //Parameters are optional.
        ease: "cubic-bezier(0.23, 1, 0.320, 1)",
        duration: 1,
    });
    Shery.makeMagnet(".burger", ".menu-item p",);
    Shery.makeMagnet("#logo img", ".button-confirm");
    Shery.imageMasker("#video-container" /* Element to target.*/, {
        //Parameters are optional.
        mouseFollower: true,
        text: "Click",
        fontSize: "2rem",
        ease: "cubic-bezier(0.23, 1, 0.320, 1)",
        // scale: false,
        duration: 1,
    });
    // Shery.imageEffect("#video-container", {
    //     style: 6,
    //     debug: true,
    //     gooey: true,
    //   });
}
SheryAnimation()

// Page 4 Animation
function page4Animation() {
    gsap.from("#container", {
        opacity: 0,
        y: 200,
        duration: 1,
        // delay:2,
        scrollTrigger: {
            trigger: "#container",
            start: 'top 100%',
            end: 'top 20%',
            scrub: true,

            scroller: "#main",
            // markers: true,
        }
    }
    )

}
page4Animation();