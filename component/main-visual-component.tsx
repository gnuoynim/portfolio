import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
const MainVisualComponent = () => {
  return (
    <div className="mainVisual">
      <div>
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
          slidesPerView={1}
          loop={true}
          autoplay={{
            delay: 2500,
          }}
          speed={1200}
        >
          <SwiperSlide>
            <Image src="/images/img1.jpeg" alt="" width="400" height="400" />
          </SwiperSlide>
          <SwiperSlide>
            <Image src="/images/img2.jpeg" alt="" width="400" height="400" />
          </SwiperSlide>
          <SwiperSlide>
            <Image src="/images/img3.jpeg" alt="" width="400" height="400" />
          </SwiperSlide>
          <SwiperSlide>
            <Image src="/images/img4.jpeg" alt="" width="400" height="400" />
          </SwiperSlide>
        </Swiper>
        <div className="path">
          <svg className="path__circle" viewBox="0 0 200 200">
            <path
              d="M 100, 100 m -75, 0 a 75,75 0 1,0 150,0 a 75,75 0 1,0 -150,0"
              id="path"
            />
            <text>
              <textPath href="#path">
                Whatever you do,do it well Kim Minyoung a Front End Developer Portfolio
              </textPath>
            </text>
          </svg>
        </div>
      </div>

      <p>
        <span>Hello,</span> I'm <br />a Front End Developer
      </p>
    </div>
  );
};

export default MainVisualComponent;
