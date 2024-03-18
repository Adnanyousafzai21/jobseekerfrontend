import React, { useContext } from "react";
import { FaUserPlus } from "react-icons/fa";
import { MdFindInPage } from "react-icons/md";
import { IoMdSend } from "react-icons/io";
import { Link } from "react-router-dom";
import { context } from "../contextapi/Context";

const HowItWorks = () => {

  const {user , setIsAuthorized}= useContext(context)

const role = user.user && user.user

  return (
    <>
      <div className="howitworks">
        <div className="container">
          <h3>How Does It Work</h3>
          <div className="banner">
            <div className="card">
              <FaUserPlus />
              
              <p>
              Your Role is a  {`${role==="Employer"?" Employer":"Job Seeker"}`} want to register as  {`${role==="Employer"?"a Job Seeker ":"an Employer"} then hit the button`}
              </p>
              <Link  to="/register">{`${role==="Employer"?"Create account with Job Seeker":"Create Acount with Employer role"}`}</Link>
            </div>
            <div className="card jobposcard">
              <MdFindInPage />
             
              <p>
              Do appaly for the job which is suitable for you if you are registerd as a job seeker role otherwise not permitted
              </p>
              <Link to="/alljob">Find a Job/Apply For Job</Link>
            </div>
            <div className="card ">
              <IoMdSend />
              
              <p>
               Do post a job for the condidate you are seeking If you are registered as an Employer role otherwise not permitted
              </p>
              <Link to="/postjob">Post a Job/Recruit Suitable Candidates</Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HowItWorks;