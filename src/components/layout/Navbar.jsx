import React, { useContext, useState } from 'react'
import { context } from '../../contextapi/Context'
import axios from 'axios'
import toast from 'react-hot-toast'
import { Link } from 'react-router-dom'
import { GiHamburgerMenu } from "react-icons/gi";
const Navbar = () => {
const [show , setShow]= useState(false)
    const { setIsAuthorized, isAuthorized, user } = useContext(context)

    const handleLogOut= async()=>{
    try {
        const response = await axios.get("http://localhost:8000/api/v1/user/logedout",{withCredentials: true})

        toast(response.data.message)
        setIsAuthorized(false)
    } catch (error) {
        toast(error.response.data.message)
        setIsAuthorized(true)
    }
}
return (
    <div>
        <nav className={isAuthorized ? "navbarShow" : "avbarShow"
        // "navbarHide"
        }>
            <div className='container'>
                <div className="logo">
          <h4>Job Sekeer</h4>
                </div>
                <ul className={!show ? "menu" : "show-menu menu"}>
                    <li onClick={()=>setShow(false)}>
                        <Link to="/" >Home</Link>
                    </li>
                    <li onClick={()=>setShow(false)}>
                        <Link to="/alljob" >View All Jobs</Link>
                    </li>
                    <li onClick={()=>setShow(false)}>
                        <Link to="/myapplication" >
                            {user && user.role==="Employer"? "Applicant Application":"My Application"}
                         </Link>
                    </li>
               {
                user && user.role==="Employer"?(
                    <>
                    <li onClick={()=>setShow(false)}>
                        <Link to="/myjobs/me"> View Your Jobs</Link>
                    </li>
                    
                    <li onClick={()=>setShow(false)}>
                        <Link to="/postjob">  Post new job</Link>
                    </li>
                    </>
                ):(<></>)
               }
                    <button onClick={handleLogOut}>logOut</button>
                </ul>
                <div className="hamburger">
          <GiHamburgerMenu onClick={() => setShow(!show)} />
        </div>
            </div>
        </nav>
    </div>
)
}

export default Navbar
