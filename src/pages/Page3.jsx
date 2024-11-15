const Page3 = () => {
    return ( 
        <div className="h-screen relative bg-white flex items-center justify-center">
            <img className="absolute z-20" src="https://static.wixstatic.com/media/f1c650_23c4e7bcc6294676abdb81290a836c2b~mv2.png/v1/fill/w_1250,h_719,al_c,q_90,usm_0.66_1.00_0.01,enc_auto/try.png" alt="" />
            <video className="relative h-[30vw] w-[50vw] z-10 object-cover mb-4" autoPlay loop muted src="https://video.wixstatic.com/video/f1c650_ec0546cb7b10485c8753983f298c6ea4/360p/mp4/file.mp4"></video>
            <div className="h-0.5 w-2/3 bg-gray-400 top-[40%] absolute  z-0 "></div>
            <div className="h-0.5 w-4/5 bg-gray-400 top-[58%] absolute  z-0 "></div>
            <div className="h-0.5 w-full bg-gray-400 top-[77%] absolute  z-0 "></div>
        </div>
     );
}
 
export default Page3;