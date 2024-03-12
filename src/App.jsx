import React, { useContext, useEffect } from 'react'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import Home from './Home/Home'
import Login from './components/auth/Login'
import Registration from './components/auth/Registration'
import Jobs from './components/jobs/Jobs'
import Myjob from './components/jobs/Myjob'
import JobsDetail from './components/jobs/JobsDetail'
import Application from './components/applications/Application'
import MyApplication from './components/applications/MyApplication'
import NotFound from './components/Notfound/NotFound'
import axios from 'axios'
import { Toaster } from 'react-hot-toast'
import { context } from './contextapi/Context'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import MyApplications from './components/applications/MyApplication'
import PostJob from './components/jobs/PostJob'
const App = () => {
  const { user, isAuthorized, setIsAuthorized, setUser } = useContext(context)


  useEffect(() => {
    fetchUser()
  }, [isAuthorized])
  const fetchUser = async () => {
    try {
      const response = await axios.get("https://dark-pink-cougar-tux.cyclic.app/api/v1/user/getuser", {
        withCredentials: true,
      })
      setUser(response.data.user)
      setIsAuthorized(true)
    } catch (error) {
      setIsAuthorized(false)
    }
  }
    return (
      <div>

        <Router>
          <Navbar/>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Registration />} />
            <Route path="/alljob" element={<Jobs />} />
            <Route path="/myjobs/me" element={<Myjob />} />
            <Route path="/postjob" element={<PostJob />} />
            <Route path="/job/:id" element={<JobsDetail />} />
            <Route path="/application/:id" element={<Application />} />
            <Route path="/myapplication" element={<MyApplications />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
          <Footer/>
        </Router>
        <Toaster/>

      </div>
    )
  }

export default App
