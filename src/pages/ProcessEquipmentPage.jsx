import React from 'react'
import Header from '../components/common/Header'
import ProcessEquipmentSection from '../components/ProcessEquipmentSection'
import ContactInfo from '../components/common/ContactInfo'
import Footer from '../components/common/Footer'
import { Helmet } from 'react-helmet-async'

function ProcessEquipmentPage() {
  return (
    <>
    <Helmet>
            <title>Process equipment | Enpro Industries</title>
          </Helmet>
      <Header/>
      <ProcessEquipmentSection/>
      <ContactInfo/>
      <Footer/>
    </>
  )
}

export default ProcessEquipmentPage