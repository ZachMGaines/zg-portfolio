import React from 'react'

const About = () => {
  return (
    <div id='about' className='w-full md:h-screen p-2 flex items-center py-16'>
      <div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8'>
        <div className='col-span-2'>
          <p className='uppercase text-xl tracking-widest text-[#0082b6bb]'>About</p>
          <h2 className='py-4'>Who I am</h2>
          <p className='py-2 text-gray-600'>// I am not your average developer</p>
          <p>In 2021 I began my journey to becoming a software developer by joining a bootcamp called Alchemy Code Labs.  I instantly became fascinated by the process of creating professional websites and scalable applications.</p>
        </div>
        <div>
          <img src="" alt="" />
        </div>
      </div>
    </div>
  )
}

export default About