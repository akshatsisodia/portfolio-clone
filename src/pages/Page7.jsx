import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useState } from "react";

const Page7 = () => {
  useGSAP(function () {
    gsap.to("#rotate-png img", {
      rotate: 360,
      duration: 6,
      repeat: -1,
      ease: "linear",
    });
    gsap.to("#rotate-png2 img", {
      rotateY: 360,
      duration: 6,
      repeat: -1,
      ease: "linear",
    });

    gsap.to("#rotate-png3 img", {
      y: -10,
      duration: 3,
      repeat: -1,
      ease: "elastic.inOut", // change to any easing function above
    });
  });

  return (
    <div className="h-[165vh] relative bg-white p-2">
      <div className=" h-full w-full bg-black rounded-[50px] flex items-center justify-center p-10">
        <div className=" w-full flex items-start justify-between leading-[16vw] mb-[28vw]">
          <h1 className="text-[20vw] font-[anzo2] uppercase">
            {" "}
            <span className="text-[#9B9B9B]">how</span>
            <br />
            can
          </h1>
          <h1 className="text-[20vw] font-[anzo2] uppercase text-right">
            i help <br /> you
          </h1>
        </div>
        <img className="absolute h-[56vw] opacity-50" src="https://static.wixstatic.com/media/f1c650_e5c1c4b281ea418a8663a17e66f283f1~mv2.png/v1/fill/w_777,h_668,al_c,q_90,enc_auto/triangle%203.png" alt="" />
      </div>
      <div className="h-[10vw] w-[90%] text-left absolute top-[40vw] flex items-start justify-between px-12 mt-5">
        <p className="w-[30%] font-[anzo1]">
          <span className="text-[#9B9B9B]">I am a self-taught web and brand designer with a passion for creating unique and timeless</span> masterpieces for ambitious professionals, entrepreneurs, artists, and boutique businesses.
          <br />
          <br />
          Bespoke Freelance <span className="text-[#9B9B9B]">for agencies.</span>
        </p>
        <p className="w-[30%] font-[anzo1]">
          <span className="text-[#9B9B9B]">With a background in strategic marketing and acknowledged expertise in web development,</span> I aim to minimize my client's resources spent on macro and micro-management, marketing research, and hiring a whole team of a larger agency.
        </p>
        <p className="w-[28%] font-[anzo1]">
          My mission is to drive exceptional growth for my clients by increasing their brand appearance <span className="text-[#9B9B9B]">, defining their identity, and engaging customers through captivating black-and-white aesthetics with a modern, luxurious, and minimalistic touch.</span>
        </p>
      </div>
      <div className="w-[85%] absolute top-[60vw] flex items-center justify-between">
        <div id="rotate-png" className="flex items-center justify-center gap-5 px-10">
          <img src="https://static.wixstatic.com/media/f1c650_67833facdc7a47d5aae7870d4fb7fc3e~mv2.png/v1/fill/w_85,h_85,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/SUN.png" alt="" />
          <h3 className="text-[4vw] font-[anzo2]">DESIGN</h3>
          <h6 className="text-4xl font-[anzo2]">01</h6>
        </div>
        <div id="rotate-png2" className="flex items-center justify-center gap-5 px-10">
          <img src="https://static.wixstatic.com/media/f1c650_027515148725478cbb3a91eca452cabf~mv2.png/v1/fill/w_82,h_82,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/EARTH.png" alt="" />
          <h3 className="text-[4vw] font-[anzo2]">DEVELOPMENT</h3>
          <h6 className="text-4xl font-[anzo2]">02</h6>
        </div>
        <div id="rotate-png3" className="flex items-center justify-center gap-5 px-10">
          <img src="https://static.wixstatic.com/media/f1c650_b0000fd9a706421aa0ea84da62ae3354~mv2.png/v1/fill/w_82,h_82,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/START%20UP.png" alt="" />
          <h3 className="text-[4vw] font-[anzo2]">BRANDING</h3>
          <h6 className="text-4xl font-[anzo2]">03</h6>
        </div>
        <div className="absolute top-[90%] p-10 font-[anzo3]">
          <h4 className="text-[#9B9B9B]">GOT A PROJECT?</h4>
          <h4 className="text-[#9B9B9B]">
            THEN PLEASE <span className="font-[anzo4]">CONTACT ME</span>
          </h4>
        </div>
      </div>
    </div>
  );
};

export default Page7;
