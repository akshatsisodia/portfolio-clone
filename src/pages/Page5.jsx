import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";


const Page5 = () => {

    gsap.registerPlugin(ScrollTrigger)
    useGSAP(function(){
        gsap.from('.rotateText2',{
            transform:'rotateX(-80deg)',
            duration:1,
            opacity:0,
            stagger:1,
            scrollTrigger:{
                trigger:'.rotateText2',
                // markers:true,
                start:'top 80%',
                end:'top -280%',
                scrub:2
            }
            
        })
    })
    return ( 
        <div id="page5-section1" className="text-center text-black bg-white p-10">
        <div className="rotateText2 mt-16">
          <h1 className="text-[42vw] text-black font-[anzo2] uppercase leading-[33vw]">HELPING</h1>
        </div>
        <div className="rotateText2">
          <h1 className="text-[42vw] text-[#9B9B9B] font-[anzo2] uppercase leading-[33vw]">MY</h1>
        </div>
        <div className="rotateText2">
          <h1 className="text-[42vw] text-black font-[anzo2] uppercase leading-[33vw]">CLIENTS</h1>
        </div>
        <div className="rotateText2">
          <h1 className="text-[42vw] text-black font-[anzo2] uppercase leading-[33vw]">TO ACHIEVE</h1>
        </div>
        <div className="rotateText2">
          <h1 className="text-[42vw] text-[#9B9B9B] font-[anzo2] uppercase leading-[33vw]">THEIR</h1>
        </div>
        <div className="rotateText2">
          <h1 className="text-[42vw] text-black font-[anzo2] uppercase leading-[33vw]">DREAMS</h1>
        </div>
        </div>
     );
}
 
export default Page5;