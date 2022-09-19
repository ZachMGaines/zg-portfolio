import Image from 'next/image'
import React from 'react'
import img from '../public/assets/ZGNav.png'
 

function Navbar() {
    return (
      <div className='fixed w-full h-20 shadow-xl z-[100]'>
        <div className=';flex justify-between items-center w-full h-full px-2 2xl:px-16'>
          <Image src={img} alt="/" width='75' height='70' />
        </div>
      </div>
    )
  }

export default Navbar