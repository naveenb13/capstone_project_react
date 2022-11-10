import { useFormik } from 'formik';
import React from 'react'
import Navbar from './Navbar'
import axios from 'axios';
import { env } from './config';

function Favourites() {

  const formik = useFormik({
    initialValues: {
      color1: "",
      color2: "",
      color3: "",
      color4: "",
      color5: "",
    },

    onSubmit: async (values) => {
      let user = await axios.post(`${env.api}/favourites`, values, {
        headers: {
          "authorization": window.localStorage.getItem("app-token")
        }
      })
      alert("Colors added to your Favourites List")
    }
  })


  return (
    <>
      <div className='page3'>
        <Navbar></Navbar>
        <div className='container-fluid'>
          <div className='row'>
            <div className='col-9'>
              <h1 className='mt-5 mb-3'><b>Choose your Magical Colors which makes you feel like an Angel</b></h1>
              < br />< br />
              <form onSubmit={formik.handleSubmit}>
                <div>
                  <label class="form-check-label" for="flexCheckDefault">
                    <h3>Color 1 - </h3>
                  </label>&nbsp;&nbsp;&nbsp;
                  <input type="color" id='color1' value={formik.values.color1} onChange={formik.handleChange} name="color1" />
                  <span id='colourans1'></span>
                </div>
                <div>
                  <label class="form-check-label" for="flexCheckDefault">
                    <h3>Color 2 - </h3>
                  </label>&nbsp;&nbsp;&nbsp;
                  <input type="color" id='color2' value={formik.values.color2} onChange={formik.handleChange} name="color2" />
                </div>
                <div>
                  <label class="form-check-label" for="flexCheckDefault">
                    <h3>Color 3 - </h3>
                  </label>&nbsp;&nbsp;&nbsp;
                  <input type="color" id='color3' value={formik.values.color3} onChange={formik.handleChange} name="color3" />
                </div>
                <div>
                  <label class="form-check-label" for="flexCheckDefault">
                    <h3>Color 4 - </h3>
                  </label>&nbsp;&nbsp;&nbsp;
                  <input type="color" id='color4' value={formik.values.color4} onChange={formik.handleChange} name="color4" />
                </div>
                <div>
                  <label class="form-check-label" for="flexCheckDefault">
                    <h3>Color 5 - </h3>
                  </label>&nbsp;&nbsp;&nbsp;
                  <input type="color" id='color5' value={formik.values.color5} onChange={formik.handleChange} name="color5" />
                </div>< br />< br />
                <div class="d-grid gap-2 col-2 mx-auto btn2">
                  <button className='btn btn-light btn-lg' type={"submit"} name="submit" >Submit</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Favourites