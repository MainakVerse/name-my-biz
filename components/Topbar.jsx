import { MoveRight } from 'lucide-react'
import Link from 'next/link'
import React from 'react'
export const Topbar = () => {
    return (
        <div className='fixed top-0 left-0 w-full bg-cblack flex justify-between md:px-56 px-5 md:py-8 py-5'>
            <video
        autoPlay
        loop
        muted
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
      >
        <source src="/background.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
        </div>
    )
}
