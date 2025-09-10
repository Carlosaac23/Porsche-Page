import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import Card from '../Card';
import Balancer from 'react-wrap-balancer';
import 'swiper/css';
import 'swiper/css/pagination';

export default function CarsSwiper() {
  return (
    <section className='my-20' id='popular'>
      <h2 className='mb-20 text-center text-2xl font-semibold sm:text-4xl'>
        <Balancer>Choose your car From Porsche brand</Balancer>
      </h2>
      <Swiper
        style={
          {
            '--swiper-pagination-color': '#fafafa',
            '--swiper-pagination-bullet-inactive-color': '#fafafa',
            '--swiper-pagination-bullet-inactive-opacity': '0.2',
          } as React.CSSProperties
        }
        modules={[Pagination]}
        spaceBetween={60}
        slidesPerView={3}
        loop={true}
        pagination={{ clickable: true }}
        breakpoints={{
          0: { slidesPerView: 1 },
          600: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
          1536: { slidesPerView: 4 },
          1920: { slidesPerView: 5 },
        }}
      >
        <SwiperSlide>
          <Card
            brand='Porsche'
            model='911 Turbo S'
            img='/popular1.webp'
            acceleration='2,7'
            topSpeed='330'
            fuelGas='66.6'
            price='373,000'
          />
        </SwiperSlide>
        <SwiperSlide>
          <Card
            brand='Porsche'
            model='911 Carrera 4 GTS'
            img='/popular2.webp'
            acceleration='3,0'
            topSpeed='312'
            fuelGas='66.6'
            price='265,700'
          />
        </SwiperSlide>
        <SwiperSlide>
          <Card
            brand='Porsche'
            model='Panamera Turbo S E-Hybrid'
            img='/popular3.webp'
            acceleration='2,9'
            topSpeed='325'
            fuelGas='79.8'
            price='265,700'
          />
        </SwiperSlide>
        <SwiperSlide>
          <Card
            brand='Porsche'
            model='Cayenne Turbo GT'
            img='/popular4.webp'
            acceleration='3,3'
            topSpeed='305'
            fuelGas='89.7'
            price='303,700'
          />
        </SwiperSlide>
        <SwiperSlide>
          <Card
            brand='Porsche'
            model='911 GT3'
            img='/popular5.webp'
            acceleration='3,4'
            topSpeed='318'
            fuelGas='64'
            price='300,400'
          />
        </SwiperSlide>
        <SwiperSlide>
          <Card
            brand='Porsche'
            model='Taycan GTS'
            img='/popular6.webp'
            acceleration='3,3'
            topSpeed='250'
            fuelGas='Electric'
            price='207,700'
          />
        </SwiperSlide>
      </Swiper>
    </section>
  );
}
