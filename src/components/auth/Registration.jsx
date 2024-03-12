import React, { useContext, useState } from 'react'
import { Link, Navigate } from 'react-router-dom'
import toast from 'react-hot-toast'
import { context } from '../../contextapi/Context'
import axios from 'axios'
const Registration = () => {
const {isAuthorized, setIsAuthorized}= useContext(context)
  const [data, setData] = useState({
    role: "",
    name: "",
    email: "",
    password: "",
    phone: ""


  })
  const getdata = (e) => {
    const { name, value } = e.target
    setData((preve) => ({
      ...preve,
      [name]: value
    }))
  }
  const handleRegister = async (e) => {
    e.preventDefault()

    try {
      const response = await axios.post("https://dark-pink-cougar-tux.cyclic.app/api/v1/user/Register",
        { role: data.role, name: data.name, email: data.email, phone: data.phone , password:data.password},
        {
          header: { "Content_Type": "application/json" },
      
          withCredentials: true
        })
        toast.success(response.data.message)
        console.log(response.data.message)
        setIsAuthorized(true)
    } catch (error) {
      console.log("error is :::",error)
      toast.error(error.response.data.message)
     }
  }
  if(isAuthorized){
    return <Navigate to="/"/>
  }
  return (
    <>
      <section className="authPage">
        <div className="container">
          <div className="header">
            <img src="/JobZeelogo.png" alt="logo" />
            <h3>Create a new account</h3>
          </div>
          <form>
            <div className="inputTag">
              <label>Register As</label>
              <div>
                <select name="role" value={data.role} onChange={getdata}>
                  <option value="">Select Role</option>
                  <option value="Employer">Employer</option>
                  <option value="Job Seeker">Job Seeker</option>
                </select>
              </div>
            </div>
            <div className="inputTag">
              <label>Name</label>
              <div>
                <input
                  type="text"
                  placeholder="Zeeshan"
                  value={data.name}
                  name="name"
                  onChange={getdata}
                />
              </div>
            </div>
            <div className="inputTag">
              <label>Email Address</label>
              <div>
                <input
                  type="email"
                  name="email"
                  placeholder="zk@gmail.com"
                  value={data.email}
                  onChange={getdata}
                />
              </div>
            </div>
            <div className="inputTag">
              <label>Phone Number</label>
              <div>
                <input
                  type="number"
                  placeholder="12345678"
                  value={data.phone}
                  name="phone"
                  onChange={getdata}
                />
              </div>
            </div>
            <div className="inputTag">
              <label>Password</label>
              <div>
                <input
                  type="password"
                  name="password"
                  placeholder="Your Password"
                  value={data.password}
                  onChange={getdata}
                />
              </div>
            </div>
            <button type="submit" onClick={handleRegister}>
              Register
            </button>
            <Link to={"/login"}>Login Now</Link>
          </form>
        </div>
        <div className="banner">
          <img src="/register.png" alt="login" />
        </div>
      </section>
    </>

  )
}

export default Registration
