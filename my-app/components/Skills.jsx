import Image from 'next/image'
import React from 'react'

const Skills = () => {
  return (
    <div className='w-full lg:h-screen p-2'>
      <div className='max-w-[1240px] mx-auto flex flex-col justift-center h-full'>
        <p>Skills</p>
        <h2>What I Can Do</h2>
        <div className='md:grid-cols-2 lg:grid-cols-4 gap-8'>
          <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto'>

              </div>
            </div>
          </div>
        </div>

      </div>

    </div>
  )
}

export default Skills