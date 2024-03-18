interface compProps {
    info : string ,
    image :any
}
import Image from "next/image"

const ContactCard = ({info , image}:compProps) => {
  return (
    <div className='Contact-Card flex gap-[12px] items-center'>
        <Image src={image} width={20} height={20} alt={info} />
        <span className="text-[16px]">{info}</span>
    </div>
  )
}

export default ContactCard