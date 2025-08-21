import { Swiper, SwiperSlide } from 'swiper/react';
import Card from './Card';
import 'swiper/css';

export default function CarsSwiper() {
  return (
    <section className='p-10'>
      <Swiper
        spaceBetween={60}
        slidesPerView={3}
        loop={true}
        breakpoints={{
          0: { slidesPerView: 1 },
          367: { slidesPerView: 1 },
          640: { slidesPerView: 2 },
          768: { slidesPerView: 3 },
          1024: { slidesPerView: 4 },
        }}
      >
        <SwiperSlide>
          <Card />
        </SwiperSlide>
        <SwiperSlide>
          <Card />
        </SwiperSlide>
        <SwiperSlide>
          <Card />
        </SwiperSlide>
        <SwiperSlide>
          <Card />
        </SwiperSlide>
        <SwiperSlide>
          <Card />
        </SwiperSlide>
        <SwiperSlide>
          <Card />
        </SwiperSlide>
      </Swiper>
    </section>
  );
}
