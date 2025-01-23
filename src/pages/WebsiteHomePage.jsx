import React from 'react'
import ScrollToTop from '../components/common/ScrollToTop'
import Header from '../components/common/Header'
import SalonLocator from '../components/common/SalonLocator'
import Footer from '../components/common/Footer'
import ContactForm from '../components/ContactForm'
import FeaturedServices from '../components/FeaturedServices'
import InfoWidget from '../components/InfoWidget'
import OfferSlider from '../components/OfferSlider'
import AboutSection from '../components/AboutSection'
import NearbyOutlets from '../components/common/NearbyOulets'
import SocialTimeline from '../components/common/SocialTimeline'
function WebsiteHomePage() {
  return (
     <>
       <ScrollToTop/>
       <Header currentPage={'WebsiteHomepage'}/>
       <SalonLocator currentPage={'websiteHomepage'} />
       <ContactForm/>
       <FeaturedServices/>
       <InfoWidget/>
       <OfferSlider/>
       <AboutSection/>
       <SocialTimeline limit={3} />
       <NearbyOutlets/>
       <Footer currentPage={'websiteHomepage'}/>
     </>
  )
}

export default WebsiteHomePage