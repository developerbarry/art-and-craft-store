import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";  


const CustomCarousel = () => {
  return (
    <div className="flex justify-between items-center gap-8">
      {/* Left static image */}
      <div className=" h-[300px] flex justify-center items-center">
        <img
          src="https://i.ibb.co.com/gZGs1xH/slider1.png"
          alt="Left"
          className="object-cover w-full h-full"
        />
      </div>


    </div>
  );
};

export default CustomCarousel;

