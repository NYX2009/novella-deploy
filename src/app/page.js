import backgroundImage from '../../public/home/book-bg.png';
import Image from 'next/image';
import Link from 'next/link';
import icon from '../../public/home/icon.png';



export default function Home() {
  return (
    <div className='flex flex-col relative justify-center items-center h-screen'>
      <Image
      className='blur-[2px]'
        src={backgroundImage}
        alt='book-bg'
        fill
        sizes='100vw'
        style={{objectFit:'cover'}}
      />

      <div className='flex flex-col justify-center items-center bg-purple-200 rounded-md p-2 lg:w-2/5 h-1/4 z-10'>
        <div className='flex pb-4 mb-4 text-5xl text-purple-800 font-bold '>
            <Image
            className='w-16 h-14 '
            src={icon}/>
            <p>NOVELLA</p>
        </div>
        <div>
            <Link
                className='bg-purple-700 hover:bg-blue-500 text-white rounded-md p-2'
                href='/store'
            >Take me to the Store</Link>
        </div>
      </div>
    </div>

  )
}
