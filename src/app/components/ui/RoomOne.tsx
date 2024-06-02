import { AirVent, Bath, Bed, CarFront, Tv, Utensils, Waves, Wifi } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

export default function RoomOne() {
  return (
    <div className='p-3 border rounded-lg gap-6 columns-1 lg:columns-2'>
        <div>
            <Image
             width={1000}
             height={1000}
             alt='roomone'
             src={`/room/roomone.jpg`}
             className='w-full object-cover'
            /> 
        </div>
        <div className='overflow-hidden'>
            <h1 className='font-bold text-lg'>Villa With PivatePool</h1>
            <div className='flex gap-3 items-center'>
                <h1 className='font-bold text-lg'>$300+</h1>
                {/* <p className='text-xs text-gray-400 '>PER DAY</p> */}
            </div>
            <div className='border-b mt-3 pb-3 space-y-3 columns-1 sm:columns-2'>
                <div>
                    <p className='text-lf text-gray-600 font-medium'>Guest</p>
                    <p className='text-sm'>15 guests</p>
                </div>
                <div className='overflow-hidden'>
                    <div className='flex items-center gap-3'>
                        <Bed />
                        <p className='text-sm'>3 Bedroom</p>
                    </div>
                    <div className='flex items-center gap-3'>
                        <Bath />
                        <p className='text-sm'>3 Bathrooms </p>
                    </div>
                </div>
            </div>
            <div className='flex flex-col border-b mt-3 pb-3'>
                <p className='text-lg text-gray-600 font-medium'>What this place offers</p>
                <div className='mt-6 columns-1 sm:columns-2 space-y-3'>
                    <div className='flex gap-6 items-center'>
                        <Utensils />
                        <p>Kitchen</p>
                    </div>
                    <div className='flex gap-6 items-center'>
                        <Wifi />
                        <p>Wifi</p>
                    </div>
                    <div className='flex gap-6 items-center'>
                        <CarFront />
                        <p>Free Parking</p>
                    </div>
                    <div className='flex gap-6 items-center'>
                        <Waves />
                        <p>Private Pool</p>
                    </div>
                    <div className='flex gap-6 items-center'>
                        <Tv />
                        <p>Tv</p>
                    </div>
                    <div className='flex gap-6 items-center'>
                        <AirVent />
                        <p>Air conditioning</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
