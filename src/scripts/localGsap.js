import { gsap } from "gsap";

import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// const text = new SplitType("#title");
//

gsap.to("#title", {
  y: 0,
  x: 400,
  stagger: 0.05,
  duration: 2,
  transform: 115,
  transition: 0.5,
});

gsap.to("#yellow", {
  y: 200,
  delay: 1.5,
  duration: 3,
});
