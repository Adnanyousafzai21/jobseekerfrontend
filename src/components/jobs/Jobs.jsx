import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

const Jobs = () => {
  const [jobs, setJobs] = useState([])
  console.log("all jobs is here", jobs)
  useEffect(() => {
    getJob()
  }, [])

  const getJob = async () => {
    try {
      const { data } = await axios.get("http://localhost:8000/api/v1/job/getJob", {
        withCredentials: true,
      })
      console.log(data.allJobs)
      setJobs(data)

    }

    catch (error) {
      console.log(error.response.data.message)
    }
  }
  return (
    <>
      <section className="jobs page">
        <div className="container">
          <h2>ALL AVAILABLE JOBS</h2>
          <div className="banner">
            {jobs.allJobs &&
              jobs.allJobs.map((element) => {
                return (
                  <div className="card" key={element._id}>
                    <p>{element.title}</p>
                    {/* <div>
                      <p>{element.category}</p>
                 
                    </div>    */}
                     <div className='location'>
                     <p>{element.category}</p>
                      <p>{element.city} </p>
                    </div>
                    <Link to={`/job/${element._id}`}>Job Details</Link>
                  </div>
                );
              })}
          </div>
        </div>
      </section>

    </>
  );
};


export default Jobs
