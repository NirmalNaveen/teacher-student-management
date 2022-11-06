import React from 'react'
import { Button } from 'react-bootstrap';
import {Link} from 'react-router-dom';

function Create() {
  return (
    <div>
        <Link to='/TeacherCreate'><button className='main5'>TeacherCreate</button></Link>
        <Link to='/StudentCreate'><button className='main6'>StudentCreate</button></Link>
    </div>
  )
}

export default Create