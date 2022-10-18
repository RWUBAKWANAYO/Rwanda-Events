import React, { Component } from 'react';
import ContactSvg from '../contactUs/ContactsSvg';
import Navbar from '../navbar/Navbar';


export class AboutUs extends Component {
    render() {
        return (

            <div className="aboutUsContainer">
                <Navbar/>
                <ContactSvg/>
                <div className="vision-container">
                    <div className="vision-wrapper1">
                        <div>
                            <h3>Mission</h3>
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Labore alias iure facilis distinctio
                             dolores molestias sint sunt minus earum excepturi fuga illo rerum minima tempora accusantium 
                             eligendi, facere quidem dignissimos?
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Labore alias iure facilis distinctio
                             
                             eligendi, facere quidem dignissimos?
                             </p>
                        </div>
                        <div>
                            <h3>Vision</h3>
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Labore alias iure facilis distinctio
                             dolores molestias sint sunt minus earum excepturi fuga illo rerum minima tempora accusantium 
                             eligendi, facere quidem dignissimos?
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Labore alias iure facilis distinctio
                           
                             eligendi, facere quidem dignissimos?
                             </p>
                        </div>
                    </div>
                   
                    <div className="vision-wrapper2">
                            <h3>History</h3>
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Labore alias iure facilis distinctio
                             dolores molestias sint sunt minus earum excepturi fuga illo rerum minima tempora accusantium 
                             eligendi, facere quidem dignissimos?
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Labore alias iure facilis distinctio
                             dolores molestias sint sunt minus earum excepturi fuga illo rerum minima tempora accusantium 
                             eligendi, facere quidem dignissimos?
                             </p>
                        </div>
                    </div>
                </div>
        
        )
    }
}

export default AboutUs
