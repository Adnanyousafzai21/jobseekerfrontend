import React, { useContext, useState } from "react";
import { Link, Navigate } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";
import { context } from "../../contextapi/Context";

const Login = () => {
  
const {isAuthorized, setIsAuthorized} =useContext(context)

    const [data, setdata] = useState({
        role: "",
        email: "",
        password: "",
    })
    const getvalue = (e) => {
        const { name, value } = e.target
        setdata((prev) => ({
            ...prev,
            [name]: value
        }))
    }
    const handleLogin = async (e) => {
        e.preventDefault()

        try {
            const postlogin = await axios.post("http://localhost:8000/api/v1/user/login", { role: data.role, email: data.email, password: data.password }, {
                header: { "Content-Type": "application/json" },
                withCredentials: true
            })
            toast.success(postlogin.data.message)
            console.log(postlogin.data)
            console.log(postlogin.data.message)
            setdata({
                role: "",
                email: "",
                password: "",
            })
            setIsAuthorized(true)
        } catch (error) {
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
                        <h3>Login to your account</h3>
                    </div>
                    <form>
                        <div className="inputTag">
                            <label>Login As</label>
                            <div>
                                <select value={data.role} name="role" onChange={getvalue}>
                                    <option value="">Select Role</option>
                                    <option value="Employer">Employer</option>
                                    <option value="Job Seeker">Job Seeker</option>
                                </select>
                            </div>
                        </div>
                        <div className="inputTag">
                            <label>Email Address</label>
                            <div>
                                <input
                                    type="email"
                                    placeholder="zk@gmail.com"
                                    name="email"
                                    value={data.email}
                                    onChange={getvalue}
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
                                    onChange={getvalue}
                                />

                            </div>
                        </div>
                        <button type="submit" onClick={handleLogin}>
                            Login
                        </button>
                        <Link to={"/register"}>Register Now</Link>
                    </form>
                </div>
                {/* <div className="banner">
          <img src="/login.png" alt="login" />
        </div> */}
            </section>
        </>
    );
};

export default Login;
