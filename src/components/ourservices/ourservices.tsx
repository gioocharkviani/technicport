'use client'
import Title1 from '../title/title1'
import serviceimage from '../../../public/png/service.png'
import { useLocale, useTranslations } from 'next-intl'

interface itemProps {
  id: number,
  title: any,
  image:string
}

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
const locale: string = useLocale();
  return (
    <div className='w-full flex flex-col bg-[#FFF] rounded-lg py-[20px] px-[20px] h-full'>

        <Title1 title={t('ourservices.title')} image={serviceimage} moreInfo={t('global.moreInfo')} link={`/services`}/>
        
        <div className='flex justify-center items-center'>
          ToDo -  Task-1 research icons for all services
        </div>

    </div>
  )
}

export default Ourservices