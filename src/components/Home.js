import React, { Component } from 'react'
import Navbar from './navbar/Navbar'
import {Link} from 'react-router-dom';
import SupplierPage from './services/SupplierPage';
import VenuePage from './services/VenuePage';
import CalenderPage from './services/CalenderPage';




class Home extends Component {

    state = {
        MainOpacity :'',
        CALENDER:'flex',
        AVENUE:'none',
        SUPPLIER:'none',
        CALENDERBORDER:'rgba(240,170,61)',
        VENUEBORDER:'transparent',
        SUPPLIERBORDER:'transparent',
        OPACITYDIV:'none'
    }

    ChangeToCalender = ()=>{
       setTimeout(() => {
        this.setState({OPACITYDIV:'none'})
           
       }, 1000);
       this.setState({MainOpacity:'',CALENDER:'flex', AVENUE:'none', SUPPLIER:'none',CALENDERBORDER:'rgba(240,170,61)',VENUEBORDER:'transparent',SUPPLIERBORDER:'transparent',OPACITYDIV:'none'})
       this.setState({OPACITYDIV:'flex'})
    }
    ChangeToAvenue = ()=>{
        setTimeout(() => {
            this.setState({OPACITYDIV:'none'})
               
           }, 1000);
        this.setState({MainOpacity:'',CALENDER:'none', AVENUE:'flex', SUPPLIER:'none',CALENDERBORDER:'transparent',VENUEBORDER:'rgba(240,170,61)',SUPPLIERBORDER:'transparent'})
        this.setState({OPACITYDIV:'flex'})
    }
    ChangeToSupplier = ()=>{
        setTimeout(() => {
            this.setState({OPACITYDIV:'none'})
               
           }, 1000);
        this.setState({MainOpacity:'',CALENDER:'none', AVENUE:'none', SUPPLIER:'block',CALENDERBORDER:'transparent',VENUEBORDER:'transparent',SUPPLIERBORDER:'rgba(240,170,61)'})
        this.setState({OPACITYDIV:'flex'})
    }
   
    render() {
        return (
            
            <div className="hm-container">
                 <Navbar/>
                <div className="other-nav">
                <Link onClick = {this.ChangeToCalender}>CALENDAR <hr className="calender-line" style={{backgroundColor:`${this.state.CALENDERBORDER}`}} /></Link>
                <Link onClick = {this.ChangeToAvenue}>AVENUE <hr className="calender-line" style={{backgroundColor:`${this.state.VENUEBORDER}`}} /></Link>
                <Link onClick = {this.ChangeToSupplier}>SUPPLIERS <hr className="calender-line" style={{backgroundColor:`${this.state.SUPPLIERBORDER}`}} /></Link>

                </div>
                
               {this.state.MainOpacity}
                <div style={{display:`${this.state.CALENDER}`,width:"100%"}}>
                    <CalenderPage/>
                </div>
                <div style={{display:`${this.state.AVENUE}`,width:"100%"}}>
                    
                    <VenuePage/>
                    
                </div>
                <div style={{display:`${this.state.SUPPLIER}`}}>
                    <SupplierPage/>
                </div>
          
            </div>
        )
    }
}

export default Home
