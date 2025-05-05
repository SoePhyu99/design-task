import CustomServices from "./components/CustomServices";
import Explore from "./components/Explore";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Services from "./components/Services";
import Testimonials from "./components/Testimonials";

const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <CustomServices />
      <Services />
      <Explore />
      <Testimonials />
      <Footer />
    </>
  );
};

export default App;
