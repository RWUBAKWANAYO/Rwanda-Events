import React, { Component } from "react";
import badge from "../images/eventsImg/badge.png";
import event1 from "../images/eventsImg/event1.png";
import event2 from "../images/eventsImg/event2.png";
import event3 from "../images/eventsImg/event3.png";
import event4 from "../images/eventsImg/event4.png";
import event5 from "../images/eventsImg/event5.png";
import event6 from "../images/eventsImg/event6.png";
import event7 from "../images/eventsImg/event7.png";
import event8 from "../images/eventsImg/event8.png";
import event9 from "../images/eventsImg/event9.png";

export class EventCards extends Component {
  render() {
    const data = [
      {
        name: "Patriots Vs REG _ Agaciro",
        image: event1,
        date: "29 January 2020",
        available: true,
      }
      ,
      {
        name: "UGB Vs Bakolo Legacy Cup",
        image: event2,
        date: "17 February 2020",
        available: false,
      },
      {
        name: "I take the Lead Concert",
        image: event3,
        date: "05 February 2020",
        available: true,
      },
      {
        name: "BK All Stars",
        image: event4,
        date: "05 May 2020",
        available: true,
      },
      {
        name: "BK basketball league",
        image: event5,
        date: "20 July 2020",
        available: false,
      },
      {
        name: "Playoffs- Finals 2019",
        image: event6,
        date: "20 February 2020",
        available: true,
      },
      {
        name: "Youth Connect 2020",
        image: event7,
        date: "24 August 2020",
        available: true,
      },
      {
        name: "Kwita Izina Concert Day 1",
        image: event8,
        date: "29 November 2020",
        available: true,
      },
      {
        name: "Kwita Izina Concert Day 2",
        image: event9,
        date: "02 December 2020",
        available: false,
      },
    ];
    return (
      <>
        <div className="hm-search-wrapper">
          <input type="text" placeholder="Search By Category" />
        </div>
        <div className="eventWrapperDiv">
          {data.map((el) => (
            <div className="event-img-wrapper">
              <div className="eventPic-cont">
                <img src={el.image} alt="" />
              </div>
              <img src={badge} alt="" className="yellow-div" />
              <div className="event-text-container">
                <div className="event-text-wrapper1">
                  <p>{el.name}</p>
                  <p>......................</p>
                  <div className="event-text-wrapper1-sub">
                    <label>{el.date}</label>
                    {el.available === true ? (
                      <a href="/eventDetails" style={{ color: "#0BDA51" }}> Available</a>
                    ) : (
                      <a href="/eventDetails" style={{ color: "#EC0000" }}>Sold out</a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </>
    );
  }
}

export default EventCards;
