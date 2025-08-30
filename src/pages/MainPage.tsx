import Header from '@/components/Welcome/Header';
import About from '@/components/About/About';
import CarsSwiper from '@/components/CarsSwiper/CarsSwiper';
import Features from '@/components/Features/Features';
import Home from '@/components/Welcome/Home';
import ScrollToTopButton from '@/components/ScrollUp';
import Offers from '@/components/Subscribe/Offers';
import Footer from '@/components/Footer/Footer';

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
