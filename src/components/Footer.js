import React, { Component } from 'react';
import {Logo2} from './navbar/Logo'
import {Link} from 'react-router-dom';
import  footerImg from './images/footerImg.png';


 class Footer extends Component {
    render() {
        return (
            <section className="footer-wrapper-section">
                 <div className="footer-container">
                        <div className="footer-pic"><img src={footerImg}/></div>
                        <div className="footer-shadow"></div>
                    <h1>ARE YOU AN EVENT ORGANISER</h1>
                    <h3>Bring your event to life through marketing and ticket distribution with us</h3>

                    <div className="footer-wrapper">
                        <div className="footer-wrapper1">
                        <div className="footer-content-wrapper">
                            <h4>WEBSITE PACKAGES</h4>
                            <p>Basic Website</p>
                            <p>Advanced Website</p>
                            <p>Event App</p>
                            <p>Abstracts</p>
                            <p>Participants matching</p>
                            <p>Marketing solution</p>
                        </div>
                        <div className="footer-content-wrapper">
                            <h4>VIRTUAL AND HYBRID SOLUTION</h4>
                            <p>Remote participants management</p>
                            <p>IT Equipment</p>
                            <p>Studio for rent</p>
                        </div>
                        </div>
                        <div className="footer-wrapper1">
                        <div className="footer-content-wrapper">
                            <h4>ONSITE ACCREDITATION</h4>
                            <p>Onsite registration</p>
                            <p>Live Badging</p>
                            <p>Check-in solution</p>
                            <p>Abstracts</p>
                            <p>Face recognition-based Badging</p>
                        </div>
                        <div className="footer-content-wrapper">
                            <h4>TICKET DISTRIBUTION</h4>
                            <p>Ticketing platform</p>
                            <p>Ticketing KIOSKS</p>
                        </div>
                        </div>
                    </div>
                    </div>
                    <div className="end-footer-wrapper">
                    <div className="end-footer-container">
                    <div className="end-footer-container1">
                        <div>
                            <div id ="home-media-wrapper">
                                <Link><i id ="hm1" class="fab fa-facebook-f"></i></Link>
                                <Link><i id ="hm2" class="fab fa-twitter"></i></Link>
                                <Link><i id ="hm3" class="fab fa-google-plus-g"></i></Link>
                                <Link><i id ="hm4" class="fab fa-youtube"></i></Link>
                                <Link><i id ="hm5" class="fab fa-tumblr"></i></Link>
                                
                            </div>
                            <p>  
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                                 Quisquam magni quod dolor incidunt eveniet ipsam minus delectus, 
                            </p>
                        </div>
                        <div>
                            <h4>Help</h4>
                            <p>
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quisquam magni quod dolor incidunt eveniet
                            ipsam minus delectus, veritatis labore dolore repellat
                            </p>
                            <p>
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quisquam magni quod dolor incidunt eveniet
                            ipsam minus delectus, veritatis labore dolore repellat
                            </p>
                        </div>
                        </div>
                        <div className="end-footer-container1">
                        <div>
                            <h4>Contac us</h4>
                            <p>
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quisquam magni quod dolor incidunt eveniet
                            ipsam minus delectus, veritatis labore dolore repellat 
                            </p>
                            <p>
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quisquam magni quod dolor incidunt eveniet
                            ipsam minus delectus, veritatis labore dolore repellat 
                            </p>
                        </div>
                        <div><Logo2/></div>
                    </div>
                    </div>
                    </div>
            </section>
        )
    }
}

export default Footer
