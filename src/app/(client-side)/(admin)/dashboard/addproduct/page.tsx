'use client'
import React, { useState, useEffect } from "react";
import axios from "axios";
import Image from "next/image";
import toast from "react-hot-toast";
import { CiTrash } from "react-icons/ci";
import { FcAddImage } from "react-icons/fc";

const AddProduct = () => {
    const [images, setImages] = useState<any>(null);
    const [uploadedImages, setUploadedImages] = useState<any | null>(null);
    console.log(uploadedImages)
    const [thumbnailIndex, setThumbnailIndex] = useState<any | null>(null);
    const [categoryData , setCategoryData] = useState<any>(null);

    const [titleGe , setTitleGe] = useState<string | null>(null);
    const [titleRu , setTitleRu] = useState<string | null>(null);
    const [titleEn , setTitleEn] = useState<string | null>(null);
    const [descrGE , setDescrGE] = useState<string | null>(null);
    const [descrEN , setDescrEN] = useState<string | null>(null);
    const [descrRU , setDescrRU] = useState<string | null>(null);
    const [oem , setOem] = useState<string | null>(null);
    const [techCode , setTechOem] = useState<string | null>(null);
    const [price , setPrice] = useState<number | null>(null); 
    const [quantity , setQuantity] = useState<number | null>(null);
    const [categoryid , setCategoryId] = useState<number | null>(null);
    const [thumbnail , setThumbnail] = useState<any>(null);
    
    useEffect(()=>{
      const getCategory = async ()=> {
        const res = await axios.get('/api/category/get');
        if(res.status === 200){
          setCategoryData(res.data)
        }
      }
      getCategory();
    },[])

    //after creatigng product create product images
    const addProductImages = async (id : any) =>{
      try {
        for(let i =0 ; i < uploadedImages.length ; i++ ){
          const data = {
            imageUrl: uploadedImages[i] ,
            productId:id 
          }
          const res= await axios.post('/api/products/createproductimage' , data)
          if(res.status === 200){
            toast.success('პროდუქტი დაემატა წარმატებით')
          }
        }
      } catch (error) {
          toast.error('შეცდომა დამატების დროს')
      }
    }
    //after creatigng product create product images
    
    const addProductHandler = async () => {
      if (thumbnailIndex === null) {
          setThumbnailIndex(0);
          // Check if uploadedImages is not null before accessing its elements
          if (uploadedImages && uploadedImages.length > 0) {
              setThumbnail(uploadedImages[0]);
          }
      } else {
          // Check if uploadedImages is not null before accessing its elements
          if (uploadedImages && uploadedImages.length > parseInt(thumbnailIndex)) {
              setThumbnail(uploadedImages[parseInt(thumbnailIndex)]);
          }
      }
  
      try {
          const data = {
              title_ge: titleGe,
              title_ru: titleRu,
              title_en: titleEn,
              description_en: descrEN,
              description_ge: descrGE,
              description_ru: descrRU,
              code: techCode,
              oem: oem,
              price: price,
              quantity: quantity,
              categoryId: categoryid,
              thumbnail: thumbnail
          };
          const res = await axios.post('/api/products/create', data);
          if (res.status === 200) {
              setTimeout(() => {
                addProductImages(res.data.res.id);
              }, 100);
          }
      } catch (error) {
          toast.error('შეცდომა პროდუქტის დამატების დროს');
      }
  };
  
    
    const handleRemoveImage = (index: number) => {
      if (images) {
        const filteredImages = Array.from(images).filter((_, i) => i !== index);
        setImages(filteredImages);
      }
  };

    const submitFormHandler = async () => {
        if (!images || images.length === 0) {
            return;
        }

        try {
            const data = new FormData();
            for (let i = 0; i < images.length; i++) {
                data.append('image', images[i]);
            }
            const res = await axios.post('/api/upload/image', data);
            if (res.status === 200) {
              setUploadedImages(res.data.images);
              addProductHandler();
            }
        } catch (error) {
            console.error(error);
            toast.error('Error uploading images');
        }
    };

    const handleSetThumbnail = (index: number) => {
        setThumbnailIndex(index);

    };
    
    const imagesHandler = (e: any) => {
      setImages(e.target.files);
    };

    const handleCategoryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
      const categoryId = parseInt(e.target.value);
      setCategoryId(categoryId);
  };
  
    return (
        <div className='w-full px-[10px]'>

            <form className="w-full flex flex-col gap-4">

                <div className="w-full flex justify-between gap-3">
                    <div className="w-full gap-1 flex flex-col flex-1">
                      <label className="text-[13px]">TITLE GE*</label>
                      <input onChange={(e)=> setTitleGe(e.target.value)} type="text" className="input1" />
                    </div>
                    <div className="w-full gap-1 flex flex-col flex-1">
                      <label className="text-[13px]">TITLE EN</label>
                      <input onChange={(e)=> setTitleEn(e.target.value)} type="text" className="input1" />
                    </div>
                    <div className="w-full gap-1 flex flex-col flex-1">
                      <label className="text-[13px]">TITLE RU</label>
                      <input onChange={(e)=> setTitleRu(e.target.value)} type="text" className="input1" />
                    </div>
                </div>

                <div className="w-full flex justify-between gap-3">
                    <div className="w-full gap-1 flex flex-col flex-1">
                      <label className="text-[13px]">TECHNICPORT CODE*</label>
                      <input onChange={(e)=> setTechOem(e.target.value)} type="text" className="input1" />
                    </div>
                    <div className="w-full gap-1 flex flex-col flex-1">
                      <label className="text-[13px]">OEM CODE</label>
                      <input onChange={(e)=> setOem(e.target.value)} type="text" className="input1" />
                    </div>
                </div>

                <div className="w-full flex justify-between gap-3">
                    <div className="w-full gap-1 flex flex-col flex-1">
                      <label className="text-[13px]">PRICE</label>
                      <input onChange={(e)=> setPrice(parseInt(e.target.value))} type="number" className="input1" />
                    </div>
                    <div className="w-full gap-1 flex flex-col flex-1">
                      <label className="text-[13px]">QUANTITY</label>
                      <input onChange={(e)=> setQuantity(parseInt(e.target.value))} type="number" className="input1" />
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
                      <textarea onChange={(e)=> setDescrGE(e.target.value)} className='w-full input1 min-h-[160px]'/>
                    </div>
                    <div className="w-full gap-1 flex flex-col flex-1">
                      <label className="text-[13px]">DESCRIPTION EN</label>
                      <textarea onChange={(e)=> setDescrEN(e.target.value)} className='w-full input1 min-h-[160px]'/>
                    </div>
                    <div className="w-full gap-1 flex flex-col flex-1">
                      <label className="text-[13px]">DESCRIPTION RU</label>
                      <textarea onChange={(e)=> setDescrRU(e.target.value)} className='w-full input1 min-h-[160px]'/>
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
                        {index === thumbnailIndex && <span className="absolute bottom-0 left-0 bg-green-500 text-white px-1 rounded">Thumbnail</span>}
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
