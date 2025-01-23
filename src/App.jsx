import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ContactPage from "./pages/ContactPage";
import AboutUsPage from "./pages/AboutUsPage";
import CareerPage from "./pages/CareerPage";
import InfrastructurePage from "./pages/InfrastructurePage";
import SaudiEnproPage from "./pages/SaudiEnproPage";
import EngineerdSkidPage from "./pages/EngineerdSkidPage";
import RenewablesPage from "./pages/RenewablesPage";
import ProcessEquipmentPage from "./pages/ProcessEquipmentPage";
import WebsiteHomePage from "./pages/WebsiteHomePage";
import SocialPage from "./pages/SocialPage";
import OffersPage from "./pages/OffersPage";
import GalleryPage from "./pages/GalleryPage";
import MapPage from "./pages/MapPage";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/about-us" element={<AboutUsPage />} />
          <Route path="/career" element={<CareerPage />} />
          <Route path="/infrastructure" element={<InfrastructurePage />} />
          <Route path="/enpro-saudi-arabia" element={<SaudiEnproPage />} />
          <Route path="/engineered-skid-system" element={<EngineerdSkidPage />} />
          <Route path="/renewables" element={<RenewablesPage />} />
          <Route path="/process-system" element={<ProcessEquipmentPage />} />
          <Route path='/website-homepage' element={<WebsiteHomePage/>} />
          <Route path='/social-timeline' element={<SocialPage/>} />
          <Route path="/offers" element={<OffersPage />} />
          <Route path='/gallery' element={<GalleryPage/>} />
          <Route path='/map' element={<MapPage/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
