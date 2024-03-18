'use client';
 
import Error from 'next/error';
 
export default function NotFound(
  params: {loacle: string}
) {
  return (
    <html lang={params.loacle}>
      <body>
        <Error statusCode={404} />
      </body>
    </html>
  );
}