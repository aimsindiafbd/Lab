import React from 'react'
import Banner from '../components/Banner'
import Services from '../components/Service'
import FullBodyCheckupList from '../components/FullBodyCheckupList'
import Fever from '../components/Fever'
import HIV from '../components/HIV'
import CheckupCategory from '../components/CheckupCategory'
import SpecialProgram from '../components/SpecialProgram'

const Home = () => {
  return (
    <div>
      <Banner />
      <Services />
      <SpecialProgram/>
      <FullBodyCheckupList />
      <Fever />
      <HIV />
      <CheckupCategory />
    </div>
  )
}

export default Home