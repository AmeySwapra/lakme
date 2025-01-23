import React from 'react'
import Map from '../components/Map'
import ScrollToTop from '../components/common/ScrollToTop'
import Header from '../components/common/Header'
import SalonLocator from '../components/common/SalonLocator'
import Footer from '../components/common/Footer'
import NearbyOutlets from '../components/common/NearbyOulets'

function MapPage() {
  return (
    <>
      <ScrollToTop />
      <Header currentPage={"WebsiteHomepage"} />
      <SalonLocator currentPage={"websiteHomepage"} />
      <Map/>
      <NearbyOutlets />
      <Footer currentPage="websiteHomepage" />
    </>
  )
}

export default MapPage