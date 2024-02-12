import { gsap } from "gsap";
import SplitType from "split-type";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// const text = new SplitType("#title");
//

const ourText = new SplitType("#ptag", { types: "chars" });
const chars = ourText.chars;
const newValue = document.getElementById("new");

gsap.fromTo(
  newValue,
  {
    opacity: 0,
    y: 50,
  },
  {
    opacity: 1,
    duration: 2,
    stagger: 0.05,
    y: 0,
  }
);

gsap.fromTo(
  chars,
  {
    y: 100,
    opacity: 0,
  },
  {
    y: 0,
    opacity: 1,
    stagger: 0.05,
    duration: 2,
    ease: "power4.out",
  }
);

gsap.to("#title", {
  y: 0,
  stagger: 0.05,
  duration: 2,
});

gsap.to("#yellow", {
  y: 200,
  delay: 1.5,
  duration: 3,
});

const Hover = document.getElementById("hover");
const About = document.getElementById("about");

Hover.addEventListener("mouseover", () => {
  About.style.height = "50vh";
});
