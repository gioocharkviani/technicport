'use client'
import { useSession } from "next-auth/react";
import { signOut } from "next-auth/react";
import { useTranslation } from "@/i18n/client";

import Image from "next/image";
import UserIcon from "../../../public/svg/userIcon";
import { useState, useRef, useEffect } from "react";

import order from '../../../public/png/account/order.png';
import payments from '../../../public/png/account/payments.png';
import parameters from '../../../public/png/account/parameters.png';
import address from '../../../public/png/account/address.png';
import user from '../../../public/png/account/user.png';

import MenuLink2 from "../links/MenuLink2";

const AccountB = () => {
  const { t } = useTranslation('common');

  // Open and close Profile menu
  const [open, setOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    function closeMenu(event: MouseEvent) {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target as Node) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target as Node)
      ) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", closeMenu);
    return () => {
      document.removeEventListener("mousedown", closeMenu);
    };
  }, []);

  const { data: session } = useSession();

  const handleToggle = (event: React.MouseEvent) => {
    event.stopPropagation(); // Stop the event from propagating to the document
    setOpen(prev => !prev);
  };

  const handleSignOut = () => {
    setOpen(false);
    signOut();
  };

  return (
    <div className="flex relative flex-col justify-center items-center">
      <button
        ref={buttonRef}
        onClick={handleToggle}
        className="w-max rounded-md flex gap-2 items-center whiteBoxShadow px-[10px] py-[4px]"
      >
        <div className="w-[22px] flex items-center justify-center shrink-0 h-[22px] rounded-[50%] bg-[#dadada]">
          {session?.user?.photo ? (
            <Image alt="profilePhoto" width={50} height={50} src={session?.user?.photo} />
          ) : (
            <UserIcon />
          )}
        </div>
        <div className="text-[14px] uppercase">{session?.user?.firstName}</div>
      </button>

      {open && (
        <div ref={menuRef} className="absolute rounded-md top-[50px] flex flex-col gap-3 min-w-full right-0 whiteBoxShadow p-[10px]">
          <div className="flex flex-col gap-1">
            <MenuLink2 link="/account" title={t('user.profile')} icon={user} />
            <MenuLink2 link="/account/orders" title={t('user.orders')} icon={order} />
            <MenuLink2 link="/account/payments" title={t('user.payments')} icon={payments} />
            <MenuLink2 link="/account/address" title={t('user.address')} icon={address} />
            <MenuLink2 link="/account/parameters" title={t('user.parameters')} icon={parameters} />
          </div>
          <button className="btn2" onClick={handleSignOut}>
            {t('user.signout')}
          </button>
        </div>
      )}
    </div>
  );
};

export default AccountB;
