import React, { useState } from 'react'
import Navbar from './Navbar'
import axios from 'axios';
import ntc from 'ntcjs';
import { env } from './config';

function Suggestions() {

    const [date, setDate] = useState('');
    const [day, setDay] = useState('');
    const [color1, setColor1] = useState('');
    const [color2, setColor2] = useState('');
    const [color3, setColor3] = useState('');
    const [color4, setColor4] = useState('');
    const [colorselect1, setColorSelect1] = useState('');
    const [colorselect2, setColorSelect2] = useState('');

    const handledate = (event) => {
        const dateanswer = event.target.value;
        console.log(dateanswer);
        setDate(dateanswer);
    }

    const handleday = (event) => {
        const dayanswer = event.target.value;
        console.log(dayanswer);
        setDay(dayanswer);
    }

    let colorpicker = () => {

        if (document.getElementById("radio1").checked == true) {
            let colorans = document.getElementById("color01").value;
            let colorans1 = document.getElementById("color02").value;
            const n_match1 = ntc.name(colorans);
            const n_match2 = ntc.name(colorans1);
            const n_name1 = n_match1[1];
            const n_name2 = n_match2[1];
            console.log(n_name1);
            console.log(n_name2);
            setColorSelect1(n_name1)
            setColorSelect2(n_name2);
        } else {
            console.log(null)
        }
    }

    let colorpicker1 = () => {

        if (document.getElementById("radio2").checked == true) {
            let colorans2 = document.getElementById("color03").value;
            let colorans3 = document.getElementById("color04").value;
            const n_match3 = ntc.name(colorans2);
            const n_match4 = ntc.name(colorans3);
            const n_name3 = n_match3[1];
            const n_name4 = n_match4[1];
            console.log(n_name3);
            console.log(n_name4);
            setColorSelect1(n_name3)
            setColorSelect2(n_name4);
        } else {
            console.log(null)
        }
    }

    const setBg = () => {
        const randomColor1 = Math.floor(Math.random() * 16777215).toString(16);
        const randomColor2 = Math.floor(Math.random() * 16777215).toString(16);
        const randomColor3 = Math.floor(Math.random() * 16777215).toString(16);
        const randomColor4 = Math.floor(Math.random() * 16777215).toString(16);
        document.getElementById('color01').value = "#" + randomColor1;
        document.getElementById('color02').value = "#" + randomColor2;
        document.getElementById('color03').value = "#" + randomColor3;
        document.getElementById('color04').value = "#" + randomColor4;

        const colordisplay1 = document.getElementById('color01').value;
        const colordisplay2 = document.getElementById('color02').value;
        const colordisplay3 = document.getElementById('color03').value;
        const colordisplay4 = document.getElementById('color04').value;

        console.log(colordisplay1);
        console.log(colordisplay2);
        console.log(colordisplay3);
        console.log(colordisplay4);

        setColor1(colordisplay1);
        setColor2(colordisplay2);
        setColor3(colordisplay3);
        setColor4(colordisplay4);
    }


    const submitUser = async (e) => {
        e.preventDefault();
        const userdata = {
            todaydate: date,
            todayday: day,
            colorselected1: colorselect1,
            colorselected2: colorselect2,
        }

        if (document.getElementById("radio1").checked == true) {
            let colorans = document.getElementById("color01").value;
            let colorans1 = document.getElementById("color02").value;
            const n_match1 = ntc.name(colorans);
            const n_match2 = ntc.name(colorans1);
            const n_name1 = n_match1[1];
            const n_name2 = n_match2[1];
            document.getElementById('displayanswer').style.display = 'inline';
            document.getElementById('displayanswer').innerText = `${n_name1} and ${n_name2}`
        } else if (document.getElementById("radio2").checked == true) {
            let colorans2 = document.getElementById("color03").value;
            let colorans3 = document.getElementById("color04").value;
            const n_match3 = ntc.name(colorans2);
            const n_match4 = ntc.name(colorans3);
            const n_name3 = n_match3[1];
            const n_name4 = n_match4[1];
            document.getElementById('displayanswer').style.display = 'inline';
            document.getElementById('displayanswer').innerText = `${n_name3} and ${n_name4}`
        }

        let user = await axios.post(`${env.api}/suggestions`, userdata, {
            headers: {
                "authorization": window.localStorage.getItem("app-token")
            }
        })
        alert("Your Choice is Captured")
    }


    return (
        <>
            <div className='page2'>
                <Navbar></Navbar>
                <div className='container-fluid'>
                    <div className='row'>
                        <div className='col-8'>
                            <h1 className='mt-5 mb-3 sugghead'><b>Click below to know your Colour Suggestions for Today</b></h1>
                            <form className='suggestions' onSubmit={submitUser}>
                                <label className='suggestionlabel'><h5 className='sugghead1' >Date</h5></label>
                                <input className='form-control' type={"date"} name="date" onChange={(e) => handledate(e)} ></input><span style={{ color: "red" }}>Enter Today's Date</span><br /><br />
                                <label className='suggestionlabel'><h5 className='sugghead1'>Day</h5></label>
                                <input className='form-control' type={"text"} name="day" placeholder='Eg - Monday , Thursday' onChange={(e) => handleday(e)}></input><span style={{ color: "red" }}>Please enter Today's Weekday.</span><br /><br />
                                <label className='suggestionlabel'><h5 className='sugghead1'>Color Combination - 1</h5></label>&nbsp;&nbsp;&nbsp;
                                <input class="form-check-input" type="radio" name="flexRadioDefault" id="radio1" onClick={colorpicker} />&nbsp;&nbsp;&nbsp;
                                <input className='form-control' type={"color"} name="color1" id='color01' onChange={`${setColor1}`}></input>&nbsp;&nbsp;&nbsp;
                                <input className='form-control' type={"color"} name="color2" id='color02' onChange={`${setColor2}`}></input>&nbsp;&nbsp;&nbsp;
                                < br />< br />
                                <label className='suggestionlabel'><h5 className='sugghead1'>Color Combination - 2</h5></label>&nbsp;&nbsp;&nbsp;
                                <input class="form-check-input" type="radio" name="flexRadioDefault" id="radio2" onClick={colorpicker1} />&nbsp;&nbsp;&nbsp;
                                <input className='form-control' type={"color"} name="color3" id='color03' onChange={`${setColor3}`}></input>&nbsp;&nbsp;&nbsp;
                                <input className='form-control' type={"color"} name="color4" id='color04' onChange={`${setColor4}`}></input>&nbsp;&nbsp;&nbsp;
                                <br />
                                <span style={{ color: "red" }}>Click below Randomize button and select any one of the Color Combinations above.</span>< br />< br />
                                <button className='btn btn-light btn-lg' onClick={setBg} type="button">Randomize and Select one</button>< br />< br />
                                <div class="d-grid gap-2 col-2 mx-auto btn2">
                                    <button className='btn btn-light btn-lg' type={"submit"} name="submit" >Submit</button>
                                    {/* <div id="msg">Message Here</div> */}
                                    {/* <button class="btn btn-light btn-lg" type="button"><span className='btn1'>Tap Me</span></button> */}
                                </div>
                            </form>< br />
                            <div className="line1"></div>
                            < br />
                            <h3 className='sugghead1'>Your Today's Outfit colors selected are</h3>< br />
                            <h3 id='displayanswer' className='displayans bg-light'></h3>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Suggestions