import React, { Component } from 'react';

const about = require('../../img/about.jpg');

class BodyPage extends Component {
  render() {
    return (
      <section id='about-us'>
        <div className={'container'}> 
          <div className={'text-center'}> 
                <div className={'col-sm-8 col-sm-offset-2'}>
                    <h2 className={'title-one'}>Why With Us?</h2> 
                    <p className={'bodyP'}>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.</p> 
                </div>
            </div> 
            <div className={'about-us'}>
                <div className={'row'}>
                    <div className={'col-sm-6'}>
                        <h3>Why with us?</h3>
                        <ul className='nav nav-tabs'>
                            <li><a href='#about' data-toggle='tab'><i className={'fa fa-chain-broken'} /> About</a></li>
                            <li><a href='#mission' data-toggle='tab'><i className={'fa fa-th-large'} /> Mission</a></li>
                            <li><a href='#community' data-toggle='tab'><i className={'fa fa-users'} /> Community</a></li>
                        </ul>
                        <div className={'tab-content'}>
                            <div className={'tab-pane fade active in'} id='about'>                                
                                <div className={'media-body'}>
                                    <div className={'media'}>
                                        <img className="pull-left media-object" src={about} alt="about us" /> 
                                        <div>
                                            <p className={'bodyP'}>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.</p>
                                        </div>
                                    </div>                                    
                                </div>
                            </div>
                        </div>
                    </div>                    
                </div>
            </div>
        </div>
      </section>
    )
  }
}

export default BodyPage;