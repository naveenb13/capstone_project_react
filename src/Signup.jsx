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
    validate : (values) => {

      let errors = {}

      if(values.username.length <= 5){
        errors.username = "Username must be greater than 5 letters"
    }

      if(values.email === ""){
          errors.email = "Please enter email"
      }

      if(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{3}$/i.test(values.email) !== true){
          errors.email = "Please enter a Valid email ID"
      }

      if(values.password.length <= 7){
          errors.password = "Password must be greater than 7 letters"
      }

      return errors;
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
      <div className='signuppage'>
        <div className='container2'>
          <div className='row'>
            <div className='col-7'>
              <h1 className='signhead'><b>SIGNUP / REGISTRATION</b></h1>
              <form className='loginprop' onSubmit={formik.handleSubmit}>
                <div className="signmargin">
                  <label for="exampleInputEmail1" className="form-label mb-2 label1">First name</label>
                  <input type={"text"} aria-label="First name" class="form-control" name='username' value={formik.values.username} onChange={formik.handleChange} />
                  <span className='validation'>{formik.errors.username}</span>
                </div>
                <div className="signmargin">
                  <label for="exampleInputEmail1" className="form-label mb-2 label1">Email address</label>
                  <input type={"email"} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name='email' value={formik.values.email} onChange={formik.handleChange} />
                  <span className='validation'>{formik.errors.email}</span>
                </div>
                <div className="signmargin">
                  <label for="exampleInputPassword1" className="form-label mb-2 label1">Password</label>
                  <input type={"password"} className="form-control" id="exampleInputPassword1" name='password' value={formik.values.password} onChange={formik.handleChange} />
                  <span className='validation'>{formik.errors.password}</span>
                </div>
                <div className="d-grid gap-2 py-4">
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