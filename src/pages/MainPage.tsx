import Header from '../components/Welcome/Header';
import About from '../components/About/About';
import CarsSwiper from '../components/CarsSwiper/CarsSwiper';
import Features from '../components/Features/Features';
import Home from '../components/Welcome/Home';

export default function MainPage() {
  return (
    <>
      <Header />
      <Home />
      <About />
      <CarsSwiper />
      <Features />
    </>
  );
}
