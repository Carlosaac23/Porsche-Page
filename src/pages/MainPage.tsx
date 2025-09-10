import Header from '@/components/Header';
import About from '@/components/About';
import CarsSwiper from '@/components/CarsSwiper';
import Features from '@/components/Features';
import Home from '@/components/Home';
import ScrollToTopButton from '@/components/ScrollUp';
import Offers from '@/components/Subscribe';
import Footer from '@/components/Footer';

export default function MainPage() {
  return (
    <>
      <ScrollToTopButton />
      <Header />
      <Home />
      <About />
      <CarsSwiper />
      <Features />
      <Offers />
      <Footer />
    </>
  );
}
