gsap.registerPlugin(ScrollTrigger);

const overlay = document.querySelector(".black-overlay");
const video1 = document.querySelector("#video1");
const video2 = document.querySelector("#video2");

gsap
  .timeline({
    scrollTrigger: {
      trigger: ".video-container",
      start: "top top",
      end: "bottom bottom",
      scrub: true,
    },
  })
  .to(video1, { opacity: 0, duration: 0.2 }, "<");

gsap
  .timeline({
    scrollTrigger: {
      trigger: ".video-container",
      start: "top top",
      end: "bottom bottom",
      scrub: true,
    },
  })
  .to(video2, { opacity: 0.0, duration: 5, delay: 1 })
  .to(video2, { opacity: 0.5, duration: 10.5, delay: 5 })
  .to(video2, { opacity: 1, duration: 15, delay: 10 });

gsap.registerPlugin(ScrollTrigger);

gsap
  .timeline({
    scrollTrigger: {
      trigger: ".video-container",
      trigger: "#video2",
      start: "top center",
      end: "top top",
      scrub: true,
    },
  })
  .to(overlay, { y: "-100%", duration: 0.4, ease: "power2.out" });

ScrollTrigger.create({
  trigger: ".video-container",
  start: "top top",
  end: "bottom bottom",
  scrub: true,
  snap: {
    snapTo: (progress, self) => {
      const direction = self.direction > 0 ? 1 : 0;
      const nearestSnap = Math.round(progress * 2) / 2;
      return direction === 1
        ? Math.min(nearestSnap + 0.5, 1)
        : Math.max(nearestSnap - 0.5, 0);
    },
    duration: 0.6,
    ease: "power3.inOut",
  },
});

gsap.registerPlugin(ScrollTrigger);

const blackIndicator = document.querySelector(".indicator-item.black");
const whiteIndicator = document.querySelector(".indicator-item.white");

gsap
  .timeline({
    scrollTrigger: {
      trigger: ".video-container",
      start: "top top",
      end: "bottom bottom",
      scrub: true,
    },
  })
  .to(blackIndicator, { height: "50px", duration: 1 })
  .to(whiteIndicator, { height: "120px", duration: 1 }, "<");

const parentHeight = whiteIndicator.offsetHeight;
console.log(parentHeight);

function updateHeight() {
  const afterElement = document.querySelector(".indicator-item.white span");
  console.log(afterElement);
  afterElement.style.height = `${100}%`;
  afterElement.style.transition = `height ${video2.duration}s ease-in-out`;
}

video2.addEventListener("timeupdate", updateHeight);

