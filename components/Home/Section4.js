import React from 'react'
import Image from 'next/image'
const Section4 = () => {
  return (
    <section className="py-10 bg-gray-100 sm:py-16 lg:py-24">
    <div className="max-w-5xl px-4 mx-auto sm:px-6 lg:px-8">
        <div className="mx-auto text-left md:max-w-lg lg:max-w-2xl md:text-center">
            <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl lg:leading-tight">
            Is social media suitable for 
                <span className="relative inline-block">
                    <span className="absolute inline-block w-full h-2 bg-yellow-300 bottom-1.5"></span>
                    <span className="relative"> my business? </span>
                </span>
            </h2>
        </div>

        <div className="grid grid-cols-1 mt-8 md:mt-20 gap-y-6 md:grid-cols-2 gap-x-10">
            <div>
                <Image className="w-full mx-auto sm:max-w-xs" src="/images/social1.jpg" alt="" width={620} height={720}/>
            </div>

            <div>
                <h3 className="text-lg font-semibold text-gray-900">Yes. Absolutely.</h3>
                <p className="mt-4 text-lg text-gray-700">Social media presence is beneficial for businesses of all types. When potential customers want to learn about your company, they often turn to social media first. By being active on social media, you increase your chances of attracting new customers and staying ahead of competitors.</p>
                <p className="mt-4 text-lg text-gray-700">Whether your business is B2B or B2C, we can customize our social media strategies to suit your needs. From promoting industry news on platforms like LinkedIn to engaging with followers on Twitter, we ensure your business gets the right exposure.</p>

                <p className="mt-4 text-lg text-gray-700">No matter if you run a construction company, work as an electrician, or own a beauty salon, we can manage your social media accounts. Our comprehensive plans cover popular platforms like Facebook, Twitter, LinkedIn, Instagram, Google My Business, and Pinterest. Rest assured, our affordable social media management packages are designed to meet your business goals.</p>
            </div>
        </div>
    </div>
</section>

  )
}

export default Section4