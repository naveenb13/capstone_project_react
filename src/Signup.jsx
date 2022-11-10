import axios from 'axios';
import { useFormik } from 'formik';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { env } from './config';


function Signup() {

  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      username: "",
      email: "",
      password: "",
    },
    validate: (values) => {
    },
    onSubmit: async (values) => {
      let signup = await axios.post(`${env.api}/register`, values)
      console.log(signup)
      alert("Account created. Now Sign in")
      navigate("/")
    }
  })

  return (
    <div className='loginheading pt-3'><h1 className='btn4'>OUT<span className='btn3'>colors</span>FIT</h1>
      <div className='loginpage'>
        <div className='container1'>
          <div className='row'>
            <div className='col-7'>
              <h1 className='my-5'><b>SIGNUP / REGISTRATION</b></h1>
              <form className='loginprop' onSubmit={formik.handleSubmit}>
                <div className="mb-3">
                  <label for="exampleInputEmail1" className="form-label mb-2">First name</label>
                  <input type={"text"} aria-label="First name" class="form-control" name='username' value={formik.values.username} onChange={formik.handleChange} />
                  <div id="emailHelp" className="form-text text-danger">We'll never share your email with anyone else.</div>
                </div>
                <div className="mb-3">
                  <label for="exampleInputEmail1" className="form-label mb-2">Email address</label>
                  <input type={"email"} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name='email' value={formik.values.email} onChange={formik.handleChange} />
                  <div id="emailHelp" className="form-text text-danger">We'll never share your email with anyone else.</div>
                </div>
                <div className="mb-3">
                  <label for="exampleInputPassword1" className="form-label mb-2">Password</label>
                  <input type={"password"} className="form-control" id="exampleInputPassword1" name='password' value={formik.values.password} onChange={formik.handleChange} />
                  <div id="emailHelp" className="form-text mb-5 text-danger">We'll never share your email with anyone else.</div>
                </div>
                <div className="d-grid gap-2">
                  <button type={"submit"} className="btn btn-success" >Signup</button>
                </div>
              </form>
            </div>
            <div className='col-5 imagelogin2'>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Signup