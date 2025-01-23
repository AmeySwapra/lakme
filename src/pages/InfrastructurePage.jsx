import React from 'react'
import Header from '../components/common/Header'
import Footer from '../components/common/Footer'
import ContactInfo from '../components/common/ContactInfo'
import Banner from '../components/common/Banner'
import BreadCrumb from '../components/common/BreadCrumb'
import infra from '../assets/bg/infra.jpg'
import InfraTabs from '../components/InfraTabs'
import { Helmet } from 'react-helmet-async'
function InfrastructurePage() {
  return (
    <>
    <Helmet>
            <title>Infrastructure | Enpro Industries</title>
          </Helmet>
      <Header/>
      <Banner imageUrl={infra} title={'INFRASTRUCTURE'}/>
      <BreadCrumb currentPage={'Infrastructure'}/>
      <InfraTabs/>
      <ContactInfo/>
      <Footer/>
    </>
  )
}

export default InfrastructurePage