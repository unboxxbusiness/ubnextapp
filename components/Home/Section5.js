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
                    <p className="mt-6 text-xl leading-relaxed text-white">Unlock the power of your social media success! Schedule a call today and let's propel your business to new heights together.</p>
                </blockquote>
                <p className="mt-6 text-base font-semibold text-yellow-100 underline">Let's Connect</p>
                <p className="mt-1 text-base text-white">Don't miss out on this opportunity! We're eagerly waiting to connect with you and help you achieve social media greatness. Schedule your call now!</p>
            </div>

            <div>
                <div className="overflow-hidden bg-white">
                    <div className="p-8 lg:px-12 lg:py-10">
                        <h3 className="text-2xl font-semibold text-black">Let's connect! Can we schedule a call to discuss your social media needs?</h3>
                        

                        <Link href="https://wa.me/message/WYGR5WKQWVJMA1" title="" className="flex items-center justify-center w-full px-4 py-4 mt-8 text-base font-semibold text-white transition-all duration-200 bg-blue-600 border-2 border-transparent rounded-md hover:bg-blue-700 focus:bg-blue-700" role="button">
                            Get Started
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