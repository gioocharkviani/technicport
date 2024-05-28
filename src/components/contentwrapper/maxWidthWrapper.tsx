
interface pageProps {
    children: React.ReactNode;
  }

const MaxWidthWrapper = ({children} : pageProps) => {
  return (
    <div className="max-w-[1500px] w-full px-[10px] md:px-[30px]">
        {children}
    </div>
  )
}

export default MaxWidthWrapper