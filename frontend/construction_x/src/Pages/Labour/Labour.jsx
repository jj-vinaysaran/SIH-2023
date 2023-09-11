import React, { useState } from 'react';
import './labour.css';
import jpg from '../../images/cmp.jpg';
import labi from "../../images/lab.jpeg"
const Labour = () => {
  const [selectedSector, setSelectedSector] = useState('');
  const [selectedSkill, setSelectedSkill] = useState('');
  const [labourCount, setLabourCount] = useState(0);
  const [selectedTask, setSelectedTask] = useState(''); // New state for selected task
  const [allocationMessage, setAllocationMessage] = useState('');

  const handleSectorChange = (event) => {
    setSelectedSector(event.target.value);
  };

  const handleSkillChange = (event) => {
    setSelectedSkill(event.target.value);
  };

  const handleTaskChange = (event) => {
    setSelectedTask(event.target.value);
  };

  const handleAllocateClick = () => {
    // Perform the allocation logic here, based on the selected task and sector.
    // For example, you can show a success message.
    const message = `Task "${selectedTask}" allocated to Sector "${selectedSector}"`;
    setAllocationMessage(message);
  };
   const handleSearchClick = () => {
    // Here you can implement your logic to count the labor based on the selected sector and skill.
    // For now, I'm setting a random count as an example.
    const randomCount = Math.floor(Math.random() * 100); // Replace with your actual logic.
    setLabourCount(randomCount);
  };

  const mapSrc = jpg;

  return (
    <div className='cont'>
      <div className='labour_nav'>
        <h1 className='labour_head'>Labour</h1>
      </div>
      <div className='labour_bg'>
        <div className='labour_container'>
          <div className='labour_left'>
          <div className='labour_attendance'>
              <h3 className='labour_sub'>Labour attendance</h3>
              <h4 className='labour_txt'>Present :<span>1810</span> </h4>
              <h4 className='labour_txt'>Absent: <span>210</span></h4>
              <h4 className='labour_txt'>Half-duty : <span>55</span></h4>
              <button className='labour_btn'>Enter Attendance</button>
            </div>
            <div className='labour_search'>
              <h3 className='labour_sub'>Labour Search</h3>
              <button>Search</button>
            
            </div>
            <div className='labour_task'>
              <h3 className='labour_sub'>Labour Task</h3>
              
              <button>Allocate</button>
             
            </div>
            <div className='labour_task'>
              <h3 className='labour_sub'>Report Generator</h3>
              
              <button>Generate Report</button>
             
            </div>
          
          </div>
          <div className='labour_right'>
            <h3 className='labour_sub'>Blueprint Construction Map</h3>
            <img src={labi} className='labour_map'/>
            {/* <iframe
              src={mapSrc}
              title='Blueprint Map'
              className='labour_map'
              width='100%'
              height='100%'
              frameBorder='0'
            ></iframe> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Labour;  