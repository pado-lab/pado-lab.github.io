const tl = gsap.timeline({defaults: {ease: "power2.out"}});

tl.to(".zoom-finger", {
  opacity: "1",
  scale: 1.05,
  y: "0",

  delay: 0.25,
  duration: 0.4,
});

tl.to(".zoom-text", {
  opacity: "1",
  delay: 0.25,
  duration: 0.25,
});

tl.to(".swipe-finger-1", {
  opacity: "1",
  scale: 1.2,
  delay: 0.5,
  duration: 0.25,
});
tl.to(".swipe-finger-2", {
  opacity: "1",
  scale: 1.2,
  delay: 0.05,
  duration: 0.25,
});
// tl.to(".swipe span", {
//   opacity: "1",
//   delay: 0.1,
//   duration: 0.125,
// });

tl.to(".swipe-text", {
  opacity: "1",
  delay: 0.25,
  duration: 0.25,
});

tl.to(".project__loading", {
  opacity: "0",
  delay: 1.5,
  duration: 0.375,
  display: "none",
});

/* HOME PAGE CONTENT ANIMATION */
// tl.fromTo("main", { opacity: 0 }, { opacity: 1, duration: 1 }, "-=1");
