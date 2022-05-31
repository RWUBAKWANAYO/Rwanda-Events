import React, { Component } from 'react';
import Footer from '../Footer';
import GMap from '../about/Map';
import {Venuemapsvg} from '../venuesvg/VenueMapSvg';
import venueCard from '../images/venue/venueCard.png'
import muzika1 from '../images/venue/muzika1.png'
import muzika2 from '../images/venue/muzika2.png'
import muzika3 from '../images/venue/muzika3.png';
import venueBackground from '../images/venue/venueBackground.png';
import venuecategoryBgrd from '../images/venue/venuecategoryBgrd.png'

export class VenuePage extends Component {
    render() {
        return (
             
            <section className="venue-container">
            <div className="venue-background">
                 <img src={venueBackground}/>
            </div>
            <div className="venueIntro-wrapper" >
            <div className="venue-par-wrapper">
            <h1>YOUR GREAT EVENT</h1>
            <h1>START WITH GREAT SPACE</h1>
            </div>
            <div className="venue-book-wrapper">
                <button>Book now</button>
                <button>Event detail</button>
            </div>
            </div>
            <div className="venue-map-container">
                <div className="venue-map-shadow">
                    <h2>VENUE FOR YOUR </h2>
                    <h2>EVENT NEAR YOU</h2>
                    <h2><button>Check now</button></h2>
                </div>
                <div className="venue-map-wrapper"><GMap/></div>
                <Venuemapsvg/>
            </div>
            <div className="venue-cat-container" >
                <div className="venue-cat-bgrd">
                    <img src={venuecategoryBgrd} alt="venue category"/>
                </div>

                <div className="venue-card-wrapper">
                    <h2 className="venue-cat-header">VENUE CATEGORIES</h2>
                   
                    <div className="venueCardCont">
                        <div className="venueSubCardCont">
                        <div>
                                <img src={venueCard}/>
                                <h3>Art gallery Venues</h3>
                                <p>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Et placeat veritatis voluptatem
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Et placeat veritatis voluptatem
                                    aperiam, deserunt cum sit pariatur quam maxime
                                </p>
                                <a href="#venueSearchCardCont"><button>Check out</button></a>
                                
                            </div>
                            <div>
                                <img src={venueCard}/>
                                <h3>Art gallery Venues</h3>
                                <p>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Et placeat veritatis voluptatem
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Et placeat veritatis voluptatem
                                    aperiam, deserunt cum sit pariatur quam maxime
                                </p>
                                <a href="#venueSearchCardCont"><button>Check out</button></a>
                                
                            </div>
                        </div>
                        <div className="venueSubCardCont">
                        <div>
                                <img src={venueCard}/>
                                <h3>Art gallery Venues</h3>
                                <p>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Et placeat veritatis voluptatem
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Et placeat veritatis voluptatem
                                    aperiam, deserunt cum sit pariatur quam maxime
                                </p>
                                <a href="#venueSearchCardCont"><button>Check out</button></a>
                                
                            </div>
                            <div>
                                <img src={venueCard}/>
                                <h3>Art gallery Venues</h3>
                                <p>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Et placeat veritatis voluptatem
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Et placeat veritatis voluptatem
                                    aperiam, deserunt cum sit pariatur quam maxime
                                </p>
                                <a href="#venueSearchCardCont"><button>Check out</button></a>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="venue-search-card-wrapper">
                    <div className="venue-input-cont"><input type="text" placeholder="SEARCH BY CATEGORY"></input></div>
                    <div className="venueSearchCardCont">
                        
                            <div>
                                <img src={muzika1}/>
                                <h3>IWACU MUZIKA</h3>
                                <p>KIGALI ARENA</p>
                                <button>Check out</button>
                                
                            </div>
                            <div id="venueSearchCardCont">
                                <img src={muzika2}/>
                                <h3>IWACU MUZIKA</h3>
                                <p>KIGALI ARENA</p>
                                <button>Check out</button>
                            </div>
                        
                            <div>
                                <img src={muzika3}/>
                                <h3>IWACU MUZIKA</h3>
                                <p>KIGALI ARENA</p>
                                <button>Check out</button>
                                
                            </div>
                            
                        
                         </div>

                    <div className="venueSearchCardCont" id="venueSearchCardCont">
                        
                            <div>
                                <img src={muzika1}/>
                                <h3>IWACU MUZIKA</h3>
                                <p>KIGALI ARENA</p>
                                <button>Check out</button>
                                
                            </div>
                            <div>
                                <img src={muzika2}/>
                                <h3>IWACU MUZIKA</h3>
                                <p>KIGALI ARENA</p>
                                <button>Check out</button>
                                
                            </div>
                        
                        
                            <div>
                                <img src={muzika3}/>
                                <h3>IWACU MUZIKA</h3>
                                <p>KIGALI ARENA</p>
                                <button>Check out</button>
                                
                            </div>
                            
                     </div>
                </div>
                <Footer/>
        </section>
        
        )
    }
}

export default VenuePage
