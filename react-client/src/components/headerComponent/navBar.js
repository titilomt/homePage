import React, { Component } from 'react';
import { Link } from 'react-router-dom';


const imgLogo = require('../../img/logo.png');

class NavBar extends Component {
  componentWillMount() {
    console.log(imgLogo);
  }

  render() {
    return (
      <header id='navigation'>
        <div className={'navbar navbar-inverse navbar-fixed-top'}>
          <div className={'container'}>
            <div className={'navbar-header navHeader'}>
              <a className={'brand'} href='#'>
                <h1 className={'h1Img'}>
                  <img src={imgLogo} />
                </h1>
              </a>
            </div>
            <div className={'collapse navbar-collapse'}>
              <ul className={'nav navbar-nav navbar-right'}>
                <li className={'scroll'}><Link to="">Home</Link></li>
                <li className={'scroll'}><Link to="">About Us</Link></li> 
                <li className={'scroll'}><Link to="">Services</Link></li> 
                <li className={'scroll'}><Link to="">Our Team</Link></li> 
                <li className={'scroll'}><Link to="">Portfolio</Link></li> 
                <li className={'scroll'}><Link to="">Contact</Link></li>
                </ul>
            </div>
          </div>
        </div>
      </header>
    )
  }
}

export default NavBar;