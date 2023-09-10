import React from 'react';
import './material.css';

import dailyimg from '../Material/Assets/dailuUsage.png'
import wareimg from '../Material/Assets/wareHouse.png'
import brickimg from '../Material/Assets/brick.png'
import actualimg from '../Material/Assets/actulausage.png'

const Material = () => {
  return (
    
      
    
      <div className='material_container'>

        <div className='material_header'>
            <h2>MATERIALS</h2>
        </div>
        
        <div className='material_content_box'>
            <div className='leftside'>
              <div className='todayUsage'>
                <h2 className='todayUsage_header'>TODAY USAGE</h2>
                <div className='today_flex'>
                  <div className='subcontent_container_usage'>
                    <h1 className='subcontent'>CEMENT: <span className='span'>5 BAGS</span></h1>
                    <h1 className='subcontent'>SAND: <span className='span'>3 UNITS</span></h1>
                    <h1 className='subcontent'>GRAVEL: <span className='span'>2 UNITS</span></h1>
                    <h1 className='subcontent'>BRICKS: <span className='span'>500 Nos</span></h1>
                  </div>
                  <div>
                      <img src={dailyimg} alt=""  style={{height:100, width:170,marginLeft:40,marginTop:8}}/>
                  </div>
                </div>
                
              </div>


              <div className='wareHouse'>
                <h2 className='warehouse_header'>WAREHOUSE</h2>
                <div>
                  <h2 className='subHeader'>AVAILABILITY:</h2>
                  <div className='today_flex'>
                    <div className='subcontent_container'>
                      <h1 className='subcontent'>CEMENT: <span className='span'>20 BAGS</span></h1>
                      <h1 className='subcontent'>SAND: <span className='span'>50 UNITS</span></h1>
                      <h1 className='subcontent'>GRAVEL: <span className='span'>20 UNITS</span></h1>
                      <h1 className='subcontent'>BRICKS: <span className='span'>10,000 Nos</span></h1>
                    </div>
                    <div>
                        <img src={wareimg} alt=""  style={{height:100, width:170,marginLeft:30,marginTop:-15}}/>
                    </div>
                  </div>
                </div>
              </div>


              <div className='report'>
                <h2 className='report_header'>GENERATE TODAY's WORK REPORT</h2>
                {/* <h2 className='report_subhead'></h2> */}
                <h5 className='report_button' style={{backgroundColor:"#8986e8",paddingLeft:6,paddingRight:6,paddingTop:4,paddingBottom:4,display:'flex',marginLeft:'30%',marginTop:20,borderRadius:5,color:'white',width:"fit-content"}}>GET REPORT</h5>
              </div>

            </div>
            <div className='rightside'>
              {/* <h2 className='chart_header'>COMPARISON CHART</h2> */}
              <div className='right_contain'>
                
                <div className='reso_usage'>
                  <h2 className='innerchart_header'>ACTUAL USAGE</h2>
                  <img src={actualimg} alt=""  style={{height:400, width:376}}/>

                </div>
                <div className='reseff_algo'>
                  <h2 className='innerchart_header'>PREDICTED USAGE</h2>
                  <img src={brickimg} alt=""  style={{height:400, width:376}}/>

                </div>
              </div>
              

            </div>
        </div>
          
      </div>
    
  )
}

export default Material