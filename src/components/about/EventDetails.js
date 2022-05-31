import React, { Component } from 'react';
import Navbar from '../navbar/Navbar';
import mtn1 from '../images/payment/mtn1.png';
import airtel1 from '../images/payment/airtel1.png';
import visa1 from '../images/payment/visa1.png';
import masterCard1 from '../images/payment/masterCard1.png';
import eventDetailsBackground from '../images/eventdetails/eventDetailsBackground.png';
import Footer from '../Footer';
import EventDescription from './EventDescription';

class EventDetails extends Component {
    state ={
        TICKET:true,
        PAYMENT:false,
        NORMAL:false,
        VIP:false,
        Vvip:false,
        MTN:false,
        AIRTEL:false,
        VISA:false,
        MASTERCARD:false,
        NORMALAMOUNT:2000,
        VIPAMOUNT:4000,
        VVIPAMOUNT:8000,
        TICKETPRICE:0,
        AMOUNTTOPAY:0,
        INCRIMENT:1,
        CHECKPAY:'flex',
        PAYWITH:'none',
        
    }
    componentDidMount(){
        
    }
    backClick = ()=>{
        this.setState({TICKET:true, NORMAL:false, VIP:false, Vvip:false,MTN:false,AIRTEL:false,
                    MASTERCARD:false,VISA:false,INCRIMENT:1,TICKETPRICE:0,AMOUNTTOPAY:0,
                    CHECKPAY:'flex', PAYWITH:'none'})
    }
    normalClick = ()=>{
        this.setState({TICKET:false, NORMAL:true,TICKETPRICE:this.state.NORMALAMOUNT})
    }
    vipClick = ()=>{
        this.setState({TICKET:false, VIP:true,TICKETPRICE:this.state.VIPAMOUNT})
    }
    VvipClick = ()=>{
        this.setState({TICKET:false, Vvip:true,TICKETPRICE:this.state.VVIPAMOUNT})
    }
    paymentClick = ()=>{
        this.setState({TICKET:false,NORMAL:false,VIP:false, Vvip:false, PAYMENT:true})
    }


    mtnClick = ()=>{
        this.setState({PAYMENT:false, MTN:true})
    }
    mtnClick = ()=>{
        this.setState({PAYMENT:false, MTN:true})
    }
    airtelClick = ()=>{
        this.setState({PAYMENT:false, AIRTEL:true})
    }
    masterCardClick = ()=>{
        this.setState({PAYMENT:false, MASTERCARD:true})
    }
    visaClick = ()=>{
        this.setState({PAYMENT:false, VISA:true})
    }
    payClick1 = ()=>{
    
        this.setState({INCRIMENT:this.state.INCRIMENT+1})
        
        let amountToPay = (+this.state.TICKETPRICE)* (+this.state.INCRIMENT +1)
        this.setState({AMOUNTTOPAY:amountToPay})
        
    }
   
    payClick2 = ()=>{
        let amountToPay;
        if(this.state.INCRIMENT==1){
            this.setState({INCRIMENT:this.state.INCRIMENT})
        }
        else{
        this.setState({INCRIMENT:this.state.INCRIMENT-1})
         amountToPay = (+this.state.TICKETPRICE)* (+this.state.INCRIMENT -1)
        this.setState({AMOUNTTOPAY:amountToPay})
        
        }
    }

    checkPayment=(e)=>{
        e.preventDefault()
        this.setState({CHECKPAY:'none', PAYWITH:'flex'})
    }
   
