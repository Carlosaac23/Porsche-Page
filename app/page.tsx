import About from '@/components/About';
import CarsSwiper from '@/components/CarSwiper';
import Features from '@/components/Features';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import ScrollTopButton from '@/components/ScrollUp';
import Offers from '@/components/Subscribe';

export default function Home() {
  return (
    <>
      <ScrollTopButton />
      <Header />
      <Hero />
      <About />
      <CarsSwiper />
      <Features />
      <Offers />
      <Footer />
    </>
  );
}
