
import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import { Route, Link, BrowserRouter } from 'react-router-dom'
import App from './App'
//import AboutUs from './ AboutUs';
import ContactUs from './ContactUs';
const routs = (
   < BrowserRouter >
      <div>
         <ul>
            <li>
               <Link to="/">Home</Link>
            </li>
            <li>
               <Link to="/ aboutus ">Users</Link>
            </li>
            <li>
               <Link to="/ contactus ">Contact</Link>
            </li>
         </ul>
         <Route exact path="/" component={App} />
         <Route path="/aboutus" component={AboutUs} />
         <Route path="/contactus" component={ContactUs} />
      </div>
   </ BrowserRouter >
);
ReactDOM.render(routs, document.getElementById('root'))