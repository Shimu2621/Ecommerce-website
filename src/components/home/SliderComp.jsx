//import Swiper React components
//import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, FreeMode, Navigation, Pagination } from "swiper/modules";
import { useEffect, useState } from "react";
import axios from "axios";

const SliderComp = () => {
  const [sliders, setSliders] = useState([]);

  useEffect(() => {
    axios
      .get("https://staging-be-ecom.techserve4u.com/api/settings/getsliders")
      .then((res) => setSliders(res.data?.sliders))
      .catch((err) => console.log(err));
  }, []);

  //   console.log("sliders", sliders);
  return (
    <div className="home_slider">
      <Swiper
        pagination={{
          dynamicBullets: true,
        }}
        modules={[Pagination, FreeMode, Autoplay]}
        className="mySwiper"
        loop={true}
        freeMode={true}
        autoplay={{ delay: 3000 }}
        // sliderPerView={2}
      >
        {sliders?.map((slider) => (
          <SwiperSlide key={slider?.index}>
            <img src={slider?.image} alt={`Image-${slider?.title}`} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default SliderComp;
