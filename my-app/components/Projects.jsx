

import React from 'react';
import ProjectItem from './ProjectItem';
import movieBytes from '../public/assets/moviebytespic.jpg';
import tarotReader from '../public/assets/tarotpic2.jpg';
import techWiz from '../public/assets/techwizpic.jpg';
import twinPeaks from '../public/assets/twinpeaksbot.jpg';

const Projects = () => {
  return (
    <div className='w-full'>
      <div className='max-w-[1240px] mx-auto px-2 py-16'>
        <p className='text-xl tracking-widest uppercase text-[#0082b6bb]'>Projects</p>
        <h2 className='py-4'>What I&apos;ve Built</h2>
        <div className='grid md:grid-cols-2 gap-8'>

          <ProjectItem title='Movie Bytes' backgroundImg={movieBytes} projectUrl='/movie' />
          <ProjectItem title='TechWizQuiz' backgroundImg={techWiz} projectUrl='/techwiz' />
          <ProjectItem title='Twin Peaks' backgroundImg={twinPeaks} projectUrl='/twinpeaks' />
          <ProjectItem title='Tarot Reader' backgroundImg={tarotReader} projectUrl='/tarot' />



        </div>
      </div>
    </div>
  )
}

export default Projects