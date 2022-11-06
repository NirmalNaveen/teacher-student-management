import React from 'react'
import {Link} from 'react-router-dom';


function View() {
  return (
    <div>
        <Link to='/TeacherTable'><button className='main3'>TeacherTable</button></Link>
        <Link to='/StudentTable'><button className='main4'>StudentTable</button></Link>
    </div>
  )
}

export default View