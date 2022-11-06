import React from 'react';
import {Link} from 'react-router-dom';
import Button from 'react-bootstrap/Button';


function NavigationBar() {
  return (
    <div className='top'>
        <h1>Teacher&Student Management</h1>
        <Link to='/View'><button className='main1'>View</button></Link>
        <Link to='/Create'><button className='main2'>Create</button></Link>
    </div>
  )
}

export default NavigationBar;