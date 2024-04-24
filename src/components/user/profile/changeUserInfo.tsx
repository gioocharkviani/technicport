'use client'
import Image from "next/image";
import { MdAddAPhoto } from "react-icons/md";
import userAvatar from '../../../../public/userIcon.svg';
import { useState } from "react";



const ChangeUserInfo = () => {
    const [photo,setPhoto] = useState<string | null>(null);

    const photoChange = (e:any) =>{
        const photo = e.target.files[0];
        if(photo){
            const imageUrl = URL.createObjectURL(photo);
            setPhoto(imageUrl)
        }
    }

    return(
        <div className="w-full flex flex-col mt-[20px]">
            <form className="flex gap-7 flex-col items-center">

            <div className="flex gap-8">
                {/* PHOTO CHANGE */}
                <div className="flex flex-col gap-3 justify-center">
                    <div className='w-[100px] h-[100px] relative  bg-[#e3e3e3] rounded-[50%] flex justify-center items-center'>
                        <div className="w-full h-full relative overflow-hidden rounded-[100%] flex justify-center items-center">
                            {!photo &&
                                <Image src={userAvatar} alt="123" width={30} height={30} />
                            }
                            {photo &&
                                <Image className='w-[100px] h-[100px] object-contain' src={photo} alt="123" width={100} height={100} />
                            }
                        </div>

                        <div className="chooseImageBtnWrapper">
                            <button>
                                <MdAddAPhoto  className="text-[white]"/>
                                <input type="file" onChange={photoChange}/>
                            </button>
                        </div>

                    </div>
                </div>
                {/* PHOTO CHANGE */}
                
                {/* INPUT FILEDS */}
                <div className="flex flex-col gap-3">
                    <input className="input1" placeholder="სახელი" type="text"/>
                    <input className="input1" placeholder="გვარი" type="text"/>
                    <input className="input1" placeholder="მეილი" type="text"/>
                    <input className="input1" placeholder="ტელეფონი" type="text"/>
                </div>
                {/* INPUT FILEDS */}
            </div>

            <div className="w-full">
                    <button className="btn1">
                        განახლება
                    </button>
            </div>
    

            </form>
        </div>
    )
}

export default ChangeUserInfo;