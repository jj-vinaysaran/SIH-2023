import React from 'react'
import './visual.css';
import cmp from "../../images/cmp.jpg"
const Visual = () => {
  return (
    <div>
      <div className='visual-nav'>
        VISUALIZE YOUR HOME
      </div>
      <div className='visual-container'>
        <div className='visual-left'>
          
          <div className='visual-left-upload'>
            <h1 className='vis-upload-text'>UPLOAD YOUR 3D MODEL</h1>
            <button className='vis-upload'>UPLOAD</button>
          </div>
          <div className='visual-left-compare'>
            <h1 className='vis-compare-text'>COMPARE WORKFLOW</h1>
            <button className='vis-compare'>COMPARE</button>
          </div>
          <div className='visual-left-rtm'>
          <h1 className='vis-rtm-text'>MONITOR WORK</h1>
            <button className='vis-rtm'>MONITOR</button>
          </div>
        </div>
        <div className='visual-right'>
            <img src={cmp} className='visual-model'/>
        </div>
      </div>

    </div>

  )
}

export default Visual;