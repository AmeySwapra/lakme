import React from 'react'
import Header from '../components/common/Header'
import SkidSystems from '../components/SkidSystems'
import ContactInfo from '../components/common/ContactInfo'
import Footer from '../components/common/Footer'
import { Helmet } from 'react-helmet-async'

function EngineerdSkidPage() {
  return (
    <>
    <Helmet>
            <title>Engineered Skid System | Enpro Industries</title>
          </Helmet>
      <Header/>
      <SkidSystems/>
      <ContactInfo/>
      <Footer/>
    </>
  )
}

export default EngineerdSkidPage