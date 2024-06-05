import Link from 'next/link'
 
export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen container404 bg-gray-100">

    
    <h1 className="text-9xl font-extrabold text-gray-900 tracking-widest">404</h1>
    <div className="bg-color1 px-2 text-sm text-white rounded rotate-12 absolute">
      Page Not Found
    </div>

    <button className="mt-5">
      <Link href="/">
        <li className="relative inline-block text-sm font-medium text-color1 group active:text-color1 focus:outline-none focus:ring">
          <span className="absolute inset-0 transition-transform transform translate-x-0.5 translate-y-0.5 bg-color1 group-hover:translate-y-0 group-hover:translate-x-0"></span>
          <span className="relative block px-8 py-3 bg-gray-100 border border-current">
            Go Home
          </span>
        </li>
      </Link>
    </button>
  </div>
  )
}