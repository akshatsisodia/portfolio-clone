import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Page1bottom = () => {
useGSAP(function(){
  gsap.to("#banner img",{
    rotate:360,
    duration:6,
    repeat:-1,
    ease:'linear'
  })
  gsap.from("#upside-2",{
    y:20,
    opacity:0,
    duration:2,
    delay:1.5,
    stagger:1
  })
})

  return ( <div className="absolute left-0 bottom-0 w-full  flex items-end justify-between px-14 py-10">
    <div id="upside-2" className="p-2">
      <h2 className="text-[1.3vw] font-[anzo4]">BRAND DESIGN | WEBSITE DESIGN</h2>
      <h3 className="text-[1.3vw] leading-[1vw] font-[anzo3] text-gray-400">BESPOKE FREELANCE</h3>
    </div>
    <div id="banner">
      <img className="mb-5" src="https://static.wixstatic.com/media/f1c650_ed71078001ef401889b71537cca76dc4~mv2.png/v1/fill/w_101,h_101,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/cssda-wotd-white.png" alt="" />
      <img src="https://static.wixstatic.com/media/f1c650_64de2af00f41462e8aecc3d04537f9b4~mv2.png/v1/fill/w_101,h_101,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/EN_legend_large.png" alt="" />
    </div>
  </div> )
};

export default Page1bottom;
