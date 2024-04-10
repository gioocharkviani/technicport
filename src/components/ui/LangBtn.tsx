import React from 'react'

const LangBtn = () => {
  return (
    <button className='listStyle-1' onClick={() => lagChange('ge')}>
        <div  className='flex gap-1 text-[13px] items-center uppercase'>
            ge
            <GeoFlag />
        </div>
    </button>
  )
}

export default LangBtn