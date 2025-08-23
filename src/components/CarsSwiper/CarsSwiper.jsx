import { Swiper, SwiperSlide } from 'swiper/react';
import Card from './Card';
import 'swiper/css';

export default function CarsSwiper() {
  return (
    <section id='popular' className='p-10'>
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
          <Card brand='Porsche' model='911 Turbo S' img='/popular1.webp' acceleration='2,7' topSpeed='330' fuelGas='66.6' price='373,000' />
        </SwiperSlide>
        <SwiperSlide>
          <Card brand='Porsche' model='911 Carrera 4 GTS' img='/popular2.webp' acceleration='3,0' topSpeed='312' fuelGas='66.6' price='265,700' />
        </SwiperSlide>
        <SwiperSlide>
          <Card brand='Porsche' model='Panamera Turbo S E-Hybrid' img='/popular3.webp' acceleration='2,9' topSpeed='325' fuelGas='79.8' price='265,700' />
        </SwiperSlide>
        <SwiperSlide>
          <Card brand='Porsche' model='Cayenne Turbo GT' img='/popular4.webp' acceleration='3,3' topSpeed='305' fuelGas='89.7' price='303,700' />
        </SwiperSlide>
        <SwiperSlide>
          <Card brand='Porsche' model='911 GT3' img='/popular5.webp' acceleration='3,4' topSpeed='318' fuelGas='64' price='300,400' />
        </SwiperSlide>
      </Swiper>
    </section>
  );
}
