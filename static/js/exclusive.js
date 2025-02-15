(function () {
	const isAnimationOk = window.matchMedia('(prefers-reduced-motion: no-preference)').matches;
	// Cnahge to false to make the animations play when the section's in viewport
	const scrub = true;

	if(isAnimationOk) {
		setupAnimations();
	}

	function setupAnimations() {

		gsap.to(".hero__title-bg--front", {
			yPercent: -5,
			color: '#ffffff;',
			scale: 2,
			scrollTrigger: {
				trigger: ".hero",
				start: "top top", // when the top of the trigger hits the top of the viewport
				end: "bottom 75%", // bottom of the trigger hits the bottom of the vp
				scrub: scrub,
				markers: false
			}
		});
		gsap.to(".hero__title-bg--back", {
			yPercent: 100,
			scrollTrigger: {
				trigger: ".hero",
				start: "top top", // when the top of the trigger hits the top of the viewport
				end: "bottom 75%", // bottom of the trigger hits the bottom of the vp
				scrub: scrub,
				markers: false
			}
		});

	}
}());