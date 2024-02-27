import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import { Navigate, useParams } from 'react-router-dom'
import { context } from '../../contextapi/Context'
import { Link } from 'react-router-dom'

const JobsDetail = () => {
  const {user, isAuthorized}= useContext(context)
  const { id } = useParams()
  const [job, setJob] = useState({})
  console.log("joobobject",job)
  useEffect(() => {
    JobsDetail()
  }, [])

  const JobsDetail = async () => {
    try {
      const {data} = await axios.get(`http://localhost:8000/api/v1/job//getsingleJob/${id}`, { withCredentials: true })
    
        setJob(data.singlejob)

      console.log("jobdetails",data.singlejob)
  
    }catch (error) {
      console.log(error)
    }
  }
  if(!isAuthorized){
    return <Navigate to="/login"/>
  }
  return (
    <>
      <section className="jobDetail page">
        <div className="container">
          <h3>Job Details</h3>
          <div className="banner">
            <p>
              Title: <span> {job.title}</span>
            </p>
            <p>
              Category: <span>{job.category}</span>
            </p>
            <p>
              Country: <span>{job.country}</span>
            </p>
            <p>
              City: <span>{job.city}</span>
            </p>
            <p>
              Location: <span>{job.location}</span>
            </p>
            <p>
              Description: <span>{job.description}</span>
            </p>
            <p>
              Job Posted On: <span>{job.jobPostedOn}</span>
            </p>
            <p>
              Salary:{" "}
              {job.fixedSalary ? (
                <span>{job.fixedSalary}</span>
              ) : (
                <span>
                  {job.salaryFrom} - {job.salaryTo}
                </span>
              )}
            </p>
            {user && user.role === "Employer" ? (
              <></>
            ) : (
              <Link to={`/application/${job._id}`}>Apply Now</Link>
            )}
          </div>
        </div>
      </section>
    </>
  )
}

export default JobsDetail
