'use client';

import { useModal } from "@/context/ModalContext";
import axios from "axios";
import toast from "react-hot-toast";
import EditShippingAddressForm from "./editShippingAddress";

const AddressCard = ({ data, reFetch }: any) => {
    const { refetch } = reFetch; 
    const { openModal } = useModal();

    const handleRemoveAddress = async () => {
        try {
            await axios.delete('/api/address/delete', { data: { id: data.id } });
            toast.success('მისამართი წაიშალა წარმატებით')
            refetch();

        } catch (error) {
            toast.error('შეცდომა მისამართის წაშილის დროს'); // Make sure the error message is correctly enclosed
        }
    };

    const handleDefaultChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.checked) {
            try {
                await axios.post('/api/address/setdefault', { id: data.id });
                toast.success('მთავარი მისამართი შეიცვალა წარმატებიტ');
                refetch();
            } catch (error) {
                toast.error('შეცდომა ცვლილების დროს');
            }
        }
    };

    const handleUpdateAddess = async()=>{
        openModal('რედაქტირება' , <EditShippingAddressForm addressData={data}  onEdit={{ refetch }} />)
    }

    return (
        <div className={`w-full h-max px-[10px] py-[20px] border-[1px] rounded-lg ${data.default ? 'hoverWhiteBoxShadow' : 'whiteBoxShadow'}`}>
            <div className='w-full flex flex-col gap-1 pb-[10px] border-b-[1px] border-gray-200'>
                <span className='font-bold capitalize text-[18px]'>giorgi charkviani</span>
                <div className='flex flex-col gap-1'>
                    <span className='text-[12px] text-[#a1a1a1]'>ტელეფონი:</span>
                    <span className='text-[14px] font-medium'>{data?.phone}</span>
                </div>
                <div className='flex flex-col gap-1'>
                    <span className='text-[12px] text-[#a1a1a1]'>მისამართი:</span>
                    <div className='text-[14px] font-medium flex gap-2'>
                        <span>{data?.city}</span>,
                        <span>{data?.address}</span>,
                        <span>{data?.zip}</span>
                    </div>
                </div>
            </div>
            <div className='w-full flex justify-between items-center mt-[10px]'>

                <div className='flex w-max items-center'>
                    <label className="form-control">
                        <input 
                        type="checkbox" 
                        checked={data?.default} 
                        onChange={handleDefaultChange}
                        name="checkbox-checked" />
                        საწყისი
                    </label>
                </div>

                <div className='flex gap-2'>
                    <button className='btn3 flex w-max' onClick={handleUpdateAddess}>
                        <span className='text-[12px]'>შეცვლა</span>
                    </button>
                    <button className='btn3 flex w-max' onClick={handleRemoveAddress}>
                        <span className='text-[12px]'>წაშლა</span>
                    </button>
                </div>
            </div>
        </div>
    );
}

export default AddressCard;
