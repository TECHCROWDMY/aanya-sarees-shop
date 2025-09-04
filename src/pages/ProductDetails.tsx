import { useParams } from 'react-router-dom';
import { products } from '@/data/products';
import ProductDetails from '@/components/ProductDetails';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const ProductDetailsPage = () => {
  // Use useParams hook to get the 'slug' from the URL
    const { slug } = useParams();
    const product = products.find(p => p.slug === slug);

  return (
    <>
      <Header />
      <ProductDetails product={product} />
      <Footer />
    </>
  );
};

export default ProductDetailsPage;
