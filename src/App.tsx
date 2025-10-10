import About from '@/components/About';
import CarsSwiper from '@/components/CarSwiper';
import Features from '@/components/Features';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import Home from '@/components/Home';
import ScrollTopButton from '@/components/ScrollUp';
import Offers from '@/components/Subscribe';

export default function App() {
	return (
		<>
			<ScrollTopButton />
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
