import React from "react";
import Header from "../components/common/Header";
import Banner from "../components/common/Banner";
import BreadCrumb from "../components/common/BreadCrumb";
import GeneralAbout from "../components/GeneralAbout";
import Footer from "../components/common/Footer";
import aboutBanner from "../assets/bg/aboutbg.jpg";
import ScrollToTop from "../components/common/ScrollToTop";
import VisionMissionValues from '../components/VisionMissionValues'
import EnproValues from '../components/EnproValues'
import TeamSection from '../components/TeamSection'
import EngineeringCapability from '../components/EngineeringCapability'
import CertificationApprovals from '../components/CertificationApprovals'
import CorporateSocial from '../components/CorporateSocial'
import PoliciesSection from '../components/PoliciesSection'
import { Helmet } from "react-helmet-async";
import ContactInfo from "../components/common/ContactInfo";
import Timeline from "../components/Timeline";

function AboutUsPage() {
  return (
    <>
      <Helmet>
        <title>About Us | Enpro Industries</title>
      </Helmet>
      <ScrollToTop />
      <Header />
      <Banner imageUrl={aboutBanner} title={"ABOUT ENPRO INDUSTRIES"} isAboutUs={true} />
      <BreadCrumb currentPage={"About US"} />
      <GeneralAbout />
      <VisionMissionValues/>
      <Timeline/>
      <EnproValues/>
      <TeamSection/>
      <EngineeringCapability/>
      <CertificationApprovals/>
      <CorporateSocial/>
      <PoliciesSection/>
      <ContactInfo/>
      <Footer />
    </>
  );
}

export default AboutUsPage;
