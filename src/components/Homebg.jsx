import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import AboutPage from './AboutPage';
import Navbar from './Navbar';

const CarouselComponent = () => {
  return (
    <>
        <Navbar></Navbar>
    
    <div className="w-[100%] h-[100vh] bg-hero-pattern2 object-contain bg-cover bg-no-repeat " >
    <Carousel showThumbs={false} autoPlay infiniteLoop showArrows={false} showIndicators={false} showStatus={false}>
      <div className="flex flex-col  justify-center items-center text-[60px] h-[100vh] w-[100%] text-[#000000] font-playFair font-extrabold ">
        <div>Capture Ideas, Create Masterpieces</div>
      </div>
      <div className="flex flex-col  justify-center items-center text-[60px] h-[100vh] w-[100%]  text-[#000000] font-playFair font-extrabold ">
        <div>Notes that Inspire</div>
        
      </div>
      <div className="flex flex-col  justify-center items-center text-[60px] h-[100vh] w-[100%]  text-[#000000] font-playFair font-extrabold ">
        <div>Write. Reflect. Remember.</div>
      </div>
      <div className="flex flex-col  justify-center items-center text-[60px] h-[100vh] w-[100%] text-[#000000] font-playFair font-extrabold ">
        <div>From Mind to Paper</div>
      </div>
    </Carousel>
    <div>
        <AboutPage></AboutPage>
    </div>
    </div>
    </>
  );
};

export default CarouselComponent;
