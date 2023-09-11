import React from 'react'
import './home.css';
 import {Link} from "react-router-dom"
import logo from "../../images/logo.jpg"
import labour from "../../images/icons8-labour-64.png"
import graph from "../../images/icons8-graph-80.png"
import machines from "../../images/icons8-machines-64.png"
import energy from "../../images/icons8-energy-50.png"
import safety from "../../images/icons8-safety-64.png"
import support from "../../images/icons8-support-16.png"
import act from "../../images/icons8-account-50.png"
const Home = () => {
  return (
    <div className='home_container'>
      <div className='left_nav'>
          <div className='logo'>
            <img src={logo} id='logo'/>
          </div >
          <div className='labours'>
            <img src={labour}/>
            <h2 ><Link to="/labour" className='link'>Labours</Link></h2>
          </div>
          <div className='labours'>
            <img src={support}/>
            <h2 ><Link className="link" to='/material'>Materials</Link></h2>
          </div>
          <div className='labours'>
            <img src={graph}/>
            <h2 ><Link className="link" to="/visual">Visualize</Link></h2>
          </div>
          <div className='labours'>
            <img src={safety}/>
            <h2 ><Link className="link" to="/safety">Safety</Link></h2>
          </div>
          <div className='labours'>
            <img src={support}/>
            <h2 ><Link className="link" to='/support'>Support</Link></h2>
          </div>
          <div className='labours'>
            <img src={machines}/>
            <h2 ><Link className="link">maintainence</Link></h2>
          </div>
          <div className='labours'>
            <img src={energy}/>
            <h2 ><Link className="link">Energy</Link></h2>
          </div>
          <div className='labours'>
            <img src={support}/>
            <h2 ><Link className="link">Budget</Link></h2>
          </div>
          
          
      </div>
      <div className='right_side'>
        <div className='nav_top'>
          <h1  className='logtext'>ContructionX</h1>
          <h3 className='logtext' id='logout'>Logout</h3>
        </div>
       
        <img src="https://images.squarespace-cdn.com/content/v1/5cf799216e35c10001a486eb/9122ca30-0e5e-4179-8c8d-cbe1bde5dcde/Screen+Recording+2022-02-02+at+9.38.31+AM.mov-high.gif" className="threed"/>

       
        <div className='main_three'>
            <div className='b1' id='madhankonar'>
              <h2 className='labtext'>Labour Line</h2>
              <div class='message'>
                            <div class="msg_row">
                                <img src={act} class="act_img"/>
                                <h4 class="workername">Madhan Konar</h4>
                                <h4>5/09/2023</h4>
                            </div>
                            <h4 class="workername">we have some problem with constructions</h4>
              </div>
              
              
              <div class='message'>
                            <div class="msg_row">
                                <img src={act} class="act_img"/>
                                <h4 class="workername">Madhan Konar</h4>
                                <h4>5/09/2023</h4>
                            </div>
                            <h4 class="workername">we have some problem with constructions</h4>
              </div>
            </div>
            <div className='b1'>
              <h2 className='wt' >WareHouse</h2>
              <div className='ware'>
                <h3>Available Cement-<span className='st'>20 units</span> </h3>
                <h3>Available sand- <span className='st'>30 units</span></h3>
                <h3>Available gravel- <span className='st'>30 units</span> </h3>

              </div>
            </div>
            <div className='b1'>
              <h2 className='buton'>Upload your Model</h2>
              <input type='file' className='inp' />
            </div>
        </div>

      </div>
    </div>
  )
}

export default Home