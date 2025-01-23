import React from 'react'
import Header from '../components/common/Header'
import Banner from '../components/common/Banner'
import ContactInfo from '../components/common/ContactInfo'
import Footer from '../components/common/Footer'
import careerbanner from '../assets/bg/career.jpg'
import Career from '../components/Career'
import { Helmet } from 'react-helmet-async'

function CareerPage() {
  return (
    <> 
    <Helmet>
      <title>Careers | Enpro Industries</title>
    </Helmet>
      <Header/>
      <Banner imageUrl={careerbanner} title={'ENPRO CAREERS'}/>
      <Career/>
      <ContactInfo/>
      <Footer/>
    </>
  )
}

export default CareerPage