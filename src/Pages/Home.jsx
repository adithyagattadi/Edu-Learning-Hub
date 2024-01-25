import React from 'react';
import Header from '../Components/Header/Header';
import HeaderSection from '../Components/HeaderSection/HeaderSection';
import AboutUs from '../Components/AboutUs/AboutUs';
import Admission from '../Components/Admission/Admission';
import Academics from '../Components/Academics/Academics';
import Gallery from '../Components/Gallery/Gallery';
import Footer from '../Components/Footer/Footer';

const Home = () => {
  return (
    <>
      <Header />
      <HeaderSection />
      <AboutUs/>
      <Admission/>
      <Academics/>
      <Gallery/>
      <Footer/>
    </>
  );
};

export default Home;
