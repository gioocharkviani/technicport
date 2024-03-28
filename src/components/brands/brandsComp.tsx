import BrandsCard from "../cards/brandsCard";
import Title3 from "../title/title3"
import { useTranslations } from "next-intl";
import motule from '../../../public/motul.png'


const BrandsComp = () => {
  const t = useTranslations();
  return (
    <div className="flex items-center gap-3 mt-[30px] bg-[#272a37] rounded-lg py-[20px] px-[20px]  ">

      <div className="w-max text-[15] text-white pr-[30px]">{t('partners.partnerTitle')}</div>

        <div className="grid grid-cols-1 ssm:grid-cols-2 md:grid-cols-4 gap-3 justify-between">
            <BrandsCard  image={motule} />
        </div>

    </div>
  )
}

export default BrandsComp;