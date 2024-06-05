import React, { ReactNode } from 'react';

const HomeLayout = ({ children }: { children: ReactNode }) => {
    return (
        <div className='w-full'>
            <main className="w-full">
                {children}
            </main>
        </div>
    )
}

export default HomeLayout;