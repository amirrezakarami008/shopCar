import SwiperComponent from "./components/Section1_Slider/SwiperComponent";
import CarImage from './components/S_CarImage/CarImage.js'
import Contact from "./components/ContactUs/Contact";
export default function Home() {
  return (
    <div>
      <SwiperComponent/>
      <CarImage/>
      <Contact/>
    </div>
  );
}
