import React from 'react'
import { AnimatedTooltip } from './ui/AnimatedToolTip'
import { techStack1, techStack2, techStack3 } from '@/data'

const TechStack = () => {
  return (
    <div className='py-20'>
        <h1 className='heading'>
            My Ever-Evolving <span className='text-purple'>Tech Stack</span>
        </h1>
        <div className='flex flex-col items-center justify-center py-20 gap-10'>
            <AnimatedTooltip items={techStack1}/>
            <AnimatedTooltip items={techStack2}/>
            <AnimatedTooltip items={techStack3}/>
        </div>
        
    </div>
  )
}

export default TechStack