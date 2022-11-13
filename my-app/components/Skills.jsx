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
            <h4>Languages</h4>
            <ul className='list-disc'>
              <li>javascript</li>
              <li>html</li>
              <li>css</li>
            </ul>
          </div>
          <div>
            <h4>Libraries</h4>
            <ul className='list-disc'>
              <li>React</li>
              <li>Node.js</li>
              <li>Express.js</li>
              <li>Tailwind</li>
              <li>Next.js</li>
            </ul>
            <div>
              <h4>Tools</h4>
              <ul className='list-disc'>
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
  )
}

export default Skills