'use client'
import Title1 from '../title/title1'
import serviceimage from '../../../public/png/service.png'
import { useLocale, useTranslations } from 'next-intl'

const data = [
  {
      id:1,
      title:{
          uk: 'Diagnostic',
          ge:'დიაგნოსტიკა',
          ru:'Диагностика'
      },
      image:'',
  },
  {
      id:2,
      title:{
          uk: 'Key Programming',
          ge:'გასაღების პროგრამირება',
          ru:'Ключевое Программирование'
      },
      image:'',
  },
  {
      id:3,
      title:{
          uk: 'ECU Programming',
          ge:'ძრავის კომპიუტერის პროგრამირება',
          ru:'Программирование Компьютера Двигателя'
      },
      image:'',
  },
  {
      id:4,
      title:{
          uk: 'Oil Change',
          ge:'ზეთის შეცვლა',
          ru:'Замена Масла'
      },
      image:'',
  },
  {
      id:5,
      title:{
          uk: 'Engine Repair',
          ge:'ძრავის შეკეთება',
          ru:'Ремонт Двигателя'
      },
      image:'',
  },
  {
      id:6,
      title:{
          uk: 'Wires Repair',
          ge:'ელექტრო სადენების შეკეთება',
          ru:'Ремонт Электропроводки'
      },
      image:'',
  },
]

const Ourservices = () => {
const t = useTranslations();
const locale = useLocale();
  return (
    <div className='w-full flex flex-col'>
        <Title1 title={t('ourservices.title')} image={serviceimage} moreInfo={t('global.moreInfo')} link={`/services`}/>
        <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-5 justify-between mt-[20px]'>
          {data.map(item=> 
            <div key={item.id} className='ssm:h-[170px]  relative p-[0px] h-[100px] rounded-lg bg-[#efefef]'>

              <div className='w-full absolute   px-[5px] py-[5px] bottom-5 text-center text-[13px] '>
                {item.title[locale]}
              </div>

            </div>
          )}
        </div>
    </div>
  )
}

export default Ourservices