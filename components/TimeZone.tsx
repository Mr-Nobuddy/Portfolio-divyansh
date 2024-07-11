import React from 'react'
import { GlobeDemo } from './ui/GridGlobe'

const TimeZone = () => {
  return (
    <div className='pb-10'>
        <h1 className='heading'>
            I am very fexible with <span className='text-purple'>time zone communication</span>
        </h1>
        <div className='flex items-center justify-center'>
            <GlobeDemo/>
        </div>
    </div>
  )
}

export default TimeZone