import Title3 from "../title/title3"
import { useTranslations } from "next-intl";


const BrandsComp = () => {
  const t = useTranslations();
  return (
    <div className="flex flex-col gap-3 mt-[30px]">
        <Title3 name={t('partners.partnerTitle')}/>
        <div className="grid grid-cols-1 ssm:grid-cols-2 md:grid-cols-4 gap-3 justify-between mt-[20px]">
          <div className="h-[100px] bg-gray-200 rounded-md flex justify-center items-center">brand image</div>
          <div className="h-[100px] bg-gray-200 rounded-md flex justify-center items-center">brand image</div>
          <div className="h-[100px] bg-gray-200 rounded-md flex justify-center items-center">brand image</div>
          <div className="h-[100px] bg-gray-200 rounded-md flex justify-center items-center">brand image</div>
          <div className="h-[100px] bg-gray-200 rounded-md flex justify-center items-center">brand image</div>
          <div className="h-[100px] bg-gray-200 rounded-md flex justify-center items-center">brand image</div>
          <div className="h-[100px] bg-gray-200 rounded-md flex justify-center items-center">brand image</div>
          <div className="h-[100px] bg-gray-200 rounded-md flex justify-center items-center">brand image</div>
        </div>
    </div>
  )
}

export default BrandsComp;