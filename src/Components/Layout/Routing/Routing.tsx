import { Route, Routes } from "react-router-dom";
import "./Routing.css";
import App from "../../../App";
import Page404 from "../../Pages/Page404/Page404";
import About from "../../Pages/About/About";
import Home from "../../Pages/Home/Home";
import CounrtryList from "../../Pages/CounrtryList/CounrtryList";

function Routing(): JSX.Element {
  return (
    <div className="Routing">
      <Routes>
        <Route path="/" element={<App />} />
          <Route index element={<Home/>} />  
          <Route path="home" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="countries" element={<CounrtryList />} /> 
          <Route path="*" element={<Page404 />} />    
      </Routes>
    </div>
  );
}

export default Routing;
