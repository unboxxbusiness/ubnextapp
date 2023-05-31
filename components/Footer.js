import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const Footer = () => {
  return (
    <section className="py-10 bg-gray-50 sm:pt-16 lg:pt-24">
    <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div className="grid grid-cols-2 md:col-span-3 lg:grid-cols-6 gap-y-16 gap-x-12">
            <div className="col-span-2 md:col-span-3 lg:col-span-2 lg:pr-8">
                <Image className="w-auto h-9" src="/logo.png" alt="" width={50} height={50}/>

                <p className="text-base leading-relaxed text-gray-600 mt-7">Real estate web design experts. Seamlessly switch to JAMstack. Boost online presence with social media management. Trust us to bring your vision to life.</p>

            </div>

            <div>
                <p className="text-sm font-semibold tracking-widest text-gray-400 uppercase">Company</p>

                <ul className="mt-6 space-y-4">
                    <li>
                        <Link href="/about" title="" className="flex text-base text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600"> About </Link>
                    </li>

                    <li>
                        <Link href="/pricing" title="" className="flex text-base text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600"> Plans</Link>
                    </li>

                    <li>
                        <Link href="/booster" title="" className="flex text-base text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600"> Booster </Link>
                    </li>

                    <li>
                        <Link href="/newsletter" title="" className="flex text-base text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600"> newsletter Us </Link>
                    </li>
                </ul>
            </div>

            <div>
                <p className="text-sm font-semibold tracking-widest text-gray-400 uppercase">Policies</p>

                <ul className="mt-6 space-y-4">
                    <li>
                        <Link href="/Terms" title="" className="flex text-base text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600"> Terms of Use </Link>
                    </li>

                    <li>
                        <Link href="/privacy" title="" className="flex text-base text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600"> Privacy Policy</Link>
                    </li>

                    <li>
                        <Link href="/disclaimer" title="" className="flex text-base text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600">Disclaimer Policy</Link>
                    </li>

                    <li>
                        <Link href="/refund" title="" className="flex text-base text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600"> Refund Policy </Link>
                    </li>
                </ul>
            </div>

            <div className="col-span-2 md:col-span-1 lg:col-span-2 lg:pl-8">
                <p className="text-sm font-semibold tracking-widest text-gray-400 uppercase">Get the Latest Videos Newsletter Directly in your inbox</p>

                <form name="newsletter" method="POST" data-netlify="true" data-netlify-honeypot="bot-field" action="/success">
  <input type="hidden" name="form-name" value="newsletter" />
  
  <div className="hidden">
    <label>Dont fill this out if you are human: <input name="bot-field" /></label>
  </div>
  
  <div>
    <label htmlFor="email" className="sr-only">Email</label>
    <input type="email" name="email" id="email" placeholder="Enter your email" className="block w-full p-4 text-black placeholder-gray-500 transition-all duration-200 bg-white border border-gray-200 rounded-md focus:outline-none focus:border-blue-600 caret-blue-600" />
  </div>

  <button type="submit" className="inline-flex items-center justify-center px-6 py-4 mt-3 font-semibold text-white transition-all duration-200 bg-blue-600 rounded-md hover:bg-blue-700 focus:bg-blue-700">I Want This</button>
</form>
            </div>
        </div>

        <hr className="mt-16 mb-10 border-gray-200" />

        <p className="text-sm text-center text-gray-600">© Copyright 2023, All Rights Reserved by Unboxx Business</p>
    </div>
</section>

  )
}

export default Footer