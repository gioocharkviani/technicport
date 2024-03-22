'use client'

import Link from 'next/link';
import React from 'react';
import { useLocale } from 'next-intl'; 

interface LinkWrapperProps {
    children: React.ReactNode;
    link: string;
}

const LinkWrapper = ({ children, link }:LinkWrapperProps) => {
    const locale = useLocale(); 
    const href = `/${locale}${link}`;

    return (
        <Link href={href}>
            {children}
        </Link>
    );
}

export default LinkWrapper;
