import Title1 from '../title/title1'
import serviceimage from '../../../public/png/service.png'
import { useTranslations } from 'next-intl'

const Ourservices = () => {
const t = useTranslations();
  return (
    <div className='w-full flex flex-col'>
        <Title1 title={t('ourservices.title')} image={serviceimage} moreInfo={t('global.moreInfo')} link={`/services`}/>
        <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-5 justify-between mt-[20px]'>
            <div className='ssm:h-[170px] h-[100px] rounded-lg bg-[#efefef]'></div>
            <div className='ssm:h-[170px] h-[100px] rounded-lg bg-[#efefef]'></div>
            <div className='ssm:h-[170px] h-[100px] rounded-lg bg-[#efefef]'></div>
            <div className='ssm:h-[170px] h-[100px] rounded-lg bg-[#efefef]'></div>
            <div className='ssm:h-[170px] h-[100px] rounded-lg bg-[#efefef]'></div>
            <div className='ssm:h-[170px] h-[100px] rounded-lg bg-[#efefef]'></div>
        </div>
    </div>
  )
}

export default Ourservices