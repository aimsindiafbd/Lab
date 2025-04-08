import React from 'react'
import Banner from '../components/Banner'
import Services from '../components/Service'
import FullBodyCheckupList from '../components/FullBodyCheckupList'
import Fever from '../components/Fever'
import HIV from '../components/HIV'
import CheckupCategory from '../components/CheckupCategory'
import WomenCare from '../components/WomenCare'

const Home = () => {
  return (
    <div>
      <Banner />
      <Services />
      <FullBodyCheckupList />
      <Fever />
      <HIV />
      <CheckupCategory />
      <WomenCare />
    </div>
  )
}

export default Home