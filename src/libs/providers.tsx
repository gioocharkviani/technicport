
import { NextIntlClientProvider, useMessages } from "next-intl";

import {useTimeZone} from 'next-intl';
import { useNow } from 'next-intl';
import React from "react";


const Providers = ({children}: {children: React.ReactNode}) => {
    const messages = useMessages();
    const timeZone = useTimeZone();
    const now = useNow();

  return (
    <NextIntlClientProvider messages={messages} timeZone={timeZone} now={now}>
        {children}
    </NextIntlClientProvider>
  )
}

export default Providers