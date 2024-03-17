import Link from 'next/link'

const stylesdss = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection:'column',
  minHeight:'100vh'
};

export default function NotFound() {
  return (
    <div className='notFound'>
      <h2>Not Found</h2>
      <p>Could not find requested resource</p>
      <Link href="/">Return Home</Link>
    </div>
  )
}