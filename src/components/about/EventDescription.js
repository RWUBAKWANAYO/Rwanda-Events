import React, { Component } from 'react';

const newYears = "01 august 2022";
const newYearsDate = new Date(newYears);
const currentDate = new Date();
const totalSeconds = (newYearsDate - currentDate) / 1000; 
const newdays = Math.floor(totalSeconds /3600/24);
const newhours = Math.floor(totalSeconds/3600%24);
const newminutes = Math.floor(totalSeconds/60)%60;
const newseconds = Math.floor(totalSeconds)%60;

export class EventDescription extends Component {
    
    state = {
        days:newdays,
        hours:newhours,
        minutes: newminutes,
        seconds: newseconds,
    }
    componentDidMount() {
       




        this.myInterval = setInterval(() => {
            const { days, hours, seconds, minutes } = this.state

            if (seconds > 0) {
                this.setState(({ seconds }) => ({
                    seconds: seconds - 1
                }))
            }
            if (seconds === 0) {
               if(minutes !== 0){
                this.setState(({ minutes }) => ({
                    minutes: minutes - 1,
                     seconds: 59
                    }))
               }
            }
            if (seconds === 0 && minutes === 0) {
               if(hours !== 0){
                this.setState(({ hours }) => ({
                    hours: hours - 1,
                     minutes: 59
                    }))
               }
            }
            if (seconds === 0 && minutes === 0 && hours ===0) {
               if(days === 0){
                clearInterval(this.myInterval)
               }
               else {
                        this.setState(({ days }) => ({
                            days: days - 1,
                            hours: 12
                        }))
                    }
               }
            
        }, 1000)
    }
    componentWillUnmount() {
        clearInterval(this.myInterval)
    }

 
    render() {
        const { days, hours, minutes, seconds } = this.state;
        
        return (
             
            <div className="about-event-wrapper">
            <div className="about-event-sub-wrapper">
                <div className="about-number-container">
                    
                    <button>{days<10 ? `0${days}` : days}</button>
                    <button>{hours<10 ? `0${hours}` : hours}</button>
                    <button>{minutes<10 ? `0${minutes}` : minutes}</button>
                    <button>{seconds<10 ? `0${seconds}` : seconds}</button>
                </div>
                
                <div className="about-par-container">
                    <h2>ABOUT THE EVENT</h2>
                    <div className="about-par-sub-container">
                        <div>
                            <i class="fas fa-map-marker-alt"></i>
                            <text>
                                <h3>LOCATION</h3>
                                <p> 
                                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nostrum
                                     beatae deserunt laborum non expedita atque voluptate officia
                                      obcaecati
                                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nostrum
                                     beatae deserunt laborum non expedita atque voluptate officia
                                      obcaecati
                                </p>
                            </text>
                        </div>
                        <div>
                             <i class="far fa-clock"></i>
                            <text>
                                <h3>LOCATION</h3>
                                <p>
                                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nostrum
                                     beatae deserunt laborum non expedita atque voluptate officia
                                      obcaecati
                                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nostrum
                                     beatae deserunt laborum non expedita atque voluptate officia
                                      obcaecati
                                </p>
                            </text>
                        </div>
                        <div>
                            <i class="fas fa-book-open"></i>
                            <text>
                                <h3>LOCATION</h3>
                                <p> 
                                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nostrum
                                     beatae deserunt laborum non expedita atque voluptate officia
                                      obcaecati
                                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nostrum
                                     beatae deserunt laborum non expedita atque voluptate officia
                                      obcaecati
                                </p>
                            </text>
                        </div>
                        
                    </div>
                </div>
           
            </div>
               
        </div>
       
        )
    }
}

export default EventDescription
