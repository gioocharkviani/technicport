'use client'
import Title1 from '../title/title1'
import serviceimage from '../../../public/png/service.png'


const Ourservices = () => {

  return (
    <div className='w-full flex flex-col bg-[#FFF] rounded-lg py-[20px] px-[20px] h-full'>

        <Title1 title='' image={serviceimage} moreInfo='' link={`/services`}/>
        
        <div className='flex justify-center items-center'>
          ToDo -  Task-1 research icons for all services
        </div>

    </div>
  )
}

export default Ourservices