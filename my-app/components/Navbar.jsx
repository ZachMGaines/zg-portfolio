/* eslint-disable jsx-a11y/alt-text */
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { AiOutlineClose, AiOutlineMenu, AiOutlineMail } from 'react-icons/ai';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { BsFillPersonLinesFill } from 'react-icons/bs';
// import img from '../public/assets/ZGNav.png'


const Navbar = () => {
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
          <div className='md:hidden'>


            <AiOutlineMenu size={25} />



          </div>
        </div>

      </div>
      <div className='fixed left-0 top-0 w-full h-screen bg-black/70'>
        <div className='fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#ecf0f3] p-10 ease-in duration-500'>
          <div>
            <div className='flex w-full items-center justify-between'>

              <Image src='/../public/assets/ZGNav.png' width='50' height='45' alt='/' />
              <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer'>
                <AiOutlineClose />
              </div>
            </div>
            <div className='border-b border-gray-300 my-4'>
              <p className='w-[85%] md:w-[90%] py-4'>999</p>
            </div>
          </div>
          <div className='py-4 flex flex-col'>
            <ul className='uppercase'>
              <Link href='/'>
                <li className='py-4 text-sm'>Home</li>
              </Link>
              <Link href='/'>
                <li className='py-4 text-sm'>About</li>
              </Link>
              <Link href='/'>
                <li className='py-4 text-sm'>Skills</li>
              </Link>
              <Link href='/'>
                <li className='py-4 text-sm'>Projects</li>
              </Link>
              <Link href='/'>
                <li className='py-4 text-sm'>Contact</li>
              </Link>
            </ul>
            <div className='pt-40'>
              <p className='uppercase tracking-widest text-[#5651e5]'>Let's Connect</p>
              <div className='flex items-center justify-between my-4 w-full sm:w-[80%]'>
                <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                  <FaLinkedinIn />
                </div>
                <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                  <FaGithub />
                </div>
                <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                  <AiOutlineMail />
                </div>
                <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                  <BsFillPersonLinesFill />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar