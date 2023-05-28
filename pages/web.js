import Pay from '@/components/Web/Pay'
import Services from '@/components/Web/Services'
import React from 'react'

const web = () => {
  return (
    <>
    
    <section className="py-10 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 sm:py-16 lg:py-24">
    <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div className="text-center">
            <h2 className="text-3xl font-bold leading-tight text-white sm:text-3xl lg:text-4xl">Your All-in-One Blog Website Solution</h2>
            <p className="mt-4 text-xl text-white font-medium">Simplify your life by focusing on your business, not your website</p>
            
      
        </div>
    </div>
</section>
<Services />
<Pay />
    </>
  )
}

export default web