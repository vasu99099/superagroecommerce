import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import Hero from '../components/sections/Hero';
import FeaturedProducts from '../components/sections/FeaturedProducts';
import Categories from '../components/sections/Categories';
import BlogSection from '../components/sections/BlogSection';
import Testimonials from '../components/sections/Testimonials';
import Newsletter from '../components/sections/Newsletter';
import AgroHeader from '../components/layout/Header';

export default function Home() {
  return (
    <div className="min-h-screen ">
      <AgroHeader />
      <main>
        <Hero />
        <Categories />
        <FeaturedProducts />
        <Testimonials />
        <BlogSection />
        <Newsletter />
      </main>
      <Footer />
    </div>
  );
}
