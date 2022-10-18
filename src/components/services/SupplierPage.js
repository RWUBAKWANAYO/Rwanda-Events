import React, { Component } from 'react';
import SupplierSvg1 from '../suppliersvg/SupplierSvg1';
import SupplierSvg2 from '../suppliersvg/SupplierSvg2';
import soundsystem1 from '../images/supplier/soundsystem1.png';
import soundsystem2 from '../images/supplier/soundsystem2.png';
import dress1 from '../images/supplier/dress1.png';
import dress2 from '../images/supplier/dress2.png';
import dress3 from '../images/supplier/dress3.png';
import car from '../images/supplier/car.png';
import chair2 from '../images/supplier/chair2.png';
import Footer from '../Footer';

export class SupplierPage extends Component {
    state={
        SUPPLIER1:"block",
        SUPPLIER2:"none",
        SUPPLIER3:"none",
        SUPPLIER4:"none",
        SUPPLIER5:"none",
        SUPPLIER6:"none",
        SUPPLIER7:"none",
        SUPPLIER8:"none",
        SUPPLIER9:"none",
        SUPPLIER10:"none",
        SUPPLIER11:"none",
        SUPPLIER12:"none",
        SUPPLIERCONTACT1:"none", SUPPLIERCONTACT2:"none", SUPPLIERCONTACT3:"none",
        SHADOW:"0",
        SHADOWPOSITION:"-1%",
        BTNCOLOR1:'#fff',BTNCOLOR2:'#999',BTNCOLOR3:'#999',BTNCOLOR4:'#999',
        BUTTON1:'#3d70cb',BUTTON2:'whitesmoke', BUTTON3:'whitesmoke', BUTTON4:'whitesmoke',
        IMG:soundsystem1,
    }
    supplier1Click=()=>{
          const Func =  ()=>{
            this.setState({BUTTON4:'whitesmoke',BUTTON2:'whitesmoke',BUTTON3:'whitesmoke',BUTTON1:'#3d70cb',
            BTNCOLOR4:'#999',BTNCOLOR2:'#999',BTNCOLOR3:'#999',BTNCOLOR1:'#fff',})
               setTimeout(() => {
                this.setState({SUPPLIER1:'block',SUPPLIER2:'none',SUPPLIER3:'none',SUPPLIER4:'none',
                SUPPLIER5:'none',SUPPLIER6:'none',SUPPLIER7:'none',SUPPLIER8:'none',SUPPLIER9:'none',
                SUPPLIER10:'none',SUPPLIER11:'none',SUPPLIER12:'none',SUPPLIER13:'none',SHADOWPOSITION:"100%",
                })
                setTimeout(() => {
                    this.setState({SHADOW:"0",SHADOWPOSITION:"-1%"})
                    }, 500);
                this.setState({SHADOW:"0"})
            }, 800);
            this.setState({SHADOW:"100%"})
            }
        Func() 
    }   
    supplier2Click=()=>{
          const Func =  ()=>{
            this.setState({BUTTON1:'whitesmoke',BUTTON4:'whitesmoke',BUTTON3:'whitesmoke',BUTTON2:'#3d70cb',
            BTNCOLOR1:'#999',BTNCOLOR4:'#999',BTNCOLOR3:'#999',BTNCOLOR2:'#fff',})
            setTimeout(() => {
                this.setState({SUPPLIER1:'none',SUPPLIER2:'block',SUPPLIER3:'none',SUPPLIER4:'none',
                SUPPLIER5:'none',SUPPLIER6:'none',SUPPLIER7:'none',SUPPLIER8:'none',SUPPLIER9:'none',
                SUPPLIER10:'none',SUPPLIER11:'none',SUPPLIER12:'none',SUPPLIER13:'none',SHADOWPOSITION:"100%"})
                setTimeout(() => {
                    this.setState({SHADOW:"0",SHADOWPOSITION:"-1%"})
                }, 500);
                this.setState({SHADOW:"0"})
            }, 800);
            this.setState({SHADOW:"100%"})
            }
        Func() 
    }   
    supplier3Click=()=>{
          const Func =  ()=>{
              this.setState({BUTTON1:'whitesmoke',BUTTON2:'whitesmoke',BUTTON4:'whitesmoke',BUTTON3:'#3d70cb',
            BTNCOLOR1:'#999',BTNCOLOR2:'#999',BTNCOLOR4:'#999',BTNCOLOR3:'#fff',})
            setTimeout(() => {
                this.setState({SUPPLIER1:'none',SUPPLIER2:'none',SUPPLIER3:'block',SUPPLIER4:'none',
                SUPPLIER5:'none',SUPPLIER6:'none',SUPPLIER7:'none',SUPPLIER8:'none',SUPPLIER9:'none',
                SUPPLIER10:'none',SUPPLIER11:'none',SUPPLIER12:'none',SUPPLIER13:'none',SHADOWPOSITION:"100%"})
                setTimeout(() => {
                    this.setState({SHADOW:"0",SHADOWPOSITION:"-1%"})
                }, 500);
                this.setState({SHADOW:"0"})
            }, 800);
            this.setState({SHADOW:"100%"})
            }
        Func() 
    }   
    supplier4Click=()=>{
          const Func =  ()=>{
            this.setState({BUTTON1:'whitesmoke',BUTTON2:'whitesmoke',BUTTON3:'whitesmoke',BUTTON4:'#3d70cb',
            BTNCOLOR1:'#999',BTNCOLOR2:'#999',BTNCOLOR3:'#999',BTNCOLOR4:'#fff',})
            setTimeout(() => {
                this.setState({SUPPLIER1:'none',SUPPLIER2:'none',SUPPLIER3:'none',SUPPLIER4:'block',
                SUPPLIER5:'none',SUPPLIER6:'none',SUPPLIER7:'none',SUPPLIER8:'none',SUPPLIER9:'none',
                SUPPLIER10:'none',SUPPLIER11:'none',SUPPLIER12:'none',SUPPLIER13:'none',SHADOWPOSITION:"100%"})
                setTimeout(() => {
                    this.setState({SHADOW:"0",SHADOWPOSITION:"-1%" })
                }, 500);
                this.setState({SHADOW:"0"})
            }, 800);
            this.setState({SHADOW:"100%", })
            }
        Func() 
    }   
    supplier5Click=()=>{
          const Func =  ()=>{
            setTimeout(() => {
                this.setState({SUPPLIER1:'none',SUPPLIER2:'none',SUPPLIER3:'none',SUPPLIER4:'none',
                SUPPLIER5:'block',SUPPLIER6:'none',SUPPLIER7:'none',SUPPLIER8:'none',SUPPLIER9:'none',
                SUPPLIER10:'none',SUPPLIER11:'none',SUPPLIER12:'none',SUPPLIER13:'none',SHADOWPOSITION:"100%"})
                setTimeout(() => {
                    this.setState({SHADOW:"0",SHADOWPOSITION:"-1%"})
                }, 500);
                this.setState({SHADOW:"0"})
            }, 800);
            this.setState({SHADOW:"100%"})
            }
        Func() 
    }   
    supplier6Click=()=>{
          const Func =  ()=>{
            setTimeout(() => {
                this.setState({SUPPLIER1:'none',SUPPLIER2:'none',SUPPLIER3:'none',SUPPLIER4:'none',
                SUPPLIER5:'none',SUPPLIER6:'block',SUPPLIER7:'none',SUPPLIER8:'none',SUPPLIER9:'none',
                SUPPLIER10:'none',SUPPLIER11:'none',SUPPLIER12:'none',SUPPLIER13:'none',SHADOWPOSITION:"100%"})
                setTimeout(() => {
                    this.setState({SHADOW:"0",SHADOWPOSITION:"-1%"})
                }, 500);
                this.setState({SHADOW:"0"})
            }, 800);
            this.setState({SHADOW:"100%"})
            }
        Func() 
    }   
    supplier7Click=()=>{
          const Func =  ()=>{
            setTimeout(() => {
                this.setState({SUPPLIER1:'none',SUPPLIER2:'none',SUPPLIER3:'none',SUPPLIER4:'none',
                SUPPLIER5:'none',SUPPLIER6:'none',SUPPLIER7:'block',SUPPLIER8:'none',SUPPLIER9:'none',
                SUPPLIER10:'none',SUPPLIER11:'none',SUPPLIER12:'none',SUPPLIER13:'none',SHADOWPOSITION:"100%"})
                setTimeout(() => {
                    this.setState({SHADOW:"0",SHADOWPOSITION:"-1%"})
                }, 500);
                this.setState({SHADOW:"0"})
            }, 800);
            this.setState({SHADOW:"100%"})
            }
        Func() 
    }   
    supplier8Click=()=>{
          const Func =  ()=>{
            setTimeout(() => {
                this.setState({SUPPLIER1:'none',SUPPLIER2:'none',SUPPLIER3:'none',SUPPLIER4:'none',
                SUPPLIER5:'none',SUPPLIER6:'none',SUPPLIER7:'none',SUPPLIER8:'block',SUPPLIER9:'none',
                SUPPLIER10:'none',SUPPLIER11:'none',SUPPLIER12:'none',SUPPLIER13:'none',SHADOWPOSITION:"100%"})
                setTimeout(() => {
                    this.setState({SHADOW:"0",SHADOWPOSITION:"-1%"})
                }, 500);
                this.setState({SHADOW:"0"})
            }, 800);
            this.setState({SHADOW:"100%"})
            }
        Func() 
    }   
    supplier9Click=()=>{
          const Func =  ()=>{
            setTimeout(() => {
                this.setState({SUPPLIER1:'none',SUPPLIER2:'none',SUPPLIER3:'none',SUPPLIER4:'none',
                SUPPLIER5:'none',SUPPLIER6:'none',SUPPLIER7:'none',SUPPLIER8:'none',SUPPLIER9:'block',
                SUPPLIER10:'none',SUPPLIER11:'none',SUPPLIER12:'none',SUPPLIER13:'none',SHADOWPOSITION:"100%"})
                setTimeout(() => {
                    this.setState({SHADOW:"0",SHADOWPOSITION:"-1%"})
                }, 500);
                this.setState({SHADOW:"0"})
            }, 800);
            this.setState({SHADOW:"100%"})
            }
        Func() 
    }   
    supplier10Click=()=>{
          const Func =  ()=>{
            setTimeout(() => {
                this.setState({SUPPLIER1:'none',SUPPLIER2:'none',SUPPLIER3:'none',SUPPLIER4:'none',
                SUPPLIER5:'none',SUPPLIER6:'none',SUPPLIER7:'none',SUPPLIER8:'none',SUPPLIER9:'none',
                SUPPLIER10:'block',SUPPLIER11:'none',SUPPLIER12:'none',SUPPLIER13:'none',SHADOWPOSITION:"100%"})
                setTimeout(() => {
                    this.setState({SHADOW:"0",SHADOWPOSITION:"-1%"})
                }, 500);
                this.setState({SHADOW:"0"})
            }, 800);
            this.setState({SHADOW:"100%"})
            }
        Func() 
    }   
    supplier11Click=()=>{
          const Func =  ()=>{
            setTimeout(() => {
                this.setState({SUPPLIER1:'none',SUPPLIER2:'none',SUPPLIER3:'none',SUPPLIER4:'none',
                SUPPLIER5:'none',SUPPLIER6:'none',SUPPLIER7:'none',SUPPLIER8:'none',SUPPLIER9:'none',
                SUPPLIER10:'none',SUPPLIER11:'block',SUPPLIER12:'none',SUPPLIER13:'none',SHADOWPOSITION:"100%"})
                setTimeout(() => {
                    this.setState({SHADOW:"0",SHADOWPOSITION:"-1%"})
                }, 500);
                this.setState({SHADOW:"0"})
            }, 800);
            this.setState({SHADOW:"100%"})
            }
        Func() 
    }   
    supplier12Click=()=>{
          const Func =  ()=>{
            setTimeout(() => {
                this.setState({SUPPLIER1:'none',SUPPLIER2:'none',SUPPLIER3:'none',SUPPLIER4:'none',
                SUPPLIER5:'none',SUPPLIER6:'none',SUPPLIER7:'none',SUPPLIER8:'none',SUPPLIER9:'none',
                SUPPLIER10:'none',SUPPLIER11:'none',SUPPLIER12:'block',SUPPLIER13:'none',SHADOWPOSITION:"100%"})
                setTimeout(() => {
                    this.setState({SHADOW:"0",SHADOWPOSITION:"-1%"})
                }, 500);
                this.setState({SHADOW:"0"})
            }, 800);
            this.setState({SHADOW:"100%"})
            }
        Func() 
    } 
    
