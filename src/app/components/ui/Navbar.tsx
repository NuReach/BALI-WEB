import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { Menu } from 'lucide-react'

export default function Navbar() {
  return (
    <div className='z-10 absolute text-white font-bold text-sm lg:text-lg flex items-center w-full justify-between py-3 px-3 md:px-9 shadow-white'>
        <div className='flex gap-3 items-center'>
            <Image
             src="/logo.jpg" // Replace with your image path
             alt="Logo Image" // Provide an alt text description
             width={1000}
             height={1500}
             priority 
             className='w-12 h-12 rounded-full'
            />
            <Link href={`/`}>Bali Villa Kompot</Link>
        </div>
        <div className=' gap-3 w-[420px] justify-between hidden md:flex'>
            <Link href={`/`}>Home</Link>
            <Link href={`/`}>Room</Link>
            <Link href={`/`}>Photo</Link>
            <Link href={`/`}>Contact</Link>
        </div>
        <div className='md:hidden'>
            <Menu />
        </div>
    </div>
  )
}
