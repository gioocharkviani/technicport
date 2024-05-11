import MaxWidthWrapper from '@/components/contentwrapper/maxWidthWrapper'
import React from 'react'

const page = () => {
  return (
    <MaxWidthWrapper> 
    <div className='w-full mt-[25px] h-full  bg-white p-[20px] rounded-xl'>
        <div className='flex w-full  gap-5 justify-between'>
            <div className='flex-[1] flex flex-col gap-4'>
                <div className='w-full h-[350px] whiteBoxShadow rounded-xl overflow-hidden'>

                </div>
                <div className='flex justify-between flex-wrap gap-3'>
                    <div className='w-[100px] h-[100px] rounded-md whiteBoxShadow' ></div>
                    <div className='w-[100px] h-[100px] rounded-md whiteBoxShadow' ></div>
                    <div className='w-[100px] h-[100px] rounded-md whiteBoxShadow' ></div>
                    <div className='w-[100px] h-[100px] rounded-md whiteBoxShadow' ></div>
                </div>
            </div>
            <div className='flex-[1.5] flex flex-col gap-1'>
                <span className='text-[14px] capitalize color-[gray] font-mdeium'>code: <span className='font-bold'>technic</span></span>
                <h2 className='text-[28px] capitalize color-[gray] font-semibold'>item Title item title itme title</h2>
                <span className='text-[14px] text-[#999999]'>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aut a nobis eum suscipit ad nemo vel praesentium culpa temporibus ratione deleniti ea sunt quas, beatae quisquam facere inventore eaque quidem?
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aut a nobis eum suscipit ad nemo vel praesentium culpa temporibus ratione deleniti ea sunt quas, beatae quisquam facere inventore eaque quidem?
                </span>
                <div className='flex mt-[50px] w-full justify-between items-center'>

                    <div className='flex gap-2 items-center w-full '>
                        <input type='number' min={1} defaultValue={1} max={100} className='input1 appearance-auto max-w-[100px]'/>
                        <button className='btn1 w-max'>add cart</button> 
                        <button className='btn6 w-max'>buy it now</button> 
                    </div>

                    <div className='flex w-full justify-end'>
                    <div className='flex gap-2 items-center'>
                    <span className='text-[18px] flex gap-3 uppercase color-[gray] font-mdeium'>price:</span>
                    <span className='font-bold text-[20px]'>54$</span>
                    </div>
                    </div>

                </div>
            </div>
        </div>
    </div>
    </MaxWidthWrapper>
  )
}

export default page