    handleSupplierForm1=()=>{
        this.setState({SUPPLIERCONTACT1:'none',SUPPLIERCONTACT2:'none',SUPPLIERCONTACT3:'none',})
    }
    handleSupplierForm2=()=>{
        this.setState({SUPPLIERCONTACT1:'none',SUPPLIERCONTACT2:'none',SUPPLIERCONTACT3:'none',})
    }
    handleSupplierForm3=()=>{
        this.setState({SUPPLIERCONTACT1:'none',SUPPLIERCONTACT2:'none',SUPPLIERCONTACT3:'none',})
    }


    supplierContactClick1a=()=>{
        this.setState({SUPPLIERCONTACT1:"flex",SUPPLIERCONTACT2:"none",SUPPLIERCONTACT3:"none",IMG:soundsystem1})
    }
    supplierContactClick1b=()=>{
        this.setState({SUPPLIERCONTACT1:"flex",SUPPLIERCONTACT2:"none",SUPPLIERCONTACT3:"none",IMG:car})
    }
    supplierContactClick1c=()=>{
        this.setState({SUPPLIERCONTACT1:"flex",SUPPLIERCONTACT2:"none",SUPPLIERCONTACT3:"none",IMG:dress1})
    }
    supplierContactClick2a=()=>{
        this.setState({SUPPLIERCONTACT2:"flex",SUPPLIERCONTACT1:"none",SUPPLIERCONTACT3:"none",IMG:soundsystem2})
    }
    supplierContactClick2b=()=>{
        this.setState({SUPPLIERCONTACT2:"flex",SUPPLIERCONTACT1:"none",SUPPLIERCONTACT3:"none",IMG:dress2})
    }
    supplierContactClick2c=()=>{
        this.setState({SUPPLIERCONTACT2:"flex",SUPPLIERCONTACT1:"none",SUPPLIERCONTACT3:"none",IMG:chair2})
    }
    supplierContactClick3a=()=>{
        this.setState({SUPPLIERCONTACT3:"flex",SUPPLIERCONTACT1:"none",SUPPLIERCONTACT2:"none"})
    }
    supplierContactClick3b=()=>{
        this.setState({SUPPLIERCONTACT3:"flex",SUPPLIERCONTACT1:"none",SUPPLIERCONTACT2:"none"})
    }
    supplierContactClick3c=()=>{
        this.setState({SUPPLIERCONTACT3:"flex",SUPPLIERCONTACT1:"none",SUPPLIERCONTACT2:"none"})
    }