    render() {
        let payWith ;
        
        if(this.state.VIP==true){
            payWith =<div id="about-main-cont" >
                        
            <div class="about-buy-container">
            <div className="about-buy-wrapper1">
                <h1>VIP</h1>
                <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nostrum
                 beatae deserunt laborum non expedita atque voluptate officia
                  obcaecati
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nostrum
                 beatae deserunt laborum non expedita atque voluptate officia
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nostrum
                 beatae deserunt laborum non expedita atque voluptate officia
                </p>
            </div>
            <div className="about-buy-wrapper2">
                <div className="about-price-sub-container">
                <div className="about-price-sub-container1">
                    <h1>{this.state.VIPAMOUNT}</h1>&nbsp;
                    <span>RWF</span>
                </div>
                <div className="about-price-sub-container2">
                &nbsp;&nbsp;<hr/> &nbsp;&nbsp; <p> PER TICKET</p>
                </div>
                </div>
                <h4>Number of tickets</h4>
                <div className="about-price-container3">
                    <button onClick={this.payClick2}>-</button> &nbsp;&nbsp;
                    <button>{this.state.INCRIMENT}</button> &nbsp;&nbsp;
                    <button onClick={this.payClick1}>+</button>
                </div>
                <div className="buy-now"><button className="buy-now" onClick={this.paymentClick}>BUY NOW</button ></div>
            </div>
        </div>

                    <div id="about-main-div" >
                    <i id="back-icon" class="fas fa-times-circle" onClick={this.backClick}> </i>
                    <p id="back-par">CANCEL</p>
                    </div>
                    </div>
        }
        else if(this.state.Vvip==true){
        payWith = <div id="about-main-cont" >
                        
            <div class="about-buy-container">
            <div className="about-buy-wrapper1">
                <h1>V-VIP</h1>
                <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nostrum
                 beatae deserunt laborum non expedita atque voluptate officia
                  obcaecati
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nostrum
                 beatae deserunt laborum non expedita atque voluptate officia
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nostrum
                 beatae deserunt laborum non expedita atque voluptate officia
                </p>
            </div>
            <div className="about-buy-wrapper2">
                <div className="about-price-sub-container">
                <div className="about-price-sub-container1">
                    <h1>{this.state.VVIPAMOUNT}</h1>&nbsp;
                    <span>RWF</span>
                </div>
                <div className="about-price-sub-container2">
                &nbsp;&nbsp;<hr/> &nbsp;&nbsp; <p> PER TICKET</p>
                </div>
                </div>
                <h4>Number of tickets</h4>
                <div className="about-price-container3">
                <button onClick={this.payClick2}>-</button> &nbsp;&nbsp;
                    <button>{this.state.INCRIMENT}</button> &nbsp;&nbsp;
                    <button onClick={this.payClick1}>+</button>
                </div>
                <div className="buy-now"><button className="buy-now" onClick = {this.paymentClick}>BUY NOW</button></div>
            </div>
        </div>

                    <div id="about-main-div" >
                    <i id="back-icon" class="fas fa-times-circle" onClick={this.backClick}> </i>
                    <p id="back-par">CANCEL</p>
                    </div>
                </div> 
        }
        else if(this.state.NORMAL==true){
        payWith =<div id="about-main-cont" >
                        
            <div class="about-buy-container">
            <div className="about-buy-wrapper1">
                <h1>{this.state.NORMALAMOUNT}</h1>
                <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nostrum
                 beatae deserunt laborum non expedita atque voluptate officia
                  obcaecati
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nostrum
                 beatae deserunt laborum non expedita atque voluptate officia
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nostrum
                 beatae deserunt laborum non expedita atque voluptate officia
                </p>
            </div>
            <div className="about-buy-wrapper2">
                <div className="about-price-sub-container">
                <div className="about-price-sub-container1">
                    <h1>2000</h1>&nbsp;
                    <span>RWF</span>
                </div>
                <div className="about-price-sub-container2">
                &nbsp;&nbsp;<hr/> &nbsp;&nbsp; <p> PER TICKET</p>
                </div>
                </div>
                <h4>Number of tickets</h4>
                <div className="about-price-container3">
                <button onClick={this.payClick2}>-</button> &nbsp;&nbsp;
                    <button>{this.state.INCRIMENT}</button> &nbsp;&nbsp;
                    <button onClick={this.payClick1}>+</button>
                </div>
                <div className="buy-now"><button className="buy-now" onClick={this.paymentClick}>BUY NOW</button></div>
            </div>
        </div>

                    <div id="about-main-div" >
                    <i id="back-icon" class="fas fa-times-circle" onClick={this.backClick}> </i>
                    <p id="back-par">CANCEL</p>
                    </div>
                </div> 

        }
        else if(this.state.TICKET==true){
            
          payWith =  <div class="about-pay-container">
          <div className="about-ticket-wrapper">
             <div onClick={this.normalClick}>
                 <h2>NORMAL</h2>
                 <text>
                 Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                 Lorem ipsum dolor sit, amet consectetur.
                 </text>
                 <hr/>
                 <h3>{this.state.NORMALAMOUNT}_</h3>
             </div >
             <div onClick={this.vipClick }>
                 <h2>VIP</h2>
                 <text>
                 Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                 Lorem ipsum dolor sit, amet consectetur.
                 </text>
                 <hr/>
                 <h3>{this.state.VIPAMOUNT}_</h3>
             </div>
             <div onClick={this.VvipClick}>
                 <h2>V-VIP</h2>
                 <text>
                 Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                 Lorem ipsum dolor sit, amet consectetur.
                 </text>
                 <hr/>
                 <h3>{this.state.VVIPAMOUNT}_</h3>
             </div>
          </div>
      </div>
  
        }

        else if(this.state.PAYMENT==true){
            if(this.state.INCRIMENT==1){
            payWith =<div id="about-main-cont" >
            <div class="about-pay-container">
            <div className="about-pay-wrapper">
               <div className="about-pay-sub-wrapper">
               <div className="about-price-sub-container">
                <div className="about-price-sub-container1">
                    <h1>{this.state.TICKETPRICE}</h1>&nbsp;
                    <span>RWF</span>
                </div>
                <div className="about-price-sub-container2">
                &nbsp;&nbsp;<hr/> &nbsp;&nbsp; <p> PER TICKET</p>
                </div>
                </div>
                <div className="about-price-container4">
                    <span>
                        <h1>{this.state.INCRIMENT}</h1>
                        <p>Number <br/> of tickets</p>
                    </span>
                    <span><hr/></span>
                    <span>
                        <h1>{this.state.AMOUNTTOPAY ===0 ? this.state.TICKETPRICE :this.state.AMOUNTTOPAY}</h1>
                        <h5>RWF</h5>
                    </span>
                </div>
               </div>

                <div className="pay-now">
                    
                    <div onClick={this.airtelClick}><img src={airtel1}/></div>
                    <div onClick={this.mtnClick}><img src={mtn1}/></div>
                    <div onClick={this.masterCardClick}><img src={masterCard1}/></div>
                    <div onClick={this.visaClick}><img src={visa1}/></div>
                </div>
            </div>
        </div>
    
                <div id="about-main-div" >
                <i id="back-icon" class="fas fa-times-circle" onClick={this.backClick}> </i>
                <p id="back-par">CANCEL</p>
                </div>
            </div> 

        }
        else{
            let personArr=[];
            for(var i = 1; i< this.state.INCRIMENT; i++){
                personArr.push('person name ' + i)
            }
            console.log(this.state.INCRIMENT)
            payWith =<div id="about-main-cont" >
            
            <div class="about-pay-container" style={{display:`${this.state.CHECKPAY}`}}>
            <div className="other-peoples-name">
                <form onSubmit={this.checkPayment} >
                <h3>Ticket owner's Names</h3>
                <input type="text" className="nameInput" value="Rwubakwanayo Olivier"/>
                {personArr.map((item)=>{ return(<input type="text" placeholder={item} className="nameInput" required key={item}/>)})}
                <input type="submit" value="Submit" id="personNameSubmit"/>
                </form>
            </div>
            </div>
                <div id="about-main-div" style={{display:`${this.state.CHECKPAY}`}}>
                <i id="back-icon" class="fas fa-times-circle" onClick={this.backClick}> </i>
                <p id="back-par">CANCEL</p>
                </div>

                
            payWith =<div id="about-main-cont" >
            <div class="about-pay-container" style={{display:`${this.state.PAYWITH}`}}>
            <div className="about-pay-wrapper">
               <div className="about-pay-sub-wrapper">
               <div className="about-price-sub-container">
                <div className="about-price-sub-container1">
                    <h1>{this.state.TICKETPRICE}</h1>&nbsp;
                    <span>RWF</span>
                </div>
                <div className="about-price-sub-container2">
                &nbsp;&nbsp;<hr/> &nbsp;&nbsp; <p> PER TICKET</p>
                </div>
                </div>
                <div className="about-price-container4">
                    <span>
                        <h1>{this.state.INCRIMENT}</h1>
                        <p>Number <br/> of tickets</p>
                    </span>
                    <span><hr/></span>
                    <span>
                        <h1>{this.state.AMOUNTTOPAY ===0 ? this.state.TICKETPRICE :this.state.AMOUNTTOPAY}</h1>
                        <h5>RWF</h5>
                    </span>
                </div>
               </div>

                <div className="pay-now">
                    
                    <div onClick={this.airtelClick}><img src={airtel1}/></div>
                    <div onClick={this.mtnClick}><img src={mtn1}/></div>
                    <div onClick={this.masterCardClick}><img src={masterCard1}/></div>
                    <div onClick={this.visaClick}><img src={visa1}/></div>
                </div>
            </div>
            </div>
    
                <div id="about-main-div" style={{display:`${this.state.PAYWITH}`}}>
                <i id="back-icon" class="fas fa-times-circle" onClick={this.backClick}> </i>
                <p id="back-par">CANCEL</p>
                </div>
            </div> 

            </div> 
        }
            }
           
        
           
       

        else if(this.state.MTN==true){
            payWith =<div id="about-main-cont" >
                
            <div class="about-paywith-container">
            <div className="about-paywith-sub-container" id="mtn-cont">
            <div className="about-paywith-wrapper" id="mtn-wrapper">
                  <div className="about-pay-sub-wrapper">
                  <div className="about-price-sub-container">
                   <div className="about-price-sub-container1">
                       <h1>{this.state.TICKETPRICE}</h1>&nbsp;
                       <span>RWF</span>
                   </div>
                   <div className="about-price-sub-container2">
                   &nbsp;&nbsp;<hr/> &nbsp;&nbsp; <p> PER TICKET</p>
                   </div>
                   </div>
                   <div className="about-price-container4">
                   <span>
                        <h1>{this.state.INCRIMENT}</h1>
                        <p>Number <br/> of tickets</p>
                    </span>
                    <span><hr/></span>
                    <span>
                        <h1>{this.state.AMOUNTTOPAY ===0 ? this.state.TICKETPRICE :this.state.AMOUNTTOPAY}</h1>
                        <h5>RWF</h5>
                    </span>
                   </div>
                  </div>

                   <div className="mtn">
                       <img src={mtn1}/>
                       <input type="text" placeholder="+25078****************"/>
                       <button>PAY HERE</button>
                   </div>
               </div>
          
            </div>
           </div>
       
                <div id="about-main-div" >
                <i id="back-icon" class="fas fa-times-circle" onClick={this.backClick}> </i>
                <p id="back-par">CANCEL</p>
                </div>
            </div> 
        }
        else if(this.state.AIRTEL==true){
            payWith =<div id="about-main-cont" >
                        
            <div class="about-paywith-container">
            <div className="about-paywith-sub-container" id="airtel-cont">
            <div className="about-paywith-wrapper" id="airtel-wrapper">
                  <div className="about-pay-sub-wrapper">
                  <div className="about-price-sub-container">
                   <div className="about-price-sub-container1">
                       <h1>{this.state.TICKETPRICE}</h1>&nbsp;
                       <span>RWF</span>
                   </div>
                   <div className="about-price-sub-container2">
                   &nbsp;&nbsp;<hr/> &nbsp;&nbsp; <p> PER TICKET</p>
                   </div>
                   </div>
                   <div className="about-price-container4">
                   <span>
                        <h1>{this.state.INCRIMENT}</h1>
                        <p>Number <br/> of tickets</p>
                    </span>
                    <span><hr/></span>
                    <span>
                        <h1>{this.state.AMOUNTTOPAY ===0 ? this.state.TICKETPRICE :this.state.AMOUNTTOPAY}</h1>
                        <h5>RWF</h5>
                    </span>
                   </div>
                  </div>

                   <div className="mtn">
                       <img src={airtel1}/>
                       <input type="text" placeholder="+25078****************"/>
                       <button>PAY HERE</button>
                   </div>
               </div>
          
            </div>
           </div>
       
                <div id="about-main-div" >
                <i id="back-icon" class="fas fa-times-circle" onClick={this.backClick}> </i>
                <p id="back-par">CANCEL</p>
                </div>
            </div> 
            
        }
        else if(this.state.MASTERCARD==true){
            payWith =<div id="about-main-cont" >
                     
            <div class="about-paywith-container" id="credit-card">
            <div className="about-paywith-sub-container" >
            <div className="about-paywith-wrapper" >
                  <div className="about-pay-sub-wrapper">
                  <div className="about-price-sub-container">
                   <div className="about-price-sub-container1">
                       <h1>{this.state.TICKETPRICE}</h1>&nbsp;
                       <span>RWF</span>
                   </div>
                   <div className="about-price-sub-container2">
                   &nbsp;&nbsp;<hr/> &nbsp;&nbsp; <p> PER TICKET</p>
                   </div>
                   </div>
                   <div className="about-price-container4">
                   <span >
                        <h1 id="ab-pr1">{this.state.INCRIMENT}</h1>
                        <p id="ab-pr2">Number <br/> of tickets</p>
                    </span >
                    <span id="ab-pr3"><hr /></span>
                    <span>
                        <h1 id="ab-pr4">{this.state.AMOUNTTOPAY ===0 ? this.state.TICKETPRICE :this.state.AMOUNTTOPAY}</h1>
                        <h5 id="ab-pr5">RWF</h5>
                    </span>
                   </div>
                  </div>

                   <div className="mtn">
                       <img id="credit-card-img" src={masterCard1}/>
                       <input  id="credit-card-input" type="text" placeholder="+25078****************"/>
                       <button id="credit-card-button">PAY HERE</button>
                   </div>
               </div>
          
            </div>
           </div>
       
                <div id="about-main-div" >
                <i id="back-icon" class="fas fa-times-circle" onClick={this.backClick}> </i>
                <p id="back-par">CANCEL</p>
                </div>
            </div> 

        }
        else if(this.state.VISA==true){
            payWith =<div id="about-main-cont" >
                       
            <div class="about-paywith-container" id="credit-card">
            <div className="about-paywith-sub-container" >
            <div className="about-paywith-wrapper" >
                  <div className="about-pay-sub-wrapper">
                  <div className="about-price-sub-container">
                   <div className="about-price-sub-container1">
                       <h1>{this.state.TICKETPRICE}</h1>&nbsp;
                       <span>RWF</span>
                   </div>
                   <div className="about-price-sub-container2">
                   &nbsp;&nbsp;<hr/> &nbsp;&nbsp; <p> PER TICKET</p>
                   </div>
                   </div>
                   <div className="about-price-container4">
                       <span>
                       <h1 id="ab-pr1">{this.state.INCRIMENT}</h1>
                           <p id="ab-pr7">Number <br/> of tickets</p>
                       </span>
                       <span id="ab-pr8"><hr /></span>
                       <span>
                       <h1 id="ab-pr4">{this.state.AMOUNTTOPAY ===0 ? this.state.TICKETPRICE :this.state.AMOUNTTOPAY}</h1>
                        <h5 id="ab-pr5">RWF</h5>
                       </span>
                   </div>
                  </div>

                   <div className="mtn">
                       <img id="credit-card-img" src={visa1}/>
                       <input  id="credit-card-input" type="text" placeholder="+25078****************"/>
                       <button id="credit-card-button">PAY HERE</button>
                   </div>
               </div>
          
            </div>
           </div>
       
                <div id="about-main-div" >
                <i id="back-icon" class="fas fa-times-circle" onClick={this.backClick}> </i>
                <p id="back-par">CANCEL</p>
                </div>
            </div> 

        }
        
        
        
        return (
            
            <div style={{width:"100%"}}>
                <Navbar/>
                <div className="about-container">
                <div className="eventDetBgrd"><img src={eventDetailsBackground}/></div>
                <EventDescription/>
                </div>
                <div className="about-item-container">
                    {payWith}
                </div>
                
                <Footer/>
            </div>


        )
    }
}

export default EventDetails;
