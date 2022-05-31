import React, { useEffect} from 'react'
import { BrowserRouter, Route, Switch, useHistory} from 'react-router-dom';
import './App.css';
import Navbar from './components/navbar/Navbar'
import Home from './components/Home';
import EventDetails from './components/about/EventDetails';
import Conference from './components/conference/Conference';
import Signup from './components/auth/Signup';
import Signin from './components/auth/Signin';
import Contacts from './components/contactUs/Contacts';
import AboutUs from './components/about/AboutUs';
import Privacy from './components/privacy/Privacy';
import GMap from './components/about/Map';
import CalenderPage from './components/services/CalenderPage'
import VenuePage from './components/services/VenuePage'
import SupplierPage from './components/services/SupplierPage'



const Routing = ()=>{
  const history = useHistory()
  // useEffect(()=>{
    
  //     history.push('/Nayo')
      
    
  // }) 
  return(
      <div>
          
           
          <Switch>
          
          <Route exact path="/Navbar"><Navbar/></Route>
          <Route exact path="/"><Home/></Route>
          {/* <Route exact path="/Signin"><Signin/></Route>
          <Route exact path="/Signup"><Signup/></Route> */}
          <Route exact path="/EventDetails"><EventDetails/></Route>
          <Route exact path="/AboutUs"><AboutUs/></Route>
          <Route exact path="/Conference"><Conference/></Route>
          <Route exact path="/Signup"><Signup/></Route>
          <Route exact path="/Contacts"><Contacts/></Route>
          <Route exact path="/Privacy"><Privacy/></Route>
          <Route exact path="/GMap"><GMap/></Route>
          {/* <Route exact path="/CalenderPage"><CalenderPage/></Route>
          <Route exact path="/VenuePage"><VenuePage/></Route>
          <Route exact path="/SupplierPage"><SupplierPage/></Route> */}
          {/* <Route exact path="/Menu"><Menu/></Route>
          <Route exact path="/Events"><Events/></Route>
          <Route exact path="/Reviews"><Reviews/></Route>
          <Route exact path="/Contact"><Contact/></Route>
          <Route exact path="/Nayo"><Nayo/></Route> */}
         </Switch>
      </div>
  )
}


export default function App() {
  return (
    
    <BrowserRouter>
    <Routing/>
   
    

    </BrowserRouter>
  )
}

