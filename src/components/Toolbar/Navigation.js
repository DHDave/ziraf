import React from 'react';
import { Route, Switch } from 'react-router-dom';
// import Image from 'react-image-resizer';

import Home from '../Pages/Home/Home';
import Team from '../Pages/Team/Team';
import Jobs from '../Pages/Jobs/Jobs';
import ContactUs from '../Pages/ContactUs/ContactUs';
import PageNotFound from '../Pages/PageNotFound/PageNotFound';
// import logo from './Images/cute-giraffe.svg';

export default function routing() {
  return (
    <div>
      <div className="rout">
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route path="/Team" component={Team}/>
          <Route path="/Jobs" component={Jobs}/>
          <Route path="/ContactUs" component={ContactUs}/>
          <Route component={PageNotFound}/>
        </Switch>
      </div>  
    </div>
  );
}