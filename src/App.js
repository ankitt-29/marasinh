import { useEffect } from "react";
import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import ContainerGroup from "./pages/contact";
import HeaderFrame from "./pages/Home";
import FrameHeader from "./pages/FrameHeader";
import Contact from "./pages/contact";
import SimpleSlider from "./SimpleSlider";
import MainFrame from "./pages/MainFrame";
import Test from "./pages/Test";
import Behance from "./pages/behance";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
// import Offcanvas from "./pages/Offcanvas";
import Mobile from "./pages/Mobile";
import Testt from "./pages/Testt";
import CustomSlider from "./pages/CustomSlider";
import FooterMobile from "./pages/FooterMobile";
import MobileMenu from "./pages/mobileMenu";
import OffcanvasMenu from "./pages/OffcanvasMenu";
import WorkOffcanvasMenu from "./pages/WorkOffcanvasMenu";
import AboutOffcanvasMenu from "./pages/AboutOffcanvasMenu";
import ContactOffcanvasMenu from "./pages/ContactOffcanvasMenu";
import MobileBlogs from "./pages/mobileBlogs";
import NewFooter from "./pages/NewFooter";
// import MyComponent from "./pages/MyComponent";
// import Mobile from "./pages/Mobile";
// import HomePage from "./pages/components/HomePage";
function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;



  return (
    <Routes>
      <Route path="/contact" element={<Contact />} />
      <Route path="/" element={<HeaderFrame />} />
      <Route path="/about" element={<FrameHeader />} />
      <Route path="/demo" element={<SimpleSlider />} />
      <Route path="/work" element={<MainFrame />} />
      <Route path="/test" element={<Test />} />
      <Route path="/behance" element={<Behance />} />
      {/* <Route path="/offcanvas" element={<Offcanvas />} />  */}
      <Route path="/blogs" element={<MobileBlogs />} />
      <Route path="/newfooter" element={<NewFooter />} />

 
  











    </Routes>
  );
}
export default App;
