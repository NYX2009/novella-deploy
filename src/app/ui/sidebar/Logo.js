import icon from '../../../../public/home/icon.png';
import Image from 'next/image';

const Logo =() =>{

    return(
        <div className='flex flex-row items-center text-slate-50 font-bold gap-2 leading:none '>
            <Image className='w-16 h-14 ' src={ icon }/>
            <p className='text-[28px]  '>NOVELLA</p>
        </div>
    )
}

export default Logo;