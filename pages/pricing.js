import Plans from '@/components/Home/Plans'
import React from 'react'

const pricing = () => {
  return (
    <>
    <section className="py-10 bg-gray-900 sm:py-16 lg:py-24">
    <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div className="text-center">
            <h2 className="text-3xl font-bold leading-tight text-white sm:text-3xl lg:text-4xl">Discover our cost-effective social media management plans today!</h2>
            <p className="mt-4 text-lg text-white font-medium">Expand your online presence across top platforms like Facebook, Instagram, LinkedIn, Twitter, Google My Business, and Pinterest with our comprehensive social media content offerings. Our flexible monthly plans allow you to cancel or modify your subscription at any time.
            <br />Personalize your plan during checkout! When you sign up, you'll have the opportunity to enhance your package with extras such as additional posts, expanded network coverage, Instagram Stories, Reels, and blog content.
            </p>
            
      
        </div>
    </div>
</section>


    <Plans />
    </>
  )
}

export default pricing