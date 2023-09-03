import React from 'react'
import Random from './component/Random'
import Tag from './component/Tag'

const App = () => {
  return (
    <div className="w-secreen  h-full flex flex-col items-center background">
      <h1 className=" bg-white  mt-[14px] rounded-lg w-11/12 text-center px-10 py-2 text-3xl font-bold">RANDOM GIFS</h1>
      <div className='w-full flex flex-col items-center gap-10 mt-8'>
        <Random/>
        <Tag/>
      </div>
    </div>
  )
}


export default App

