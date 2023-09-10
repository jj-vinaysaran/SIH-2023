import React from 'react'
import './home.css';
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
          </div>
          <div className='labours'>
            <img src={labour}/>
            <h2>Labours</h2>
          </div>
          <div className='labours'>
            <img src={graph}/>
            <h2>Visualize</h2>
          </div>
          <div className='labours'>
            <img src={machines}/>
            <h2>maintainence</h2>
          </div>
          <div className='labours'>
            <img src={safety}/>
            <h2>Safety</h2>
          </div>
          <div className='labours'>
            <img src={energy}/>
            <h2>Energy</h2>
          </div>
          <div className='labours'>
            <img src={support}/>
            <h2>Support</h2>
          </div>
          <div className='labours'>
            <img src={support}/>
            <h2>Budget</h2>
          </div>
          <div className='labours'>
            <img src={support}/>
            <h2>Materials</h2>
          </div>
          
      </div>
      <div className='right_side'>
        <div className='nav_top'>
          <h1  className='logtext'>ContructionX</h1>
          <h3 className='logtext'>Logout</h3>
        </div>
       
        <img src="https://images.squarespace-cdn.com/content/v1/5cf799216e35c10001a486eb/9122ca30-0e5e-4179-8c8d-cbe1bde5dcde/Screen+Recording+2022-02-02+at+9.38.31+AM.mov-high.gif" className="threed"/>

       
        <div className='main_three'>
            <div className='b1'>
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
              <h2 className='wt'>WareHouse</h2>
              <div className='ware'>
                <h3>No of available Cement- 20 units</h3>
                <h3>No of available sand- 30 units</h3>
                <h3>No of available gravel- 30 units</h3>

              </div>
            </div>
            <div className='b1'>
              <h2 className='buton'>Upload your Model</h2>
            </div>
        </div>

      </div>
    </div>
  )
}

export default Home