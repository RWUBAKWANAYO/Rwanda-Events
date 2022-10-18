import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import {Logo1} from './Logo';
import Signup from '../auth/Signup';
import Signin from '../auth/Signin'


 class Navbar extends Component {
     state = {
         navScroll:'transparent',
         hideMenu:"none",
         showMenu:"flex",
         menu:"0",
         menuText:"none",
         menuTransition:".4s",
         menuPadding:"0",
         menuShadow:"none",
         SIGNIN:'none',
         SIGNUP:'none',
         CLOSESIGNIN:'none',
         CLOSESIGNUP:'none',
        
     }
     componentWillMount() {
        window.addEventListener('scroll', this.handleScroll);
      }
    
      handleScroll = ()=>{
          if(window.scrollY > 20){
              this.setState({navScroll:"#1d2546"})
          }
          else{
            this.setState({navScroll:"transparent"})
          }
      }
     toggleMenu=()=>{
         this.setState({hideMenu:"flex",menu:"20rem",menuShadow:"0 0px 5px 2px rgba(0, 0, 0, 0.5)"})
         setTimeout(() => {
             this.setState({ menuText:"flex",menuPadding:"40px 0"})
         }, 100);
     }
     toggleClose=()=>{
        this.setState({showMenu:"flex",hideMenu:"none",menu:"0",menuShadow:"none",
                    menuText:"none",menuTransition:".4s",menuPadding:"0"})
     }

     openSignin=()=>{
         this.setState({SIGNIN:'block', CLOSESIGNIN:'block',SIGNUP:'none', CLOSESIGNUP:'none'})
     }
     openSignup=()=>{
         this.setState({SIGNUP:'block', CLOSESIGNUP:'block',SIGNIN:'none', CLOSESIGNIN:'none'})
     }
     closeAuth = ()=>{
        this.setState({SIGNUP:'none', CLOSESIGNUP:'none',SIGNIN:'none', CLOSESIGNIN:'none'})
     }

    
     

    render() {
        return (
            
            <section className="nav-section">
            <div className="border: 1px red dashed;" style={{backgroundColor:`${this.state.navScroll}`}}>
            <div className="nav-container">
                <div className="nav-sub-wrapper" >
                <Logo1/>
                <nav>
                <div className="menu-container">
                    <i class="fas fa-bars" onClick={this.toggleMenu} style={{display:`${this.state.showMenu}`}}></i>
                    
            </div>
                    <ul style={{maxHeight:`${this.state.menu}`, transition:`${this.state.menuTransition}`,
                    padding:`${this.state.menuPadding}`,boxShadow:`${this.state.menuShadow}`}}>
                        <i id= "close-menu-btn"class="fas fa-times"onClick={this.toggleClose} style={{display:`${this.state.hideMenu}`}}></i>
                        <li style={{display:`${this.state.menuText}`}}><Link onClick={this.navBorder1} to="/">Home</Link></li>
                        <li style={{display:`${this.state.menuText}`}}><Link onClick={this.navBorder4} to="/AboutUs">About</Link></li>
                        <li style={{display:`${this.state.menuText}`}}><Link onClick={this.navBorder2} to="/EventDetails">Event details</Link></li>
                        <li style={{display:`${this.state.menuText}`}}><Link onClick={this.navBorder3} to="/Conference">Conference</Link></li>
                        <li style={{display:`${this.state.menuText}`}}><Link onClick={this.navBorder5} to="/Privacy">Privacy & Policy</Link></li>
                    </ul>
                </nav>
                </div>
                <div className="event-search-container">
                <div className="event-search-wrapper">
                    <div id="first-search-cont">
                    <p className="search-category-par">Search </p>
                    <p className="search-category-par">By Category</p>
                    <div className="category-container">
                       <div>
                       <Link>Basic Website</Link>
                        <Link>Advanced Website</Link>
                        <Link>Event App</Link>
                        <Link>Abstracts</Link>
                        <Link>Participants matching</Link>
                        <Link>Marketing solution</Link>
                       </div>
                    </div>
                    </div>
                   
                    <input type="text" placeholder="search for an event"/>
                </div>
                <div className="auth-wraapper">
               <div className="auth-container">
               <i id="user-icon"class="far fa-user"></i>
               <div className="auth-div">
                <div className="auth-help"><Link onClick={this.openSignin}>LOGIN</Link>
                    <Link onClick={this.openSignup}>REGISTRATION</Link>
                    
                </div>
               </div>
               </div>
                <div className="social-media-container">
                    <i id="wrapper-icon" class="fas fa-share-alt-square"></i>
                    <div className="social-media-wrapper">
                    <Link><i class="fab fa-facebook-f" ></i></Link>
                    <Link><i class="fab fa-instagram"></i></Link>
                    <Link><i class="fab fa-twitter"></i></Link>
                    </div>
                </div>
            </div>
            </div>
            </div>
            </div>
            <div className="auth-other-wrapper" style={{display:`${this.state.SIGNUP}`}}>
            <i class="fas fa-times-circle"id="signupClose" onClick={this.closeAuth}></i>
                <Signup  openSignin={this.openSignin}/>
                
            </div>
            <div className="auth-other-wrapper" style={{display:`${this.state.SIGNIN}`}}>
            <i class="fas fa-times-circle" id="signinClose" onClick={this.closeAuth}></i>
                <Signin openSignup={this.openSignup}/>
            </div>
            </section>
        )
    }
}

export default Navbar
