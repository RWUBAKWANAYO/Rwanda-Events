import React, { Component } from 'react';
import final from './images/homeSlider/final.png'
import game7 from './images/homeSlider/game7.png'
import igisupusupu from './images/homeSlider/igisupusupu.png'
import patoranking from './images/homeSlider/patoranking.png'
import playoff from './images/homeSlider/playoff.png'
import patriot from './images/homeSlider/patriot.png';
import {Link} from 'react-router-dom';

 class Slider extends Component {
    render() {
        return (
            <div className="slider-container">
                <Link to="/EventDetails" className="slider-link">
                <img src={igisupusupu}/>
                <div className="slider-hide">
                    <h5>Playoffs - Finals 2019</h5>
                    <h6>Available now</h6>
                </div>
                </Link>
                <Link to="/EventDetails" className="slider-link">
                <img src={final}/>
                <div className="slider-hide">
                    <h5>UGB BBC Vs Bakolo BBC 2020</h5>
                    <h6>Available now</h6>
                </div>
                </Link>
                <Link to="/EventDetails" className="slider-link">
                <img src={patriot}/>
                <div className="slider-hide">
                    <h5>Patriots Vs REG _ Agaciro 2020</h5>
                    <h6>Available now</h6>
                </div>
                </Link>
                <Link to="/EventDetails" className="slider-link">
                <img src={patoranking}/>
                <div className="slider-hide">
                    <h5>I take the leads concert 2020</h5>
                    <h6>Available now</h6>
                </div>
                </Link>
                <Link to="/EventDetails" className="slider-link">
                <img src={game7}/>
                <div className="slider-hide">
                    <h5>BK All Stars 2021</h5>
                    <h6>Available now</h6>
                </div>
                </Link>
                <Link to="/EventDetails" className="slider-link">
                 <img src={final}/>
                <div className="slider-hide">
                    <h5>UGB BBC Vs Bakolo BBC 2020</h5>
                    <h6>Available now</h6>
                </div>
                </Link>
                <Link to="/EventDetails" className="slider-link">
                <img src={igisupusupu}/>
                <div className="slider-hide">
                    <h5>BK basketball league 2020</h5>
                    <h6>Available now</h6>
                </div>
                </Link>
                <Link to="/EventDetails" className="slider-link">
                <img src ={patoranking}/>
                <div className="slider-hide">
                    <h5>I take the leads concert 2020</h5>
                    <h6>Available now</h6>
                </div>
                </Link>
                <Link to="/EventDetails" className="slider-link">
                <img src={igisupusupu}/>
                <div className="slider-hide">
                    <h5>BK basketball league 2020</h5>
                    <h6>Available now</h6>
                </div>
                </Link>
                <Link to="/EventDetails" className="slider-link">
                <img src={game7}/>
                <div className="slider-hide">
                    <h5>BK All Stars 2021</h5>
                    <h6>Available now</h6>
                </div>
                </Link>
               
                
               
               
                
                
               
               
                
                
              

            </div>
        )
    }
}

export default Slider
