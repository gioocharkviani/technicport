import Title1 from '../title/title1'
import { createTranslation } from '@/i18n/server';

const Ourservices = async () => {
  const {t} = await createTranslation('common');

  return (
    
    <div className='w-full flex flex-col bg-[#FFF] rounded-lg py-[20px] px-[20px] h-full'>

        <Title1 title={t('ourservices.title')}  moreInfo={t('global.moreInfo')} link={`/services`}/>
        
        <div className='flex justify-center items-center'>
          ToDo -  Task-1 research icons for all services
        </div>

    </div>
  )
}

export default Ourservices