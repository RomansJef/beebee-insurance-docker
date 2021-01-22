import React from 'react';
import logo from './logo.jpg';
import './App.css';
import Offers from './components/Offers.component';
import CreateOffer from './components/CreateOffer.component';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

function App() {
  return (<Router>
      <div className="App">
       <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
           <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
               <div className="collapse navbar-collapse" id="navbarSupportedContent">
                   <ul className="navbar-nav ml-auto">
                       <li className="nav-item">
                           <Link className="nav-link" to={"/newoffer"}>Receive new offer</Link>
                       </li>
                   </ul>
               </div>
           </nav>
        </header>

         <div className="container">
             <div className="body">
                <div className="row">
                  <div className="col-1">
                    <Switch>
                        <Route path="/newoffer" component={CreateOffer} />
                    </Switch>
                  </div>
                  <div className="col-2">
                    <Switch>
                        <Route path="/offers" component={Offers} />
                    </Switch>
                </div>
                </div>
         </div>
      </div>
    </div>
   </Router>
   );
}
export default App;
