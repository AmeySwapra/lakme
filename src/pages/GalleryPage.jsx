import React from 'react'
import ScrollToTop from '../components/common/ScrollToTop'
import Header from '../components/common/Header'
import SalonLocator from '../components/common/SalonLocator'
import Gallery from '../components/Gallery'
import Footer from '../components/common/Footer'
import NearbyOutlets from '../components/common/NearbyOulets'


function GalleryPage() {
  return (
    <>
      <ScrollToTop/>
      <Header currentPage={'WebsiteHomepage'}/>
      <SalonLocator currentPage={'websiteHomepage'}/>
      <Gallery/>
      <NearbyOutlets/>
      <Footer currentPage="websiteHomepage" />
    </>
  )
}

export default GalleryPage