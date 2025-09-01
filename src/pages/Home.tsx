import Header from '@/components/Header';
import Hero from '@/components/Hero';
import FeaturedProducts from '@/components/FeaturedProducts';
// import Categories from '@/components/Categories';
import Footer from '@/components/Footer';

const Home = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        {/* <Categories /> */}
        <FeaturedProducts />
      </main>
      <Footer />
    </div>
  );
};

export default Home;
