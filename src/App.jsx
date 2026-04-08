import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { useState } from 'react';
import 'remixicon/fonts/remixicon.css'
const App = () => {

  const [showContent, setShowContent] = useState(false);

  useGSAP(()=>{
    const tl = gsap.timeline()

    tl.to(".vi-mask-group",{
      rotate:10,
      duration:2,
      ease:"Power4.easeInOut",
      transformOrigin: "50% 50%"
    })
    .to(".vi-mask-group",{
      scale:10,
      duration:2,
      delay:-1.8,
      ease:"Expo.easeInOut",
      transformOrigin:"50% 50%",
      opacity:0,
      onUpdate: function(){
        if(this.progress()>=.9){
          document.querySelector(".svg").remove();
            setShowContent(true);
            this.kill();
        }
      }
    })
     
  });

  useGSAP(()=>{
    if(!showContent)return;

    const main = document.querySelector(".main");

    main?.addEventListener("mousemove",function(e){
       const xMove = (e.clientX/window.innerWidth-.5)*40
      //  const yMove = (e.clientY/window.innerHeight-.5)*40
      gsap.to(".images .text",{
        x: `${xMove*.5}%`
      })
      gsap.to(".sky",{
        x: xMove
      })
      gsap.to(".bg",{
        x: xMove
      })
      
    })
  },[showContent]);

  return (
     <>
     <div className="svg flex items-center justify-center fixed top-0 left-0 z-100 w-full h-screen overflow-hidden bg-black">
        <svg viewBox="0 0 800 600" preserveAspectRatio="xMidYMid slice">
          <defs>
            <mask id="viMask">
              <rect width="100%" height="100%" fill="black" />
              <g className="vi-mask-group">
                <text
                  x="50%"
                  y="50%"
                  fontSize="250"
                  textAnchor="middle"
                  fill="white"
                  dominantBaseline="middle"
                  fontFamily="Arial Black"
                >
                  VI
                </text>
              </g>
            </mask>
          </defs>
          <image
            href="./bg.png"
            width="100%"
            height="100%"
            preserveAspectRatio="xMidYMid slice"
            mask="url(#viMask)"
          />
        </svg>
      </div>
      {showContent &&
        <div className='main w-full'>
           <div className="landing w-full h-screen bg-black">
            <div className="navbar absolute top-0 left-0 z-100 w-full py-4 px-8 ">
              <div className="logo flex gap-5 items-center ">
                <div className="lines flex flex-col gap-1 text-white">
                  <div className="line w-8 h-1 bg-white"></div>
                  <div className="line w-6 h-1 bg-white"></div>
                  <div className="line w-4 h-1 bg-white"></div>
                </div>
                <h3 className='text-3xl text-white'>Rockstar</h3>
              </div>
            </div>
            
            <div className="images relative w-full h-screen  overflow-hidden">
              <img  className='absolute sky scale-[1.1] top-0 left-0 w-full h-full object-cover' src="./sky.png" alt="" />
              <img className='absolute bg scale-[1.1] top-0 left-0 w-full h-full object-cover' src="./bg.png" alt="" />
              <div className="text absolute top-0 left-1/2 -translate-x-1/2 text-white">
              <h1 className='text-7xl leading-none -ml-30'>Grand</h1>
              <h1 className='text-7xl leading-none ml-10'>Theft</h1>
              <h1 className='text-7xl leading-none -ml-20'>Auto</h1>
            </div>
              <img className='absolute character -bottom-[63%] left-1/2 -translate-x-1/2 scale-[.7]' src="./girlbg.png" alt="" />
              
            </div>
            <div className="btmbar absolute bottom-0 left-0 w-full py-7 px-8 bg-linear-to-t from-black to-transparent">
              <div className="flex gap-4 items-center">
                <i className=" text-2xl text-white ri-arrow-down-line"></i>
                <h3 className='text-md text-white'>Scroll Down</h3>
              </div>
              <img className='h-16.25 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2' src="./ps5.png" alt="" />
            </div>
           </div>
           <div className="w-full h-screen flex items-center justify-center bg-black text-white">
            <div className="cntnr flex  w-full h-[80%] overflow-hidden">
              <div className="girl relative h-full w-1/2">
              <img className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2' src="./imag.png" alt="" />
            </div>
            <div className="rightcontent w-1/2">
            <h1 className='text-8xl '>Sill Running,</h1>
            <h1 className='text-8xl '>Sill  Thefting</h1>
              <p className='mt-10 font-[Helvetica_Now_Display]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem ullam ipsum a maxime ducimus, blanditiis illum tenetur asperiores ea suscipit vero cumque nobis minima sunt amet facere aperiam harum maiores id autem consequuntur. Odit voluptas sit quaerat labore! Possimus, labore?</p>
              <p className='mt-3 font-[Helvetica_Now_Display]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut rem pariatur doloremque!</p>
              <button className='bg-amber-300 px-10 py-4 text-black mt-10 text-lg'>Download Now</button>
            </div>
           </div>
            </div>
            
        </div>
      }
     </>
  )
}

export default App