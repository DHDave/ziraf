// import React, { Component } from 'react';
// import { HashRouter } from 'react-router-dom';
// import Navigation from './component/Navigation/Navigation';
// import './App.css';

// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <HashRouter>
//           <Navigation />
//         </HashRouter>
//       </div>
//     );
//   }
// }

// export default App;

import React, { Component } from 'react';
import { HashRouter } from 'react-router-dom';
// import './App.css';
import Toolbar from './components/Toolbar/Toolbar';
import SideDrawer from './components/SideDrawer/SideDrawer';
import Backdrop from './components/Backdrop/Backdrop'
// import CloseDrawer from './components/SideDrawer/CloseDrawer'

import Routing from './components/Toolbar/Navigation'

class App extends Component {
  state = {
    sideDrawerOpen: false
  };

  drawerToggleClickHandler = () => {
    this.setState((prevState) => {
      return {sideDrawerOpen: !prevState.sideDrawerOpen}
    });
  };

  backdropClickHandler = () => {
    this.setState({sideDrawerOpen: false})
  };


  // handleClose = () => {
  //   this.setState({sideDrawerOpen: false})
  // };


  // closeDrawerClickHandler = () => {
  //   this.setState({sideDrawerOpen: false})
  // };

  render() {
    let backdrop;
    // let closedrawer;

    if(this.state.sideDrawerOpen) {
      
      backdrop = <Backdrop click={this.backdropClickHandler} />
      // closedrawer = <CloseDrawer click={this.closeDrawerClickHandler}/>
    }
    return (
      <div style={{height: '100%'}}>
        <HashRouter>
          <Toolbar drawerClickHandler={this.drawerToggleClickHandler} />
          <SideDrawer show={this.state.sideDrawerOpen} />;
          {backdrop}   
          <main style = {{marginTop: '64px'}}>
          <Routing />
          </main>
        </HashRouter>
      </div>
    );
  }
}

export default App;
