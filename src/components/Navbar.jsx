import React from 'react'
import img from '../assets/images/logo.png'
import { IoIosSearch } from 'react-icons/io'
import profilePic from '../assets/images/Profile.svg'
import ArrowPic from '../assets/images/Arrow.svg'
import BellImg from '../assets/images/Vector.svg'



const Navbar = ({ supplierName, setSupplierName }) => {
  
  const handleQuery = (e)=>{
   setSupplierName(e.target.value)
  }

  return (
    <nav className="items-center bg-white">
      <div className="flex place-items-center gap-x-8 px-4 sm:px-8 py-4">
        <div className="w-[150px] sm:w-[250px]">
          <img src={img} alt="logo" className='md:w-[200px] md:h-[54px]'/>
        </div>

        <div className="hidden lg:flex w-[1px] bg-lightGrey h-[250px] absolute left-[290px] pt-0" />

        <div className="flex border border-grey items-center gap-2 rounded-[7px] w-[264px] h-[42px] sm:ml-4">
          <IoIosSearch className="w-[18px] h-[18px] text-mdGrey ml-4 box-border text-lg" />
          <input
            type="text"
            placeholder="Search by supplier..."
            className="w-full focus:outline-none none bg-none font-inter font-[400] text-sm leading-[16.94px] placeholder-darkGrey"
            value={supplierName}
            onChange={handleQuery}
          />
        </div>

        <div className="hidden sm:flex items-center justify-between ml-auto gap-x-3.5">
          <img src={BellImg} alt="notification" />
          <img src={profilePic} alt="profilePic" />
          <h3 className='font-inter font-[500] text-[16px] leading-[19.36px]'>Deko</h3>
          <img src={ArrowPic} />
        </div>
      </div>
    </nav>

  )
}

export default Navbar
