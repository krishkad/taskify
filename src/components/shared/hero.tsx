import React from 'react'

const Hero = () => {
  return (
    <div className='w-full'>
        <div className="max-w-wrapper h-[calc(100svh-64px)] sm:h-[calc(100svh-80px)]">
            <div className="text-center">
                <h1 className="text-4xl font-extrabold pt-16 pb-3">Organize your life with Taskify</h1>
                <p className="text-sm font-semibold text-muted-foreground">Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, <br className='hidden sm:block' />quis laborum? Enim maiores amet earum!</p>
            </div>
        </div>
    </div>
  )
}

export default Hero