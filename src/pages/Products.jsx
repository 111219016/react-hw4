
import { useParams } from 'react-router';
import Header from "../components/Header"
import Footer from "../components/Footer"
import ProductDetail from "../components/ProductDetail";
import books from "../json/books.json";

function Product() {
   const { id } = useParams();
   const product = books.find(
      (x) => x.id === id
   );

   return (
      <div className="container mx-auto main-layout bg-gray-900">
         <Header
            title="Product Detail"
            slogan="An example made by Vite."
         />
         <ProductDetail product={product} className="content" />
         <Footer className="footer" />
      </div>
   );
}

export default Product;