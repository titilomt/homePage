import React, { Component } from 'react';
import BodyPage from './bodyPage';
import DragDrop from '../dragDrop/DragDrop';

const imgHome = require('../../img/slide1.jpg');

class HomePage extends Component {
  render() {
    return (
      <section id='home'>
        <div id="main-carousel" className={'item'} style={{backgroundImage: `url(${imgHome})`, height: 387}}> 
          <div className={'homeContainer'}> 
							<div className={'homeLayout'}>
                <h2 className={'homeTitle'}>What is Lorem Ipsum?</h2> 
                <p className={'homeP'}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p> 
                <a className={'slider-btn'} href="#">Get Started</a> 
              </div>
            </div> 
        </div>
        <BodyPage />
        <div>
         <DragDrop />
        </div>
      </section>
    )
  }
}

export default HomePage;