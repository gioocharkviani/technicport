interface title {
name:string
}

const Title3 = ({name}:title) => {
  return (
    <div className='flex justify-center'>
        <h2 className="smd:text-[30px] border-b-[2px] border-[#D9D9D9] py-[5px] text-[20px]  font-semibold w-max uppercase text-[#6C6C6C]">{name}</h2>
    </div>
  )
}

export default Title3