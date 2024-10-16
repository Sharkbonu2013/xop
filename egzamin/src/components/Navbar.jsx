import React from 'react'
import { CiLogin } from "react-icons/ci";

const Navbar = () => {
  return (
    <div className='shadow-lg py-5'>
      <div className="container max-w-[95%] mx-auto flex items-center justify-between">
        <div>
          <img className='w-20' src="./mars.png" alt="" />
        </div>
        <div className='flex items-center gap-10'>
          <p>Bekzod Mirzaaliyev</p>
          <select name="" id="">
            <option value="">UZ</option>
            <option value="">RU</option>
            <option value="">ENG</option>
          </select>
          <p>
            <CiLogin />
          </p>
        </div>
      </div>
    </div>
  )
}

export default Navbar