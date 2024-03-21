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





    </Routes>
  );
}
export default App;
