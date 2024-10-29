import React from 'react'
import Slider from './Slider'
import ScheduleHours from './ScheduleHours'
import AboutUs from './AboutUs'
import Services from './Services'
import Testimonials from './Testimonials'
import Map from './Map'
import MakeAppointment from './MakeAppointment'

export const fetchMetaData = async function () {
  const url = process.env.NEXT_PUBLIC_SERVER_URL;

  const response = await fetch(`${url}/smile-dental/metadata`);
  if (!response.ok) {
    throw new Error('Failed to fetch data');
  }
  return response.json();
}

export async function getServerSideProps() {
  const metaData = await fetchMetaData();
  return {
    props: {
      metaData,
    },
  };
}

const HomePage = ({ metaData }) => {
  return (
    <>

      <Slider pageName="home" showContactButton={true} />
      <div className="page-content pbmit-bg-color-light">
        <ScheduleHours />
        <AboutUs />
        <Services />
        <Testimonials />
        <Map /> 
        <MakeAppointment />
      </div>
    </>

  )
}

export default HomePage