import React from "react";
import selfie from '../utils/photos/crowCreek1.jpg'

export default function About(){
    return(
        <section>
            <h1> About me</h1>
            <img src = {selfie} alt="Selfie" width={200}/>
            <p>
            Highly capable Non-Commissioned Officer (NCO) with recognized competencies in both oral and written
communications. Effective multi-tasker who is highly familiar with modern project management
techniques with a demonstrated ability to work both independently and collaboratively alongside internal
personnel as a motivated leader. A continuous learner who regularly challenges himself and is always
willing to learn. Currently has a Top-Secret Clearance with Sensitive Compartment Information.
            </p>
        </section>
    )
}