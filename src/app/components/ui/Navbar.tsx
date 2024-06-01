import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function Navbar() {
  return (
    <div className='z-10 absolute text-white font-bold text-lg flex items-center w-full justify-between p-3 px-24 shadow-white'>
        <Link href={`/`}>Home</Link>
        <Link href={`/`}>Room</Link>
        <div className='flex gap-3 items-center'>
            <Image
             src="/logo.jpg" // Replace with your image path
             alt="Logo Image" // Provide an alt text description
             objectFit="cover" // Adjust how the image fits (cover, contain, etc.)
             width={1000}
             height={1500}
             priority // Prioritize loading for critical backgrounds
             objectPosition="center"
             className='w-12 h-12 rounded-full'
            />
            <h1>Bali Villa Kompot</h1>
        </div>
        <Link href={`/`}>Photo</Link>
        <Link href={`/`}>Contact</Link>
    </div>
  )
}
