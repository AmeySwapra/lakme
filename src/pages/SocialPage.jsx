import React from 'react'
import ScrollToTop from '../components/common/ScrollToTop'
import Header from '../components/common/Header'
import SalonLocator from '../components/common/SalonLocator'
import SocialTimeline from '../components/common/SocialTimeline'
import Footer from '../components/common/Footer'

function SocialPage() {
  return (
    <>
      <ScrollToTop />
      <Header currentPage={'WebsiteHomepage'}/>
      <SalonLocator currentPage={'websiteHomepage'}/>
      <SocialTimeline/>
      <Footer currentPage="websiteHomepage" />
    </>
  )
}

export default SocialPage