import React from 'react'
import { Link } from 'react-router-dom'
export const DropDown = () => {
  return (
    <div className='flex'>

        <ul className='flex flex-col'>
            <li> <Link to='/Product'>All Book</Link></li>
            <li><Link></Link>Login</li>
            <li><Link></Link>Rejistred</li>
        </ul>
    </div>
  )
}
