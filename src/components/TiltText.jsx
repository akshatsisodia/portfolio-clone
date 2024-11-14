import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const TiltText = (props) => {

// const tl=gsap.timeline()

useGSAP(function(){
  gsap.from("#upside",{
    opacity:0,
    y:20,
    duration:1,
    delay:1.5,
    stagger:1
  })
})

  return (
    <div ref={props.abc} id="tiltText" className="mt-12 p-6 ">
    <h1 className="text-[4.2vw] uppercase font-[anzo1] leading-[6vw]">i am <div id="upside" className="inline-block"><span className="text-black">DARK MODE<span>™</span></span></div></h1>
    <h1 className="text-[8.2vw] uppercase font-[anzo1] leading-[4vw]">DESIGNER</h1>
    <h1 className="text-[4.2vw] uppercase font-[anzo1] leading-[7vw]">TO HIRE</h1>
  </div>
  );
};

export default TiltText;
