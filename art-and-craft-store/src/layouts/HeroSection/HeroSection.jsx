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

      {/* Swiper for Center */}
      <div className="relative w-[380px] h-[400px]">
        <Swiper
          modules={[Autoplay, EffectFade]} // Register modules here
          effect="fade"
          autoplay={{ delay: 3000 }}
          loop={true}
          speed={1000}
        >
          {/* Center Image 1 */}
          <SwiperSlide>
            <div className="relative">
              <img
                src="https://i.ibb.co.com/rdr5GJg/frame1.png"
                alt="Center Image 1"
                className="w-full h-auto object-cover rounded-lg"
              />
              <div className="absolute bottom-2 left-0 right-0 bg-black bg-opacity-50 p-3 rounded-lg">
                <p className="text-white text-center text-sm">This is article 1</p>
                <p className="text-yellow-400 text-center text-lg mt-2">$20.00</p>
              </div>
            </div>
          </SwiperSlide>

          {/* Center Image 2 */}
          <SwiperSlide>
            <div className="relative">
              <img
                src="https://i.ibb.co.com/sVRRScy/frame3.png"
                alt="Center Image 2"
                className="w-full h-auto object-cover rounded-lg"
              />
              <div className="absolute bottom-2 left-0 right-0 bg-black bg-opacity-50 p-3 rounded-lg">
                <p className="text-white text-center text-sm">This is article 2</p>
                <p className="text-yellow-400 text-center text-lg mt-2">$25.00</p>
              </div>
            </div>
          </SwiperSlide>

          {/* Center Image 3 */}
         
        </Swiper>
      </div>

      {/* Right static image */}
      <div className=" h-[300px] flex justify-center items-center">
        <img
          src="https://i.ibb.co.com/ZYHZHfG/slider2.png"
          alt="Right"
          className="object-cover w-full h-full"
        />
      </div>
    </div>
  );
};

export default CustomCarousel;

