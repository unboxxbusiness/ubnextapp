import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const Section5 = () => {
  return (
    <section className="py-10 bg-blue-900 sm:py-16 lg:py-24">
    <div className="max-w-5xl px-4 mx-auto sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 md:gap-x-16 lg:gap-x-24 gap-y-10">
            <div>
                <Image className="object-cover w-16 h-16 rounded-full" src="/images/client2.png" alt="" width={50} height={50}/>
                <blockquote>
                    <p className="mt-6 text-xl leading-relaxed text-white">The one-time fee switch was well worth it. Not only did I save money in the long run, but I also gained peace of mind with the rock-solid security features. My real estate website has never been more secure</p>
                </blockquote>
                <p className="mt-6 text-base font-semibold text-yellow-100 underline">Lets Connect</p>
                <p className="mt-1 text-base text-white">Be an Early Insider and Reap the Rewards of Exclusive Launch Pricing wink wink 💰</p>
            </div>

            <div>
                <div className="overflow-hidden bg-white">
                    <div className="p-8 lg:px-12 lg:py-10">
                        <h3 className="text-2xl font-semibold text-black"> Lock in Pre-Launch Prices Now and Score Unbeatable Savings</h3>
                        

                        <Link href="/pricing" title="" className="flex items-center justify-center w-full px-4 py-4 mt-8 text-base font-semibold text-white transition-all duration-200 bg-blue-600 border-2 border-transparent rounded-md hover:bg-blue-700 focus:bg-blue-700" role="button">
                            Get Started Now!
                        </Link>

                        <Link href="https://wa.me/message/WYGR5WKQWVJMA1" title="" className="flex items-center justify-center w-full px-4 py-4 mt-4 text-base font-semibold text-black transition-all duration-200 bg-transparent border-2 border-black rounded-md hover:bg-black focus:bg-black hover:text-white focus:text-white" role="button">
                            Schedule a call
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>

  )
}

export default Section5