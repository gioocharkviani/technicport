import BrandsCard from "../cards/brandsCard";
import Title3 from "../title/title3"
import { useTranslations } from "next-intl";
import motule from '../../../public/motul.png'


const BrandsComp = () => {
  const t = useTranslations();
  return (
    <div className="flex items-center overflow-hidden  gap-3 mt-[40px] bg-[#272a37] rounded-lg py-[20px] px-[20px]  ">

      <div className="text-[15] w-max shrink-0 text-white pr-[30px]">{t('partners.partnerTitle')}</div>

        <div className="flex gap-5 justify-between overflow-hidden w-full">
            <BrandsCard  image={motule} />
            <BrandsCard  image={motule} />
            <BrandsCard  image={motule} />
            <BrandsCard  image={motule} />
            <BrandsCard  image={motule} />
            <BrandsCard  image={motule} />
            <BrandsCard  image={motule} />
        </div>

    </div>
  )
}

export default BrandsComp;