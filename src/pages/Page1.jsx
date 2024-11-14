import { useRef } from "react";
import Page1bottom from "../components/Page1bottom";
import TiltText from "../components/TiltText";
import { useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Page1 = () => {

  const tiltRef=useRef(null);
  const [xVal, setXVal] = useState(0);
  const [yVal, setYVal] = useState(0);
  
  const movingText=(e)=>{

     setXVal((e.clientX-tiltRef.current.getBoundingClientRect().x -(tiltRef.current.getBoundingClientRect().width/2))/40)
     setYVal(-(e.clientY-tiltRef.current.getBoundingClientRect().y -(tiltRef.current.getBoundingClientRect().height/2))/10)

     
  }

  useGSAP(function(){
    gsap.to(tiltRef.current,{
      transform:`rotateX(${yVal}deg) rotateY(${xVal}deg)`,
      duration:5,
      ease:'power4.out'
    })
  },[xVal,yVal])

 useGSAP(function(){
  gsap.from("#downside",{
    opacity:0,
    y:20,
    duration:1,
    delay:1.5,
    stagger:1
  })
 })

  return (
    <div onMouseMove={(e)=>{
      movingText(e)
    }} className="h-screen bg-white p-3">
      <div id="page1-in" className="shadow-xl p-10 shadow-gray-700 h-full w-full bg-cover bg-[url(https://static.wixstatic.com/media/f1c650_678c0ceab5194893872c60fa3be4bcdc~mv2.jpg/v1/fill/w_3714,h_1680,fp_0.69_0.64,q_90,usm_0.66_1.00_0.01,enc_auto/ANZO.jpg)] rounded-[50px] ">
      <div id="downside" className="p-2"><i  className="ri-search-2-line text-6xl p-5 h-10"></i></div>
      <TiltText abc={tiltRef}/>
      <Page1bottom/>
      </div>
    </div>
  );
};

export default Page1;
