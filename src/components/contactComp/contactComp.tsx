import React from 'react'
import Title1 from '../title/title1'
import contactimg from '../../../public/png/contact.png'
import ContactCard from '../cards/contactCard'

import email from '../../../public/png/email.png';
import phone from '../../../public/png/telephone.png';
import telegram from '../../../public/png/telegram.png';
import watsup from '../../../public/png/watsup.png';
import viber from '../../../public/png/viber.png';
import { useTranslations } from 'next-intl';



const ContactComp = () => {
  const t = useTranslations('contactinfo');
  return (
    <div className='flex w-full flex-col mt-[50px] bg-[#FFF] rounded-lg py-[20px] px-[20px] '>
        <Title1 title={t('contactinfoTitle')} image={contactimg}/>

        <div className='mt-[25px] flex gap-8 flex-col md:flex-row justify-between'>

            <div className='w-full flex-1 flex flex-col gap-5'>
              <ContactCard  info='gioocharkviani@gmail.com' image={email}/>
              <ContactCard  info='+995 555 55 55 55' image={phone}/>
              <ContactCard  info='+995 555 55 55 55' image={telegram}/>
              <ContactCard  info='+995 555 55 55 55' image={watsup}/>
              <ContactCard  info='+995 555 55 55 55' image={viber}/>
            </div>
          
            <div className='w-full flex-1 min-h-[220px] smd:h-[350px]  rounded-md overflow-hidden bg-gray-200'>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d190570.22333825153!2d44.64195035529386!3d41.727860654914004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40440cd7e64f626b%3A0x61d084ede2576ea3!2sTbilisi!5e0!3m2!1sen!2sge!4v1710753278568!5m2!1sen!2sge"  width="1000" height="350" style={{border:0}} allowFullScreen={true} loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>
        </div>
    </div>
  )
}

export default ContactComp;