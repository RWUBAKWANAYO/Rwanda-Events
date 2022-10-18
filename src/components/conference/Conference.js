import React, { Component } from 'react';
import conferenceImg from '../images/conference/conferenceImg.png'
import Navbar from '../navbar/Navbar';
import EventDescription from '../about/EventDescription';
import Footer from '../Footer';


export class Conference extends Component {
    render() {
        return (
            <div className="about-container">
                
                <Navbar/>
                <div className="conferenceBgrd">
                <EventDescription/>
                    <img src={conferenceImg}/>
                </div>
                
                <div className="about-item-container">
                    
            <div class="about-pay-container">
            <div className="conference-wrapper">
                <h1>Attendee Info</h1>
              <form>
                <div>
                    <label>Name</label>
                    <input name="name" type="text" placeholder="Full name"/>
                </div>
                <div>
                    <label>Phone number</label>
                    <input name="name" type="text" placeholder="+2507**********************"/>
                </div>
                <div>
                    <label>Email</label>
                    <input name="email" type="text" placeholder="Email@*********************"/>
                </div>
                
                
              </form>
              <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nostrum
                     beatae deserunt laborum non expedita atque voluptate officia
                      obcaecati
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nostrum
                     beatae deserunt laborum non expedita atque voluptate officia
                      obcaecati
                </p>
                <button>ADD</button>
            </div>
        </div>
    
                </div>
                
                <Footer/>
            </div>
        )
    }
}

export default Conference
