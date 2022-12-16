import React, { useState } from 'react'
import Chart from './Chart'
import "./Home.css"


const Home = () => {

    const [easy, setEasy] = useState(40);
    const [medium, setMedium] = useState(60);
    const [hard, setHard] = useState(80);


    const [easyvalue, setEasyvalue] = useState(40);
    const [mediumvalue, setMediumvalue] = useState(60);
    const [hardvalue, setHardvalue] = useState(80);



    const refresh = (e) => {
        e.preventDefault();

        if (easyvalue > 100 || easyvalue < 0 || mediumvalue > 100 || mediumvalue < 0 || hardvalue > 100 || hardvalue < 0) {
            alert("Please enter values from 0 to 100");
        } else {
            setEasy(easyvalue);
            setMedium(mediumvalue);
            setHard(hardvalue);
        }
    }

    return (
        <>
            <h1>Simple Bar Graph</h1>
            <div className="main-container">
                <div>
                    <form>
                        <input type='number' min="0" max="100" required onChange={e => setEasyvalue(e.target.value)} placeholder='Enter Easy value' />
                        <input type='number' min="0" max="100" required onChange={e => setMediumvalue(e.target.value)} placeholder='Enter Medium value' />
                        <input type='number' min="0" max="100" required onChange={e => setHardvalue(e.target.value)} placeholder='Enter Hard value' />
                        <button type='submit' onClick={refresh}>Refresh</button>
                    </form>
                </div>
                <div className="wrap">
                    <Chart e={easy} m={medium} h={hard} />
                </div>
            </div>
        </>
    )
}

export default Home