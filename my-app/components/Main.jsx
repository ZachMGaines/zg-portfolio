import React from 'react';

const Main = () => {
  return (
    <div className='w-full h-screen text-center'>
      <div className='max-w-{1240px} w-full h-full mx-auto p-2 flex justify-center items-center'>
        <div>
          {/* <p className='uppercase text-sm tracking-widest text-gray-600'></p> */}
          <h1 className='text-[#00308F] py-4 tracking-widest max-auto'>Hi, Im Zach</h1>
          <h1 className='text-[#6699CC]'>a front end web developer.</h1>
          <p className='py-4 text-gray-600 max-w-[70%] m-auto'>I'm a front end developer specializing in blowing your mind. </p>
        </div>
      </div>
    </div>
  )
}

export default Main