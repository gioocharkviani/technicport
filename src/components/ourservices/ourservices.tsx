import Title1 from '../title/title1'
import { createTranslation } from '@/i18n/server';
import SwiperService from './swiperService';

const Ourservices = async () => {
  const {t} = await createTranslation('common');

  return (
    
    <div className='w-full flex flex-col bg-[#FFF] rounded-lg py-[20px] px-[20px] h-full'>

        <Title1 title={t('ourservices.title')}  moreInfo={t('global.moreInfo')} link={`/services`}/>
        
        <div className='flex justify-center flex-col h-full items-center'>
         <div className='mt-[10px] flex flex-col justify-between w-full min-h-[200px] lg:h-full gap-5 '>
            <SwiperService />
         </div>
        </div>

    </div>
  )
}

export default Ourservices