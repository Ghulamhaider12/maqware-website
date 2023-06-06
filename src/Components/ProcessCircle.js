import React from 'react'
import { styles } from '../Utils/styles/styles'


const ProcessCircle = ({ img,zindex}) => {
  return (
    
      <div className='z-40 xl:w-20 xl:h-20 overflow-hidden lg:w-16 lg:h-16 md:h-12 md:w-12 rounded-full md:border-[1px] border-2 border-[#55C5CD] bg-[rgba(14,15,15,1)] relative top-10 flex justify-center items-center' >
      <div className='bg-black absolute top-0 bottom-0 right-0 left-0 w-full h-full z-10'/>
      <div className='z-20 p-3 h-full flex justify-center items-center' style={styles.ProcessCircleStyle}>

        <img src={img} alt="" className=' w-[100%]' />
      </div>
      </div>
    
  )
}

export default ProcessCircle