    formImg=()=>{
        this.setState({IMG:car})
    }
    
    render() {
        return (
            
            <section className="supplier-container">
            <div className="supplier-intro-wrapper2">
                <div className="supplier-intro-sub-wrapper">
                    <SupplierSvg1/>
                    <div className="supplier-intro-par-wrapper">
                    <h1>GET WHAT YOU NEED</h1>
                    <h1>FOR YOUR EVENT</h1>
                    <div ><button>get it now</button></div>
                    </div>
                </div>
            </div>
            <div className="supplier-cat-cont">
                <div className="supplier-cat-wrapper1">
                    <div className="supplier-cat-wrapper1-par">
                        <h4>Category</h4>
                        <p onClick={this.supplier1Click}>AV Services And Equipment</p>
                        <p onClick={this.supplier2Click}>AV Services And Equipment</p>
                        <p onClick={this.supplier3Click}>AV Services And Equipment</p>
                        <p onClick={this.supplier4Click}>AV Services And Equipment</p>
                        <p onClick={this.supplier5Click}>AV Services And Equipment</p>
                        <p onClick={this.supplier6Click}>AV Services And Equipment</p>
                        <p onClick={this.supplier7Click}>AV Services And Equipment</p>
                        <p onClick={this.supplier8Click}>AV Services And Equipment</p>
                        <p onClick={this.supplier9Click}>AV Services And Equipment</p>
                        <p onClick={this.supplier10Click}>AV Services And Equipment</p>
                        <p onClick={this.supplier11Click}>AV Services And Equipment</p>
                        <p onClick={this.supplier12Click}>AV Services And Equipment</p>
                        
                    </div>
                </div>
                <div className="supplier-cat-main-cont">
                    <div className="supplier-cat-shadow" style={{width:`${this.state.SHADOW}`,left:`${this.state.SHADOWPOSITION}`}}></div>
                    <div className="supplier-cat-wrapper2" style={{display:`${this.state.SUPPLIER1}`}}>
                    <div className="supplier-cat-wrapper2-div">
        
                    <div onClick={this.supplierContactClick1a}>
                        <img src={soundsystem1} alt="get what you deserve"/>
                        <h5>1 Sound system</h5>
                        <p>Kigali Sound System</p>
                        </div>
                        
                    <div  onClick={this.supplierContactClick1b}>
                        <img src={car} alt="get what you deserve"/>
                        <h5>Teramont Car</h5>
                        <p>Akagera Motor</p>
                    </div>
                    
                    
                    <div  onClick={this.supplierContactClick1c}>
                        <img src={dress1}alt="get what you deserve"/>
                        <h5>Wedding dress</h5>
                        <p>Fashion Rwanda</p>
                    </div>
                    <div id="supplierCatShadow"  style={{display:`${this.state.SUPPLIERCONTACT1}`}}>
                            <i class="fas fa-times" id="shadow-cross" onClick={this.handleSupplierForm1}></i>
                            <div id="supplierCatShadowImg"  style={{border:'none',boxShadow:'none'}}>
                                <img src={this.state.IMG}/>
                                <h6>sound system</h6>
                                <p> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nostrum</p>
                            </div>
                            <div id="supplierCatShadowForm" style={{border:'none',boxShadow:'none'}}>
                            <h4>CONTACT THE SUPPLIER</h4>
                            <input type="text" placeholder="Full name"/>
                            <input type="text" placeholder="Phone number"/>
                            <input type="text" placeholder="Message"/>
                            <button>SEND</button>
                            </div>
                            
                    </div>
                   
                    </div>
                    
                    <div className="supplier-cat-wrapper2-div">
                    <div  onClick={this.supplierContactClick2a}>
                        <img src={soundsystem2} alt="get what you deserve"/>
                        <h5>Sound system</h5>
                        <p>Kigali Sound System</p>
                    </div >
                    <div  onClick={this.supplierContactClick2b}>
                        <img src={dress2} alt="get what you deserve"/>
                        <h5>Wedding dress</h5>
                        <p>Fashion Rwanda</p>
                    </div>
                    

                    <div  onClick={this.supplierContactClick2c}>
                        <img src={chair2}/>
                        <h5>Chair</h5>
                        <p>Kigali Furniture Rwanda</p>
                    </div>

                    <div id="supplierCatShadow"  style={{display:`${this.state.SUPPLIERCONTACT2}`}}>
                            <i class="fas fa-times" id="shadow-cross" onClick={this.handleSupplierForm2}></i>
                            <div id="supplierCatShadowImg"  style={{border:'none',boxShadow:'none'}}>
                                <img src={this.state.IMG}/>
                                <h6>sound system</h6>
                                <p> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nostrum</p>
                            </div>
                            <div id="supplierCatShadowForm" style={{border:'none',boxShadow:'none'}}>
                            <h4>CONTACT THE SUPPLIER</h4>
                            <input type="text" placeholder="Full name"/>
                            <input type="text" placeholder="Phone number"/>
                            <input type="text" placeholder="Message"/>
                            <button>SEND</button>
                            </div>
                            
                    </div>
                    
                    </div>
                    
                    <div className="supplier-cat-wrapper2-div">
                    <div  onClick={this.supplierContactClick3a}>
                        <img src={soundsystem2}/>
                        <h5>Sound system</h5>
                        <p>Kigali Sound System</p>
                    </div>
                    <div  onClick={this.supplierContactClick3b}>
                        <img src={dress3}/>
                        <h5>Wedding dress</h5>
                        <p>Fashion Rwanda</p>
                    </div>
                    

                    <div  onClick={this.supplierContactClick3c}>
                        <img src={chair2}/>
                        <h5>Chair</h5>
                        <p>Kigali Furniture Rwanda</p>
                    </div>

                        <div id="supplierCatShadow"  style={{display:`${this.state.SUPPLIERCONTACT3}`}}>
                            <i class="fas fa-times" id="shadow-cross" onClick={this.handleSupplierForm3}></i>
                            <div id="supplierCatShadowImg"  style={{border:'none',boxShadow:'none'}}>
                                <img src={this.state.IMG}/>
                                <h6>sound system</h6>
                                <p> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nostrum</p>
                            </div>
                            <div id="supplierCatShadowForm" style={{border:'none',boxShadow:'none'}}>
                            <h4>CONTACT THE SUPPLIER</h4>
                            <input type="text" placeholder="Full name"/>
                            <input type="text" placeholder="Phone number"/>
                            <input type="text" placeholder="Message"/>
                            <button>SEND</button>
                            </div>
                            
                    </div>
                    
                    </div>
                    <div className="next-button">
                    <i class="fas fa-chevron-left"></i>
                        <button onClick={this.supplier1Click} style={{backgroundColor:`${this.state.BUTTON1}`, color:`${this.state.BTNCOLOR1}`}}>1</button>
                        <button onClick={this.supplier2Click} style={{backgroundColor:`${this.state.BUTTON2}`, color:`${this.state.BTNCOLOR2}`}}>2</button>
                        <button onClick={this.supplier3Click} style={{backgroundColor:`${this.state.BUTTON3}`, color:`${this.state.BTNCOLOR3}`}}>3</button>
                        <button onClick={this.supplier4Click} style={{backgroundColor:`${this.state.BUTTON4}`, color:`${this.state.BTNCOLOR4}`}}>4</button>
                        <i class="fas fa-chevron-right"></i>
                    </div>
                    </div>
                
                    <div className="supplier-cat-wrapper2" style={{display:`${this.state.SUPPLIER2}`}}>
                    <div className="supplier-cat-wrapper2-div">
                    <div onClick={this.supplierContactClick1}>
                        <img src={soundsystem1}/>
                        <h5>2Sound system</h5>
                        <p>Kigali Sound System</p>
                    </div>
                    <div onClick={this.supplierContactClick1}>
                        <img src={car}/>
                        <h5>Teramont Car</h5>
                        <p>Akagera Motor</p>
                    </div>
                    
                    
                    <div onClick={this.supplierContactClick1}>
                        <img src={dress1}/>
                        <h5>Wedding dress</h5>
                        <p>Fashion Rwanda</p>
                    </div>
                   
                    </div>
                    
                    <div className="supplier-cat-wrapper2-div">
                    <div onClick={this.supplierContactClick2a}>
                        <img src={soundsystem2}/>
                        <h5>Sound system</h5>
                        <p>Kigali Sound System</p>
                    </div>
                    <div onClick={this.supplierContactClick2b}>
                        <img src={dress2}/>
                        <h5>Wedding dress</h5>
                        <p>Fashion Rwanda</p>
                    </div>
                    

                    <div onClick={this.supplierContactClick2c}>
                        <img src={chair2}/>
                        <h5>Chair</h5>
                        <p>Kigali Furniture Rwanda</p>
                    </div>
                    </div>
                    
                    <div className="supplier-cat-wrapper2-div">
                    <div onClick={this.supplierContactClick3}>
                        <img src={soundsystem2}/>
                        <h5>Sound system</h5>
                        <p>Kigali Sound System</p>
                    </div>
                    <div onClick={this.supplierContactClick3}>
                        <img src={dress3}/>
                        <h5>Wedding dress</h5>
                        <p>Fashion Rwanda</p>
                    </div>
                    

                    <div onClick={this.supplierContactClick3}>
                        <img src={chair2}/>
                        <h5>Chair</h5>
                        <p>Kigali Furniture Rwanda</p>
                    </div>
                  
                    
                    </div>
                    <div className="next-button">
                        <button onClick={this.supplier1Click} style={{backgroundColor:`${this.state.BUTTON1}`, color:`${this.state.BTNCOLOR1}`}}>1</button>
                        <button onClick={this.supplier2Click} style={{backgroundColor:`${this.state.BUTTON2}`, color:`${this.state.BTNCOLOR2}`}}>2</button>
                        <button onClick={this.supplier3Click} style={{backgroundColor:`${this.state.BUTTON3}`, color:`${this.state.BTNCOLOR3}`}}>3</button>
                        <button onClick={this.supplier4Click} style={{backgroundColor:`${this.state.BUTTON4}`, color:`${this.state.BTNCOLOR4}`}}>4</button>
                    </div>
                </div>
                
                
                    <div className="supplier-cat-wrapper2" style={{display:`${this.state.SUPPLIER3}`}}>
                    <div className="supplier-cat-wrapper2-div">
                    <div>
                        <img src={soundsystem1}/>
                        <h5>3Sound system</h5>
                        <p>Kigali Sound System</p>
                    </div>
                    <div>
                        <img src={car}/>
                        <h5>Teramont Car</h5>
                        <p>Akagera Motor</p>
                    </div>
                    
                    
                    <div>
                        <img src={dress1}/>
                        <h5>Wedding dress</h5>
                        <p>Fashion Rwanda</p>
                    </div>
                   
                    </div>
                    
                    <div className="supplier-cat-wrapper2-div">
                    <div>
                        <img src={soundsystem2}/>
                        <h5>Sound system</h5>
                        <p>Kigali Sound System</p>
                    </div>
                    <div>
                        <img src={dress2}/>
                        <h5>Wedding dress</h5>
                        <p>Fashion Rwanda</p>
                    </div>
                    

                    <div>
                        <img src={chair2}/>
                        <h5>Chair</h5>
                        <p>Kigali Furniture Rwanda</p>
                    </div>
                   
                    
                    </div>
                    
                    <div className="supplier-cat-wrapper2-div">
                    <div>
                        <img src={soundsystem2}/>
                        <h5>Sound system</h5>
                        <p>Kigali Sound System</p>
                    </div>
                    <div>
                        <img src={dress3}/>
                        <h5>Wedding dress</h5>
                        <p>Fashion Rwanda</p>
                    </div>
                    

                    <div>
                        <img src={chair2}/>
                        <h5>Chair</h5>
                        <p>Kigali Furniture Rwanda</p>
                    </div>
                  
                    
                    </div>
                    <div className="next-button">
                        <button onClick={this.supplier1Click} style={{backgroundColor:`${this.state.BUTTON1}`, color:`${this.state.BTNCOLOR1}`}}>1</button>
                        <button onClick={this.supplier2Click} style={{backgroundColor:`${this.state.BUTTON2}`, color:`${this.state.BTNCOLOR2}`}}>2</button>
                        <button onClick={this.supplier3Click} style={{backgroundColor:`${this.state.BUTTON3}`, color:`${this.state.BTNCOLOR3}`}}>3</button>
                        <button onClick={this.supplier4Click} style={{backgroundColor:`${this.state.BUTTON4}`, color:`${this.state.BTNCOLOR4}`}}>4</button>
                    </div>
                </div>
                
                
                    <div className="supplier-cat-wrapper2" style={{display:`${this.state.SUPPLIER4}`}}>
                    <div className="supplier-cat-wrapper2-div">
                    <div>
                        <img src={soundsystem1}/>
                        <h5>4Sound system</h5>
                        <p>Kigali Sound System</p>
                    </div>
                    <div>
                        <img src={car}/>
                        <h5>Teramont Car</h5>
                        <p>Akagera Motor</p>
                    </div>
                    
                    
                    <div>
                        <img src={dress1}/>
                        <h5>Wedding dress</h5>
                        <p>Fashion Rwanda</p>
                    </div>
                   
                    </div>
                    
                    <div className="supplier-cat-wrapper2-div">
                    <div>
                        <img src={soundsystem2}/>
                        <h5>Sound system</h5>
                        <p>Kigali Sound System</p>
                    </div>
                    <div>
                        <img src={dress2}/>
                        <h5>Wedding dress</h5>
                        <p>Fashion Rwanda</p>
                    </div>
                    

                    <div>
                        <img src={chair2}/>
                        <h5>Chair</h5>
                        <p>Kigali Furniture Rwanda</p>
                    </div>
                   
                    
                    </div>
                    
                    <div className="supplier-cat-wrapper2-div">
                    <div>
                        <img src={soundsystem2}/>
                        <h5>Sound system</h5>
                        <p>Kigali Sound System</p>
                    </div>
                    <div>
                        <img src={dress3}/>
                        <h5>Wedding dress</h5>
                        <p>Fashion Rwanda</p>
                    </div>
                    

                    <div>
                        <img src={chair2}/>
                        <h5>Chair</h5>
                        <p>Kigali Furniture Rwanda</p>
                    </div>
                  
                    
                    </div>
                    <div className="next-button">
                        <button onClick={this.supplier1Click} style={{backgroundColor:`${this.state.BUTTON1}`, color:`${this.state.BTNCOLOR1}`}}>1</button>
                        <button onClick={this.supplier2Click} style={{backgroundColor:`${this.state.BUTTON2}`, color:`${this.state.BTNCOLOR2}`}}>2</button>
                        <button onClick={this.supplier3Click} style={{backgroundColor:`${this.state.BUTTON3}`, color:`${this.state.BTNCOLOR3}`}}>3</button>
                        <button onClick={this.supplier4Click} style={{backgroundColor:`${this.state.BUTTON4}`, color:`${this.state.BTNCOLOR4}`}}>4</button>
                    </div>
                </div>
                
                
                    <div className="supplier-cat-wrapper2" style={{display:`${this.state.SUPPLIER5}`}}>
                    <div className="supplier-cat-wrapper2-div">
                    <div>
                        <img src={soundsystem1}/>
                        <h5>5Sound system</h5>
                        <p>Kigali Sound System</p>
                    </div>
                    <div>
                        <img src={car}/>
                        <h5>Teramont Car</h5>
                        <p>Akagera Motor</p>
                    </div>
                    
                    
                    <div>
                        <img src={dress1}/>
                        <h5>Wedding dress</h5>
                        <p>Fashion Rwanda</p>
                    </div>
                   
                    </div>
                    
                    <div className="supplier-cat-wrapper2-div">
                    <div>
                        <img src={soundsystem2}/>
                        <h5>Sound system</h5>
                        <p>Kigali Sound System</p>
                    </div>
                    <div>
                        <img src={dress2}/>
                        <h5>Wedding dress</h5>
                        <p>Fashion Rwanda</p>
                    </div>
                    

                    <div>
                        <img src={chair2}/>
                        <h5>Chair</h5>
                        <p>Kigali Furniture Rwanda</p>
                    </div>
                   
                    
                    </div>
                    
                    <div className="supplier-cat-wrapper2-div">
                    <div>
                        <img src={soundsystem2}/>
                        <h5>Sound system</h5>
                        <p>Kigali Sound System</p>
                    </div>
                    <div>
                        <img src={dress3}/>
                        <h5>Wedding dress</h5>
                        <p>Fashion Rwanda</p>
                    </div>
                    

                    <div>
                        <img src={chair2}/>
                        <h5>Chair</h5>
                        <p>Kigali Furniture Rwanda</p>
                    </div>
                  
                    
                    </div>
                </div>
                
                
                    <div className="supplier-cat-wrapper2" style={{display:`${this.state.SUPPLIER6}`}}>
                    <div className="supplier-cat-wrapper2-div">
                    <div>
                        <img src={soundsystem1}/>
                        <h5>6Sound system</h5>
                        <p>Kigali Sound System</p>
                    </div>
                    <div>
                        <img src={car}/>
                        <h5>Teramont Car</h5>
                        <p>Akagera Motor</p>
                    </div>
                    
                    
                    <div>
                        <img src={dress1}/>
                        <h5>Wedding dress</h5>
                        <p>Fashion Rwanda</p>
                    </div>
                   
                    </div>
                    
                    <div className="supplier-cat-wrapper2-div">
                    <div>
                        <img src={soundsystem2}/>
                        <h5>Sound system</h5>
                        <p>Kigali Sound System</p>
                    </div>
                    <div>
                        <img src={dress2}/>
                        <h5>Wedding dress</h5>
                        <p>Fashion Rwanda</p>
                    </div>
                    

                    <div>
                        <img src={chair2}/>
                        <h5>Chair</h5>
                        <p>Kigali Furniture Rwanda</p>
                    </div>
                   
                    
                    </div>
                    
                    <div className="supplier-cat-wrapper2-div">
                    <div>
                        <img src={soundsystem2}/>
                        <h5>Sound system</h5>
                        <p>Kigali Sound System</p>
                    </div>
                    <div>
                        <img src={dress3}/>
                        <h5>Wedding dress</h5>
                        <p>Fashion Rwanda</p>
                    </div>
                    

                    <div>
                        <img src={chair2}/>
                        <h5>Chair</h5>
                        <p>Kigali Furniture Rwanda</p>
                    </div>
                  
                    
                    </div>
                </div>
                
                
                    <div className="supplier-cat-wrapper2" style={{display:`${this.state.SUPPLIER7}`}}>
                    <div className="supplier-cat-wrapper2-div">
                    <div>
                        <img src={soundsystem1}/>
                        <h5>7Sound system</h5>
                        <p>Kigali Sound System</p>
                    </div>
                    <div>
                        <img src={car}/>
                        <h5>Teramont Car</h5>
                        <p>Akagera Motor</p>
                    </div>
                    
                    
                    <div>
                        <img src={dress1}/>
                        <h5>Wedding dress</h5>
                        <p>Fashion Rwanda</p>
                    </div>
                   
                    </div>
                    
                    <div className="supplier-cat-wrapper2-div">
                    <div>
                        <img src={soundsystem2}/>
                        <h5>Sound system</h5>
                        <p>Kigali Sound System</p>
                    </div>
                    <div>
                        <img src={dress2}/>
                        <h5>Wedding dress</h5>
                        <p>Fashion Rwanda</p>
                    </div>
                    

                    <div>
                        <img src={chair2}/>
                        <h5>Chair</h5>
                        <p>Kigali Furniture Rwanda</p>
                    </div>
                   
                    
                    </div>
                    
                    <div className="supplier-cat-wrapper2-div">
                    <div>
                        <img src={soundsystem2}/>
                        <h5>Sound system</h5>
                        <p>Kigali Sound System</p>
                    </div>
                    <div>
                        <img src={dress3}/>
                        <h5>Wedding dress</h5>
                        <p>Fashion Rwanda</p>
                    </div>
                    

                    <div>
                        <img src={chair2}/>
                        <h5>Chair</h5>
                        <p>Kigali Furniture Rwanda</p>
                    </div>
                  
                    
                    </div>
                </div>
                
                
                    <div className="supplier-cat-wrapper2" style={{display:`${this.state.SUPPLIER8}`}}>
                    <div className="supplier-cat-wrapper2-div">
                    <div>
                        <img src={soundsystem1}/>
                        <h5>8Sound system</h5>
                        <p>Kigali Sound System</p>
                    </div>
                    <div>
                        <img src={car}/>
                        <h5>Teramont Car</h5>
                        <p>Akagera Motor</p>
                    </div>
                    
                    
                    <div>
                        <img src={dress1}/>
                        <h5>Wedding dress</h5>
                        <p>Fashion Rwanda</p>
                    </div>
                   
                    </div>
                    
                    <div className="supplier-cat-wrapper2-div">
                    <div>
                        <img src={soundsystem2}/>
                        <h5>Sound system</h5>
                        <p>Kigali Sound System</p>
                    </div>
                    <div>
                        <img src={dress2}/>
                        <h5>Wedding dress</h5>
                        <p>Fashion Rwanda</p>
                    </div>
                    

                    <div>
                        <img src={chair2}/>
                        <h5>Chair</h5>
                        <p>Kigali Furniture Rwanda</p>
                    </div>
                   
                    
                    </div>
                    
                    <div className="supplier-cat-wrapper2-div">
                    <div>
                        <img src={soundsystem2}/>
                        <h5>Sound system</h5>
                        <p>Kigali Sound System</p>
                    </div>
                    <div>
                        <img src={dress3}/>
                        <h5>Wedding dress</h5>
                        <p>Fashion Rwanda</p>
                    </div>
                    

                    <div>
                        <img src={chair2}/>
                        <h5>Chair</h5>
                        <p>Kigali Furniture Rwanda</p>
                    </div>
                  
                    
                    </div>
                </div>
                
                
                    <div className="supplier-cat-wrapper2" style={{display:`${this.state.SUPPLIER9}`}}>
                    <div className="supplier-cat-wrapper2-div">
                    <div>
                        <img src={soundsystem1}/>
                        <h5>9Sound system</h5>
                        <p>Kigali Sound System</p>
                    </div>
                    <div>
                        <img src={car}/>
                        <h5>Teramont Car</h5>
                        <p>Akagera Motor</p>
                    </div>
                    
                    
                    <div>
                        <img src={dress1}/>
                        <h5>Wedding dress</h5>
                        <p>Fashion Rwanda</p>
                    </div>
                   
                    </div>
                    
                    <div className="supplier-cat-wrapper2-div">
                    <div>
                        <img src={soundsystem2}/>
                        <h5>Sound system</h5>
                        <p>Kigali Sound System</p>
                    </div>
                    <div>
                        <img src={dress2}/>
                        <h5>Wedding dress</h5>
                        <p>Fashion Rwanda</p>
                    </div>
                    

                    <div>
                        <img src={chair2}/>
                        <h5>Chair</h5>
                        <p>Kigali Furniture Rwanda</p>
                    </div>
                   
                    
                    </div>
                    
                    <div className="supplier-cat-wrapper2-div">
                    <div>
                        <img src={soundsystem2}/>
                        <h5>Sound system</h5>
                        <p>Kigali Sound System</p>
                    </div>
                    <div>
                        <img src={dress3}/>
                        <h5>Wedding dress</h5>
                        <p>Fashion Rwanda</p>
                    </div>
                    

                    <div>
                        <img src={chair2}/>
                        <h5>Chair</h5>
                        <p>Kigali Furniture Rwanda</p>
                    </div>
                  
                    
                    </div>
                </div>
                
                
                    <div className="supplier-cat-wrapper2" style={{display:`${this.state.SUPPLIER10}`}}>
                    <div className="supplier-cat-wrapper2-div">
                    <div>
                        <img src={soundsystem1}/>
                        <h5>10Sound system</h5>
                        <p>Kigali Sound System</p>
                    </div>
                    <div>
                        <img src={car}/>
                        <h5>Teramont Car</h5>
                        <p>Akagera Motor</p>
                    </div>
                    
                    
                    <div>
                        <img src={dress1}/>
                        <h5>Wedding dress</h5>
                        <p>Fashion Rwanda</p>
                    </div>
                   
                    </div>
                    
                    <div className="supplier-cat-wrapper2-div">
                    <div>
                        <img src={soundsystem2}/>
                        <h5>Sound system</h5>
                        <p>Kigali Sound System</p>
                    </div>
                    <div>
                        <img src={dress2}/>
                        <h5>Wedding dress</h5>
                        <p>Fashion Rwanda</p>
                    </div>
                    

                    <div>
                        <img src={chair2}/>
                        <h5>Chair</h5>
                        <p>Kigali Furniture Rwanda</p>
                    </div>
                   
                    
                    </div>
                    
                    <div className="supplier-cat-wrapper2-div">
                    <div>
                        <img src={soundsystem2}/>
                        <h5>Sound system</h5>
                        <p>Kigali Sound System</p>
                    </div>
                    <div>
                        <img src={dress3}/>
                        <h5>Wedding dress</h5>
                        <p>Fashion Rwanda</p>
                    </div>
                    

                    <div>
                        <img src={chair2}/>
                        <h5>Chair</h5>
                        <p>Kigali Furniture Rwanda</p>
                    </div>
                  
                    
                    </div>
                </div>
                
                
                    <div className="supplier-cat-wrapper2" style={{display:`${this.state.SUPPLIER11}`}}>
                    <div className="supplier-cat-wrapper2-div">
                    <div>
                        <img src={soundsystem1}/>
                        <h5>11Sound system</h5>
                        <p>Kigali Sound System</p>
                    </div>
                    <div>
                        <img src={car}/>
                        <h5>Teramont Car</h5>
                        <p>Akagera Motor</p>
                    </div>
                    
                    
                    <div>
                        <img src={dress1}/>
                        <h5>Wedding dress</h5>
                        <p>Fashion Rwanda</p>
                    </div>
                   
                    </div>
                    
                    <div className="supplier-cat-wrapper2-div">
                    <div>
                        <img src={soundsystem2}/>
                        <h5>Sound system</h5>
                        <p>Kigali Sound System</p>
                    </div>
                    <div>
                        <img src={dress2}/>
                        <h5>Wedding dress</h5>
                        <p>Fashion Rwanda</p>
                    </div>
                    

                    <div>
                        <img src={chair2}/>
                        <h5>Chair</h5>
                        <p>Kigali Furniture Rwanda</p>
                    </div>
                   
                    
                    </div>
                    
                    <div className="supplier-cat-wrapper2-div">
                    <div>
                        <img src={soundsystem2}/>
                        <h5>Sound system</h5>
                        <p>Kigali Sound System</p>
                    </div>
                    <div>
                        <img src={dress3}/>
                        <h5>Wedding dress</h5>
                        <p>Fashion Rwanda</p>
                    </div>
                    

                    <div>
                        <img src={chair2}/>
                        <h5>Chair</h5>
                        <p>Kigali Furniture Rwanda</p>
                    </div>
                  
                    
                    </div>
                </div>
                
                
                    <div className="supplier-cat-wrapper2" style={{display:`${this.state.SUPPLIER12}`}}>
                    <div className="supplier-cat-wrapper2-div">
                    <div>
                        <img src={soundsystem1}/>
                        <h5>12Sound system</h5>
                        <p>Kigali Sound System</p>
                    </div>
                    <div>
                        <img src={car}/>
                        <h5>Teramont Car</h5>
                        <p>Akagera Motor</p>
                    </div>
                    
                    
                    <div>
                        <img src={dress1}/>
                        <h5>Wedding dress</h5>
                        <p>Fashion Rwanda</p>
                    </div>
                   
                    </div>
                    
                    <div className="supplier-cat-wrapper2-div">
                    <div>
                        <img src={soundsystem2}/>
                        <h5>Sound system</h5>
                        <p>Kigali Sound System</p>
                    </div>
                    <div>
                        <img src={dress2}/>
                        <h5>Wedding dress</h5>
                        <p>Fashion Rwanda</p>
                    </div>
                    

                    <div>
                        <img src={chair2}/>
                        <h5>Chair</h5>
                        <p>Kigali Furniture Rwanda</p>
                    </div>
                   
                    
                    </div>
                    
                    <div className="supplier-cat-wrapper2-div">
                    <div>
                        <img src={soundsystem2}/>
                        <h5>Sound system</h5>
                        <p>Kigali Sound System</p>
                    </div>
                    <div>
                        <img src={dress3}/>
                        <h5>Wedding dress</h5>
                        <p>Fashion Rwanda</p>
                    </div>
                    

                    <div>
                        <img src={chair2}/>
                        <h5>Chair</h5>
                        <p>Kigali Furniture Rwanda</p>
                    </div>
                  
                    
                    </div>
                </div>
                
                </div>
                
            </div>
            
            
            
            <div className="supplier-cars-cont">
            <div className="supplier-cars-par">
                    <div className="supplier-cars-par1">
                        <h2>BEST CARS</h2>
                        <h2>FOR YOUR EVENT</h2>
                        <div><button>GET IT NOW</button></div>
                    </div>
                    <div className="supplier-cars-par2">
                        <SupplierSvg2/>
                    </div>
                </div>
            <div className="supplier-cars-wrapper">
               
                    <div className="supplier-cars-wrapper-div">
                    <div className="supplier-cars-wrapper-div1">
                    <div>
                        <img src={soundsystem1}/>
                        <h5>Sound system</h5>
                        <p>Kigali Sound System</p>
                    </div>
                    <div>
                        <img src={car}/>
                        <h5>Teramont Car</h5>
                        <p>Akagera Motor</p>
                    </div>
                    </div>
                    
                    <div className="supplier-cars-wrapper-div1">
                    <div>
                        <img src={dress1}/>
                        <h5>Wedding dress</h5>
                        <p>Fashion Rwanda</p>
                    </div>
                    <div>
                        <img src={car}/>
                        <h5>Teramont Car</h5>
                        <p>Akagera Motor</p>
                    </div>
                    </div>
                    </div>
                    <div className="supplier-cars-wrapper-div">
                    <div className="supplier-cars-wrapper-div1">
                    <div>
                        <img src={soundsystem2}/>
                        <h5>Sound system</h5>
                        <p>Kigali Sound System</p>
                    </div>
                    <div>
                        <img src={dress2}/>
                        <h5>Wedding dress</h5>
                        <p>Fashion Rwanda</p>
                    </div>
                    </div>

                    <div className="supplier-cars-wrapper-div1">
                    
                    <div>
                        <img src={chair2}/>
                        <h5>Chair</h5>
                        <p>Kigali Furniture Rwanda</p>
                    </div>
                    <div>
                        <img src={dress2}/>
                        <h5>Wedding dress</h5>
                        <p>Fashion Rwanda</p>
                    </div>
                    

                    </div>
                    </div>
                    
                    <div className="supplier-cars-wrapper-div">
                    <div className="supplier-cars-wrapper-div1">
                    <div>
                        <img src={soundsystem2}/>
                        <h5>Sound system</h5>
                        <p>Kigali Sound System</p>
                    </div>
                    <div>
                        <img src={dress3}/>
                        <h5>Wedding dress</h5>
                        <p>Fashion Rwanda</p>
                    </div>
                    </div>

                    <div className="supplier-cars-wrapper-div1">
                    <div>
                        <img src={chair2}/>
                        <h5>Chair</h5>
                        <p>Kigali Furniture Rwanda</p>
                    </div>
                    <div>
                        <img src={dress3}/>
                        <h5>Wedding dress</h5>
                        <p>Fashion Rwanda</p>
                    </div>
                    </div>
                    </div>
                </div>
            
            </div>
            <Footer/>
            </section >
           
        )
    }
}

export default SupplierPage
