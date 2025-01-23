import React from 'react'
import Header from '../components/common/Header'
import Footer from '../components/common/Footer'
import ContactInfo from '../components/common/ContactInfo'
import Banner from '../components/common/Banner'
import BreadCrumb from '../components/common/BreadCrumb'
import enpro from '../assets/bg/enpro.jpg'
import AboutEnpro from '../components/AboutEnpro'
import ProductsAndServices from '../components/ProductsAndServices'
import EnproNumber from '../components/EnproNumber'
import Team from '../components/Team'
import InfrastructureSection from '../components/InfrastructureSection'
import CertificationsSection from '../components/CertificationsSection'
import EnproContact from '../components/EnproContact'
import { Helmet } from 'react-helmet-async'
function SaudiEnproPage() {
  return (
   <>
   <Helmet>
           <title>Saudi Enpro Inustries | Enpro Industries</title>
         </Helmet>
     <Header/>
     <Banner imageUrl={enpro}/>
     <BreadCrumb currentPage={'Enpro Saudi Arabia'}/>
     <AboutEnpro/>
     <ProductsAndServices/>
     <EnproNumber/>
     <Team/>
     <InfrastructureSection/>
     <CertificationsSection/>
     <EnproContact/>
     <ContactInfo/>
     <Footer/>
   </>
  )
}

export default SaudiEnproPage