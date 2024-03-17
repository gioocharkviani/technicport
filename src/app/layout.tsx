
interface RootLayoutProps {
  children: React.ReactNode;
}
import "./globals.css";

export default function Layout({
  children,
}: RootLayoutProps ) {
  return (
    <html>
      <body>
      {children}
      </body>
    </html>
  );
}
