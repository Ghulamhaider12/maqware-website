import React from 'react'
import { styles } from '../Utils/styles/styles'
import Text from './Text'

const Leader = ({ largeImg, smallImg, para, name, post, largeImg2 }) => {
    return (
        <div>
            <div className='flex w-full justify-center px-24'>
                <div className='w-2/5 flex justify-end'>
                    <img src={largeImg} alt="SirAneespic" className='object-fill xl:h-[460px] lg:h-[400px] 2xl:h-[490px]' />
                </div>

                <div className='w-3/5 flex'>
                    <div className=' flex flex-col justify-between'>
                        <div className='px-4'>
                            <p className='2xl:text-[46px] ' style={styles.Ourleadertext}>{para}</p>
                        </div>
                        <div className='flex items-center gap-2 top-4 relative' >
                            <img src={smallImg} alt="SirAneesImg" className='relative object-fill xl:h-[180px] lg:h-[160px] 2xl:h-[190px]' />
                            <div className=''>
                                <Text textabout={{ name }} />
                                <p style={styles.Ourleadertext}>{post}</p>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
            {/* <div className='flex w-full justify-center px-24'>
                <div className='w-3/5 flex'>
                    <div className=' flex flex-col justify-between'>
                        <div className='px-4'>
                            <p style={styles.Ourleadertext}>{para2}</p>
                        </div>
                        <div className='flex items-center gap-2 top-4 relative' >
                            <img src={smallImg2} alt="SirAneesImg" className='relative object-fill xl:h-[180px] lg:h-[160px] 2xl:h-[190px]' />
                            <div className=''>
                                <Text textabout={{ name2 }} />
                                <p style={styles.Ourleadertext}>{post2}</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='w-2/5 flex justify-end'>
                    <img src={largeImg2} alt="SirAhmadpic" className='object-fill xl:h-[460px] lg:h-[400px] 2xl:h-[490px]' />
                </div>
            </div> */}

        </div>
    )
}

export default Leader