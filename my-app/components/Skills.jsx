import Image from 'next/image'
import React from 'react'

const Skills = () => {
  return (
    <div className='w-full md:h-screen p-2 flex items-center py-16'>
      <div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8'>
        <div className='col-span-2'>
          <p className='uppercase text-xl tracking-widest text-[#0082b6bb]'>Skills</p>
          <h2 className='py-4'>What I Can Do</h2>
          <div>

            <div className='lg:grid grid-cols-3 gap-8 justify-between'>
              <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                <h4 className='text-[#2a3d92] font-bold text-2xl py-px'>Languages</h4>
                <ul className='list-disc font-bold'>
                  <li>Javascript</li>
                  <li>HTML</li>
                  <li>CSS</li>
                </ul>
              </div>
              <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                <h4 className='text-[#2a3d92] font-bold text-2xl py-px'>Libraries</h4>
                <ul className='list-disc font-bold'>
                  <li>React</li>
                  <li>Node.js</li>
                  <li>Express.js</li>
                  <li>Tailwind</li>
                  <li>Next.js</li>
                </ul>
              </div>
              <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                <h4 className='text-[#2a3d92] font-bold text-2xl py-px'>Tools</h4>
                <ul className='list-disc font-bold'>
                  <li>VS code</li>
                  <li>Postman</li>
                  <li>PGadmin</li>
                  <li>Heroku</li>
                  <li>Netlify</li>

                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Skills