import React from "react";
import Header from "../components/common/Header";
import SalonLocator from "../components/common/SalonLocator";
import Footer from "../components/common/Footer";
import Contact from "../components/Contact";
import ScrollToTop from "../components/common/ScrollToTop";
import NearbyOutlets from "../components/common/NearbyOulets";

function ContactPage() {
  return (
    <>
      <ScrollToTop />
      <Header currentPage={"WebsiteHomepage"} />
      <SalonLocator currentPage={"websiteHomepage"} />
      <Contact />
      <NearbyOutlets />
      <Footer currentPage="websiteHomepage" />
    </>
  );
}

export default ContactPage;
