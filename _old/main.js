import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

document.addEventListener("DOMContentLoaded", () => {
    
  // 1. Initial Hero Animations Staggered
  const tl = gsap.timeline();

  tl.from(".glass-nav", {y: -100, opacity: 0, duration: 0.8, ease: "power3.out"})
    .from(".hero-subtitle", {x: -50, opacity: 0, duration: 0.6, ease: "power3.out"}, "-=0.4")
    .from(".hero-title .user-name", {y: 20, opacity: 0, duration: 0.6, ease: "power3.out"}, "-=0.4")
    .from(".hero-title .type-effect", {y: 20, opacity: 0, duration: 0.6, ease: "power3.out"}, "-=0.4")
    .from(".hero-tagline", {opacity: 0, duration: 0.8}, "-=0.2")
    .from(".cta-buttons .btn", {y: 20, opacity: 0, stagger: 0.2, duration: 0.5}, "-=0.5")
    .from(".image-glass-card", {scale: 0.8, opacity: 0, rotation: 5, duration: 1, ease: "power4.out"}, "-=1");

  // 2. Typing Effect Logic (Basic implementation for the hero section)
  const phrases = ["[Awaiting Name]", "Full Stack Developer", "AI Practitioner"];
  let phraseIndex = 0;
  let textElement = document.querySelector(".type-effect");
  
  // A fancy futuristic typing scramble could be added here, but for now simple morph:
  // The system will be updated dynamically once we have the resume.

  // 3. ScrollTrigger animations for sections
  const sections = gsap.utils.toArray('.section');
  
  sections.forEach((section) => {
    gsap.from(section, {
      scrollTrigger: {
        trigger: section,
        start: "top 80%", // trigger when top of section is 80% down the viewport
        toggleActions: "play none none reverse"
      },
      y: 50,
      opacity: 0,
      duration: 1,
      ease: "power3.out"
    });
  });

  // 4. Stagger timeline items
  gsap.from(".timeline-item", {
    scrollTrigger: {
      trigger: ".timeline",
      start: "top 70%",
    },
    x: -50,
    opacity: 0,
    stagger: 0.3,
    duration: 0.8,
    ease: "back.out(1.7)"
  });

  // 5. Stagger skills tags
  gsap.from(".skill-tag", {
    scrollTrigger: {
      trigger: ".skills-grid",
      start: "top 80%",
    },
    scale: 0,
    opacity: 0,
    stagger: 0.1,
    duration: 0.5,
    ease: "back.out(2)"
  });

});
