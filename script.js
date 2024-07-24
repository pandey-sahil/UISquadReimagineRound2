
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
                console.log(progress)
                var tl = gsap.timeline();
                gsap.to("#canvasOverlay", {
                    opacity: progress,
                    backgroundColor: `rgba(0, 0, 0, ${progress})`,
                    duration: 0,
                    overwrite: true
                })
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

// menu loader animation
function menuLoadAnimation() {
	const openMenu = document.querySelector('#load-menu');
	const closeMenu = document.querySelector('#close-menu');
	const plane = document.querySelector('#load-plane');
	const dropDownMenu = document.querySelector('#drop-down-menu');

	const tl = gsap.timeline();

	openMenu.addEventListener('click', function () {
		gsap.to(plane, {
			x: -window.innerWidth * 3,
			y: window.innerHeight * 2,
			ease: 'power5.inOut',
			duration: 2,
		});
		tl.to(dropDownMenu, {
			duration: 0.2,
			delay: 0.4,
			// x: '0%',
			y: '100%',
			// ease: 'power5.in',
			onComplete: function () {
				gsap.to(plane, { delay: 1, opacity: 0 });
			},
		});
	});

	closeMenu.addEventListener('click', function () {
		tl.to(dropDownMenu, {
			duration: 0.2,
			// x: '100%',
			y: '0%',
			ease: 'linear',
		}).to(plane, {
			duration: 1,
			// x: window.innerWidth * 2, y: -window.innerHeight * 4,
			// x: window.innerHeight, y: -window.innerWidth,
			x: '100%',
			y: '-220%',
			onComplete: function () {
				gsap.to(plane, { opacity: 1 });
			},
		});
	});

	//when esc key is clicked , menu will close
	document.addEventListener('keydown', function (event) {
		if (event.key === 'Escape') {
			tl.to(dropDownMenu, {
				duration: 0.2,
				// x: '100%',
				y: '0%',
				ease: 'linear',
			}).to(plane, {
				duration: 1,
				// x: window.innerWidth * 2, y: -window.innerHeight * 4,
				// x: window.innerHeight, y: -window.innerWidth,
				x: '100%',
				y: '-220%',
				onComplete: function () {
					gsap.to(plane, { opacity: 1 });
				},
			});
		}
	});

	//when any link is clicked , menu will close
	document.querySelectorAll('.menu-links a').forEach((link) => {
		link.addEventListener('click', function () {
			tl.to(dropDownMenu, {
				duration: 0.2,
				// x: '100%',
				y: '0%',
				ease: 'linear',
			}).to(plane, {
				duration: 1,
				// x: window.innerWidth * 2, y: -window.innerHeight * 4,
				// x: window.innerHeight, y: -window.innerWidth,
				x: '100%',
				y: '-220%',
				onComplete: function () {
					gsap.to(plane, { opacity: 1 });
				},
			});
		});
	});

	const linksarr = document.querySelectorAll(
		'#drop-down-menu #menu-blocks .menu-links a'
	);

	linksarr.forEach((link) => {
		link.addEventListener('mouseenter', () => {
			gsap.to(link, { rotationX: 360, duration: 1, ease: 'power3.out' });
		});

		link.addEventListener('mouseleave', () => {
			gsap.to(link, { rotationX: 0, duration: 1, ease: 'power3.out' });
		});
	});
}
menuLoadAnimation();

page1Canvas();

// Page 2 Animation
function page1Anime() {
    
}
function page2() {
    const videoContainer = document.querySelector('#video-container');
    const video = document.querySelector('video');
    const thumbnail = document.querySelector('#thumbnail');
    const customCursor = document.querySelector('#custom-cursor');

    videoContainer.addEventListener("mousemove", function (dets) {
        gsap.to(customCursor, {
            top: dets.y,
            left: dets.x
        })
    });

    videoContainer.addEventListener("mouseenter", function () {
        gsap.to(customCursor, {
            duration: 0.2,
            opacity: 1,
            scale: 1,
            transform: `translate(-50%, -50%) scale(1)` // Center and scale the cursor
        });

    });

    videoContainer.addEventListener("mouseleave", function () {
        gsap.to(customCursor, {
            duration: 0.2,
            opacity: 0,
            scale: 0,
            transform: `translate(-50%, -50%) scale(0)` // Center and scale down the cursor
        });
    });

    videoContainer.addEventListener('click', () => {
        if (video.paused) {
            video.play();
            thumbnail.classList.add('hidden');
            customCursor.innerHTML = `<h1>Pause</h1>`;
        } else {
            video.pause();
            thumbnail.classList.remove('hidden');
            customCursor.innerHTML = `<h1>Play</h1>`;
        }
    });

    // Initialize cursor text
    customCursor.innerHTML = `<h1>Play</h1>`;
};

page2();


// Page 5 Animation
function page5Animation() {
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
            markers: true,
        }
    }
    )

}
page5Animation();