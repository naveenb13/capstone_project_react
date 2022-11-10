import axios from 'axios';
import { useFormik } from 'formik';
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { env } from './config';

function Login() {

  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: async (values) => {
      try {
        let loginData = await axios.post(`${env.api}/login`, values)
        console.log(loginData)
        if (loginData && loginData.status === 200) {

          window.localStorage.setItem("app-token", loginData.data.token)
          navigate("/home");
        }
      } catch (error) {
        alert(error.response.data.message)
        console.log(error)
      }
    }
  })
  return (
    <div className='loginheading pt-3'><h1 className='btn4'>OUT<span className='btn3'>colors</span>FIT</h1>
      <div className='loginpage'>
        <div className='container1'>
          <div className='row'>
            <div className='col-7 column1'>
              <h1 className='loginresp'><b>LOGIN</b></h1>
              <form className='loginprop' onSubmit={formik.handleSubmit}>
                <div className="loginresp1">
                  <label for="exampleInputEmail1" className="form-label mb-3">Email address</label>
                  <input name='email' type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" value={formik.values.email} onChange={formik.handleChange} />
                  <div id="emailHelp" className="form-text text-danger">We'll never share your email with anyone else.</div>
                </div>
                <div className="loginresp1">
                  <label for="exampleInputPassword1" className="form-label mb-3">Password</label>
                  <input type="password" className="form-control" id="exampleInputPassword1" name="password" value={formik.values.password} onChange={formik.handleChange} />
                  <div id="emailHelp" className="form-text loginresp text-danger">We'll never share your email with anyone else.</div>
                </div>
                <div className="d-grid gap-2">
                  <button type={"submit"} className="btn btn-success loginresp1">Login</button>
                  <Link className="btn btn-outline-dark" to={"/signup"}>Signup</Link>
                </div>
              </form>
            </div>
            <div className='col-5 imagelogin'>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login