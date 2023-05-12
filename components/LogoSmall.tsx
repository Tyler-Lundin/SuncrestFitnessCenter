'use client';
import LogoSVG from '../public/Logo.svg';
import Link from 'next/link';
import { Roboto_Serif } from 'next/font/google';

const RS = Roboto_Serif({ subsets: ['latin'] });

export default function LogoSmall() {
  return (
    <Link href='/' className='flex gap-2 h-8'>
      <LogoSVG className={'h-8 w-fit justify-self-end self-center'} />
      <h6 className={`self-center md:hidden text-lg h-min ${RS.className}`}>SFC</h6>
      <h6 className={`self-center hidden md:block text-lg h-min ${RS.className}`}>Suncrest Fitness Center</h6>
    </Link>
  );
}
