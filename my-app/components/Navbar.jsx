import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
// import img from '../public/assets/ZGNav.png'
 

function Navbar() {
    return (
      <div className='fixed w-full h-20 shadow-xl z-[100]'>
        <div className='flex justify-between items-center w-full h-full px-2 2xl:px-16'>
          <Image src="/../public/assets/ZGNav.png" alt="/" width='75' height='70' 
          />
          <div>
            <ul className='hidden md:flex'>
              <Link href='/'>
                <li className="ml-10 text-sm uppercase hover:border-b">HOME</li>
              </Link>
              <Link href='/'>
                <li className="ml-10 text-sm uppercase hover:border-b">ABOUT</li>
              </Link>
              <Link href='/'>
                <li className="ml-10 text-sm uppercase hover:border-b">SKILLS</li>
              </Link>
              <Link href='/'>
                <li className="ml-10 text-sm uppercase hover:border-b">PROJECTS</li>
              </Link>
              <Link href='/'>
                <li className="ml-10 text-sm uppercase hover:border-b">CONTACT</li>
              </Link>
            </ul>
            <div>


              {/* https://react-icons.github.io/react-icons/ */}


              
            </div>
          </div>

        </div>
        
      </div>
    )
  }

export default Navbar