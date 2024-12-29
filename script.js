gsap.registerPlugin(ScrollTrigger);

const overlay = document.querySelector('.black-overlay');

gsap.timeline({
  scrollTrigger: {
    trigger: ".video-container",
    start: "top top",
    end: "bottom bottom",
    scrub: true
  }
})
  .to(overlay, { y: "-100%", duration: 1 }) // Slide overlay up
  .to("#video1", { opacity: 0, duration: 0.5 }, "<"); // Fade out the first video
