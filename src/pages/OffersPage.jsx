import React from 'react'
import Header from '../components/common/Header'
import Offers from '../components/Offers'
import Footer from '../components/common/Footer'
import SalonLocator from '../components/common/SalonLocator'
import ScrollToTop from '../components/common/ScrollToTop'

function OffersPage() {
  return (
    <>
      <ScrollToTop/>
      <Header currentPage={'WebsiteHomepage'}/>
      <SalonLocator currentPage={'websiteHomepage'}/>
      <Offers/>
      <Footer currentPage="websiteHomepage" />
    </>
  )
}

export default OffersPage