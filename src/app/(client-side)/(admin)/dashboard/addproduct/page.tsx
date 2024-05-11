'use client'
import React, { useState, useEffect } from "react";
import axios from "axios";
import Image from "next/image";
import toast from "react-hot-toast";
import { CiTrash } from "react-icons/ci";
import { FcAddImage } from "react-icons/fc";

const AddProduct = () => {
    const [images, setImages] = useState<any>([]);
    const [thumbnailIndex, setThumbnailIndex] = useState<any | null >(0); 
    const [categoryData, setCategoryData] = useState([]);
    const [formData, setFormData] = useState<any>({
        titleGe: "",
        titleRu: "",
        titleEn: "",
        descrGE: "",
        descrEN: "",
        descrRU: "",
        oem: "",
        techCode: "",
        price: null,
        quantity: null,
        categoryid: Number || null,
        thumbnailindex: 0
    });

    const handleSetThumbnail =(index:number)=>{
        setFormData({...formData , thumbnailindex:index})
    }

    useEffect(() => {
        const getCategory = async () => {
            try {
                const res = await axios.get('/api/category/get');
                if (res.status === 200) {
                    setCategoryData(res.data);
                }
            } catch (error) {
                console.error("Error fetching categories:", error);
            }
        };
        getCategory();
    }, []);

    const imagesHandler = (e:any) => {
        setImages([...images, ...e.target.files]);
    };

    const handleRemoveImage = (index: number) => {
        const filteredImages = images.filter((i: number) => i !== index);
        setImages(filteredImages);
    };

    const submitFormHandler = async () => {
        if (!images.length) {
            toast.error('Please select images');
            return;
        }

        const data = new FormData();
        
            // Append formData to FormData
        Object.entries(formData).forEach(([key, value]:any) => {
            data.append(key, value);
        });

        images.forEach((image:any) => {
            data.append('image', image);
        });
        try {
            const res = await axios.post('/api/products/create', data);
            if (res.status === 200) {
                toast.success('Product added successfully');
                console.log(res)
            }
        } catch (error) {
            console.error("Error adding product:", error);
            toast.error('Error adding product');
        }
    };

    const handleCategoryChange = (e:any) => {
        const catId = parseInt(e.target.value);
        setFormData({ ...formData, categoryid: catId  });
    };

    const handleInputChange = (e:any) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };
  
    return (
        <div className='w-full p-[10px] bg-white rounded-xl'>

            <form className="w-full flex flex-col gap-4">

                <div className="w-full flex justify-between gap-3">
                    <div className="w-full gap-1 flex flex-col flex-1">
                      <label className="text-[13px]">TITLE GE*</label>
                      <input name='titleGe' onChange={(e)=>handleInputChange(e)} type="text" className="input1" />
                    </div>
                    <div className="w-full gap-1 flex flex-col flex-1">
                      <label className="text-[13px]">TITLE EN</label>
                      <input name='titleEn' onChange={(e)=>handleInputChange(e)} type="text" className="input1" />
                    </div>
                    <div className="w-full gap-1 flex flex-col flex-1">
                      <label className="text-[13px]">TITLE RU</label>
                      <input name='titleRu' onChange={(e)=>handleInputChange(e)} type="text" className="input1" />
                    </div>
                </div>

                <div className="w-full flex justify-between gap-3">
                    <div className="w-full gap-1 flex flex-col flex-1">
                      <label className="text-[13px]">TECHNICPORT CODE*</label>
                      <input name='techCode' onChange={(e)=>handleInputChange(e)} type="text" className="input1" />
                    </div>
                    <div className="w-full gap-1 flex flex-col flex-1">
                      <label className="text-[13px]">OEM CODE</label>
                      <input name='oem' onChange={(e)=>handleInputChange(e)} type="text" className="input1" />
                    </div>
                </div>

                <div className="w-full flex justify-between gap-3">
                    <div className="w-full gap-1 flex flex-col flex-1">
                      <label className="text-[13px]">PRICE</label>
                      <input name="price" onChange={(e)=>handleInputChange(e)} type="number" className="input1" />
                    </div>
                    <div className="w-full gap-1 flex flex-col flex-1">
                      <label className="text-[13px]">QUANTITY</label>
                      <input name="quantity" onChange={(e)=>handleInputChange(e)} type="number" className="input1" />
                    </div>

                    <div className="w-full gap-1 flex flex-col flex-1">
                    <label className="text-[13px]">CATEGORY</label>
                    <select onChange={handleCategoryChange} className="input1">
                        <option value="">Select Category</option>
                        {categoryData && categoryData.map((item: any, index: number) => (
                            <option key={index} value={item.id}>{item.title_ge}</option> // Assuming category ID is 'id' in your data
                        ))}
                    </select>
                    </div>

                </div>
                <div className="w-full flex justify-between gap-3">
                    <div className="w-full gap-1 flex flex-col flex-1">
                      <label className="text-[13px]">DESCRIPTION GE*</label>
                      <textarea name="descrGE" onChange={(e)=>handleInputChange(e)} className='w-full input1 min-h-[160px]'/>
                    </div>
                    <div className="w-full gap-1 flex flex-col flex-1">
                      <label className="text-[13px]">DESCRIPTION EN</label>
                      <textarea name="descrEN"  onChange={(e)=>handleInputChange(e)} className='w-full input1 min-h-[160px]'/>
                    </div>
                    <div className="w-full gap-1 flex flex-col flex-1">
                      <label className="text-[13px]">DESCRIPTION RU</label>
                      <textarea name="descrRU"  onChange={(e)=>handleInputChange(e)} className='w-full input1 min-h-[160px]'/>
                    </div>
                </div>

            </form>

              <div className="flex gap-3 my-[20px] ">

                {images && Array.from(images).map((file, index ) => (
                    <div key={index} className="relative overflow-hidden rounded-lg w-[100px] bg-white h-[100px]">
                        <Image src={URL.createObjectURL(file as Blob)} className="w-[full] h-full object-contain" alt={`Image ${index}`} width={200} height={200} onClick={() => handleSetThumbnail(index)} />
                        <button onClick={() => handleRemoveImage(index)} className="absolute flex items-center justify-center top-[0px] right-[0px] bg-red-500 text-white w-[20px] h-[20px] rounded">
                            <CiTrash className="text-white" />
                        </button>
                        {index === formData.thumbnailindex && <span className="absolute bottom-0 left-0 bg-green-500 text-white px-1 rounded">Thumbnail</span>}
                    </div>
                ))}

                <div className="w-[100px] h-[100px] flex justify-center items-center">
                  <label htmlFor="fileUpload" className="relative flex justify-center items-center w-full h-full bg-gray-300 rounded-xl cursor-pointer">
                    <span className="flex gap-2 text-[13px] flex-col justify-center items-center text-[#2f2f2f]">
                      Add Image
                      <FcAddImage  className="w-[50px] h-[50px]"/>
                    </span>
                    <input
                      id="fileUpload"
                      type="file"
                      accept="image/*"
                      multiple
                      onChange={imagesHandler}
                      className="hidden"
                    />
                  </label>
                </div>
            </div>

                <button onClick={submitFormHandler} className='btn1'>ADD NEW PRODUCT</button>
        </div>
    );
};

export default AddProduct;
