import Details from '@/components/Booster/Details'
import Payment from '@/components/Booster/Payment'
import Steps from '@/components/Booster/Steps'
import React from 'react'

const booster = () => {
  return (
<>
    <section className="py-10 bg-gray-100 sm:py-16 lg:py-24">
    <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div className="text-center">
            <h2 className="text-3xl font-bold leading-tight text-black sm:text-3xl lg:text-4xl">Add an Expert Video Editor to Your Team in Just a Few Clicks and You Will Never Have to Edit Again.</h2>
            <p className="mt-4 text-lg font-medium">The Best Video Editing Service For YouTubers!</p>
            
      
        </div>
    </div>
</section>
<Steps />
<Details />
<Payment />
</>


  )
}

export default booster