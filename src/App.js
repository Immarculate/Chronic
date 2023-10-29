import Navbar from './components/Navbar';
import './App.css';
import Nav from './components/Nav';
import Home from './components/Home';
import FirstSlide from "./components/FirstSlide";
import SecondSlide from "./components/SecondSlide";
import { motion } from "framer-motion";
import ThirdSlide from "./components/ThirdSlide";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Products from "./components/Products"
import Footer from './components/Footer';
import Partners from './components/Partners';


function App() {
  return (
    <motion.div className="">
      <Navbar />
      <Nav />
      <Home />
      <Products />
      <Partners />
      <Footer />
      <h1 className='font-bold text-white'>Hello world!</h1>
    </motion.div>
  );
}

export default App;
