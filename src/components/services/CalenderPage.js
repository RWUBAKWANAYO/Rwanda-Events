import React, { Component } from 'react'
import Slider from '../Slider';
import calenderImg from '../images/calender/calenderImg.png';
import paintImg from'../images/calender/paintImg.png';
import Footer from '../Footer';
import {Link} from 'react-router-dom';
import GMap from '../about/Map';
import EventCards from '../event_cards/EventCards';



export class CalenderPage extends Component {
    render() {
        return (
            
            <section className="calender-container" style={{display:"flex"}}>
               <div className="calender-bgrd-container">
                   <img src={calenderImg}/>
                </div>
            <div className="hm-wrapper" >
                <div className="hm-sub-wrapper1">
                    <div className="hm-par-wrapper1">
                        <h1>IKAZE </h1>
                        <h1>EVENT</h1>
                        <div  className="hm-grad-wrapper"></div>
                    </div>
                    
                    <div className="hm-par-wrapper2">
                        <h1>30</h1>
                        <h2>DECEMBER</h2>
                        <h3>2021</h3>
                    </div>
                </div>
                <div className="hm-sub-wrapper2">
                    <div className="powered-wrapper">
                        <p>Kigali Arena</p>
                        <hr/>
                        <p>Powered by RDB</p>
                    </div>
                    <div className="book-wrapper">
                        <button><Link to="/EventDetails">Book now</Link></button>
                        <button><Link to='/EventDetails'> Event detail</Link></button>
                    </div>
                </div>
            </div>
            <div className="hm-event-wrapper">
                <Slider/>

            </div>
            <div className="border-div"></div>
            <div className="event-hm-map">
                <div className="mapCont">
                    <GMap/>
                </div>
                <div className="event-hm-map-shadow">
                    <h1 className="event-header">EVENT AT</h1>
                    <h1 className="event-header" id="event-header">YOUR PLACE</h1>
                    <button>Check now</button>
                </div>
                <div className="paint-wrapper"><img src={paintImg} alt=""/></div>
            </div>
            <EventCards/>
            <Footer/>
            </section>
            
        )
    }
}

export default CalenderPage
