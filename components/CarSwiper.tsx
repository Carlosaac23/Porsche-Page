'use client';

import { useId } from 'react';
import Balancer from 'react-wrap-balancer';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import { cars } from '@/lib/cars';

import Card from './Card';

export default function CarsSwiper() {
  const id = useId();
  return (
    <section className='my-20' id={id}>
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
        {cars?.map(car => (
          <SwiperSlide>
            <Card
              key={car.model}
              brand={car.brand}
              model={car.model}
              img={car.img}
              acceleration={car.acceleration}
              topSpeed={car.topSpeed}
              fuelGas={car.fuelGas}
              price={car.price}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
