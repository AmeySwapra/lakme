import React from 'react'
import Header from '../components/common/Header'
import Renewables from '../components/Renewables'
import ContactInfo from '../components/common/ContactInfo'
import Footer from '../components/common/Footer'
import { Helmet } from 'react-helmet-async'

function RenewablesPage() {
  return (
   <>
   <Helmet>
           <title>Renewables | Enpro Industries</title>
         </Helmet>
     <Header/>
     <Renewables/>
     <ContactInfo/>
     <Footer/>
   </>
  )
}

export default RenewablesPage