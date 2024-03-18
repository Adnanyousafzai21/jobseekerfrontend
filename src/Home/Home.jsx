import React, { useCallback, useContext, useEffect } from 'react'
import { context } from '../contextapi/Context'
import { Navigate, useNavigate } from 'react-router-dom'
import Herosection from './Herosection'
import HowItWorks from './HowitWorks'
import PopularCategories from './PopulerCategories'
import PopularCompanies from './PopulerCompanies'

const Home = () => {

  const { isAuthorized } = useContext(context)
  if (!isAuthorized) {
    return <Navigate to="/login" />
  }


  return (
    <div>
      <Herosection />
      <HowItWorks />
      <PopularCategories />
      <PopularCompanies />
    </div>
  )
}

export default Home
