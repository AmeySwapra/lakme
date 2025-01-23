import React, { useEffect, useState } from "react";
import Header from "../components/common/Header";
import { Helmet } from "react-helmet-async";
import ScrollToTop from "../components/common/ScrollToTop";
import SalonLocator from "../components/common/SalonLocator";
import LakmeSalonLocations from "../components/common/LakmeSalonLocations";
import axios from "axios";
import Footer from "../components/common/Footer";
function HomePage() {
  const currentPage = "Homepage";
  const [data, setData] = useState([])
  const fetchData = async () => {
       try {
        const response = await axios.get('https://restate-json.onrender.com/lakme_salon_locations')
        setData(response.data)
       } catch (error) {
        console.log(error)
       }
     
  }

 useEffect(() => {
  fetchData()
 },[])
  return (
    <>
      <Helmet>
        <title>Homepage | Lakme</title>
      </Helmet>
      <ScrollToTop />
      <Header currentPage={currentPage} />
      <SalonLocator currentPage="homepage" />
      <LakmeSalonLocations salons={data}/>
      <Footer currentPage="homePage" />
    </>
  );
}

export default HomePage;
