import React from 'react'
import Image from 'next/image'
const Section1 = () => {
  return (
    <section className="py-10 bg-white sm:py-16 lg:py-24">
    <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="grid items-center grid-cols-1 lg:grid-cols-2 gap-x-12 xl:gap-x-24 gap-y-12">
            <div className="relative lg:mb-12">
                <Image className="absolute -right-0 -bottom-8 xl:-bottom-12 xl:-right-4" src="/images/dots.svg" alt="" width={300} height={300}/>
                <div className="pl-12 pr-6">
                    <Image className="relative" src="/images/social2.jpg" alt="" width={1080} height={1080}/>
                </div>
                <div className="absolute left-0 pr-12 bottom-8 xl:bottom-20">
                    <div className="max-w-xs bg-blue-600 rounded-lg sm:max-w-md xl:max-w-md">
                        <div className="px-3 py-4 sm:px-5 sm:py-8">
                            <div className="flex items-start">
                                <p className="text-3xl sm:text-4xl">👋</p>
                                <blockquote className="ml-5">
                                    <p className="text-sm font-medium text-white sm:text-lg">“Supercharge Your Leads Generation: Get 50% More Organic Leads!”</p>
                                </blockquote>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="2xl:pl-16">
                <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl lg:leading-tight">Why do I need social media?</h2>
                <p className="text-xl leading-relaxed text-gray-900 mt-9">Social media is crucial for small business success, but many owners struggle with consistency and content ideas. This can lead to negative feelings, but its possible to change that. Lets explore how social media benefits businesses and boosts growth.</p>
                <p className="mt-6 text-xl leading-relaxed text-gray-900">Increase organic leads by 50%!</p>
                <ul className='list-disc ml-4 text-xl'>
                <li>
                It enhances the visibility of the brand
                </li>
                <li>
                It establishes a connection between you and your customers.
                </li>
                <li>
                It validates your business and grants it authoritative credibility.
                </li>
                <li>
                It enables you to stay competitive in the market.
                </li>
                <li>
                Over time, it will contribute to driving sales.
                </li>
                </ul>
                
            </div>
        </div>
    </div>
</section>

  )
}

export default Section1