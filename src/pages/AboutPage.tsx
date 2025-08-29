import Footer from '../components/Footer/Footer';
import Header from '../components/Welcome/Header';

export default function AboutPage() {
  return (
    <>
      <Header />
      <section>
        <h1 className='text-center text-4xl'>About Page</h1>
      </section>
      <div className='fixed bottom-0 left-0 right-0'>
        <Footer />
      </div>
    </>
  );
}
