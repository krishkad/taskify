import Link from 'next/link'
import React from 'react'
import { Button } from '../ui/button'
import { RiFlowerFill } from "react-icons/ri";
import { AlignRight } from 'lucide-react';

const Navbar = () => {
    return (
        <div className='max-w-wrapper'>
            <div className="w-full h-16 sm:h-20 flex items-center justify-between">
                <div className="flex items-center gap-12">
                    <h1 className="text-xl font-bold flex gap-2 items-center justify-centers">
                        <RiFlowerFill className='text-orange-500' />
                        Taskify
                    </h1>
                    <div className="hidden sm:flex items-center justify-center gap-5">
                        <Link href={'/'} className='text-sm font-semibold'>
                            Overview
                        </Link>
                        <Link href={'/'} className='text-sm font-semibold'>
                            Specs
                        </Link>
                        <Link href={'/'} className='text-sm font-semibold'>
                            Features
                        </Link>
                    </div>
                </div>

                <div className="hidden sm:flex items-center jusitfy-center gap-5">
                    <Button size={'sm'} variant={'outline'} className="text-sm py-2 px-5 rounded-full border-primary hover:text-white hover:bg-orange-500 hover:border-orange-500 border-solid" >Free Trial</Button>
                    <Button size={'sm'} className="text-sm py-2 px-5 rounded-full">Buy Now</Button>
                </div>
                <div className="flex sm:hidden">
                    <AlignRight />
                </div>
            </div>
        </div>
    )
}

export default Navbar