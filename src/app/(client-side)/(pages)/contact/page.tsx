'use client'
import ContactCard from '@/components/cards/contactCard'
import MaxWidthWrapper from '@/components/contentwrapper/maxWidthWrapper'
import Title1 from '@/components/title/title1'
import React from 'react'
import email from '../../../../../public/png/email.png';
import phone from '../../../../../public/png/telephone.png';
import telegram from '../../../../../public/png/telegram.png';
import watsup from '../../../../../public/png/watsup.png';
import viber from '../../../../../public/png/viber.png';

const ContactPage = () => {
  return (
    <div className='w-full flex flex-col gap-[30px] mt-[20px] items-center flex-1' >
      <MaxWidthWrapper>
        <div className='flex flex-col gap-5'>
          <Title1 title='კონტაქტი'/>
          <div className='flex md:flex-row flex-col gap-[40px] justify-between whiteBoxShadow py-[20px] px-[20px] rounded-lg'>
            <div className='flex w-full flex-col gap-2 '>
              <ContactCard  info='info@technicport.com' image={email}/>
              <ContactCard  info='+995 593 69 66 33' image={phone}/>
              <ContactCard  info='+995 593 69 66 33' image={telegram}/>
              <ContactCard  info='+995 593 69 66 33' image={watsup}/>
              <ContactCard  info='+995 593 69 66 33' image={viber}/>
            </div>

            <div className='w-full flex flex-col gap-3'> 
        
              <form className='w-full flex flex-col gap-3'>
                <div className='flex sm:flex-row flex-col gap-3 w-full'>
                  <div className='flex w-full flex-col gap-1'>
                    <label className='text-[12px]'>სახელი:</label>
                    <input type='text' className='input1 w-full'/>
                  </div>
                  <div className='flex w-full flex-col gap-1'>
                    <label className='text-[12px]'>მეილი:</label>
                    <input type='text' className='input1 w-full'/>
                  </div>
                </div>
                  <div className='flex w-full flex-col gap-1'>
                    <label className='text-[12px]'>თემა:</label>
                    <input type='text' className='input1 w-full'/>
                  </div>
                  <div className='flex w-full flex-col gap-1'>
                    <label className='text-[12px]'>შეტყობინება:</label>
                    <textarea className='w-full input1 min-h-[160px]'/>
                  </div>
                <button className='btn1'>გაგზავნა</button>
              </form>
            </div>

          </div>
        </div>

        <div className='w-full rounded-lg mt-[40px] h-[300px] md:h-[400px] overflow-hidden bg-gray-400'>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d190570.22333825153!2d44.64195035529386!3d41.727860654914004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40440cd7e64f626b%3A0x61d084ede2576ea3!2sTbilisi!5e0!3m2!1sen!2sge!4v1710753278568!5m2!1sen!2sge" className='w-full' width="1000" height="600" style={{border:0}} allowFullScreen={true} loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
        </div>
      </MaxWidthWrapper>

    </div>
  )
}

export default ContactPage