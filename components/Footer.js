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

                <ul className="flex items-center space-x-3 mt-9">
                    <li>
                        <Link href="#" title="" className="flex items-center justify-center text-white transition-all duration-200 bg-gray-800  w-7 h-7 hover:bg-blue-600 focus:bg-blue-600">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M15.4024 21V14.0344H17.7347L18.0838 11.3265H15.4024V9.59765C15.4024 8.81364 15.62 8.27934 16.7443 8.27934L18.1783 8.27867V5.85676C17.9302 5.82382 17.0791 5.75006 16.0888 5.75006C14.0213 5.75006 12.606 7.01198 12.606 9.32952V11.3265H10.2677V14.0344H12.606V21H4C3.44772 21 3 20.5523 3 20V4C3 3.44772 3.44772 3 4 3H20C20.5523 3 21 3.44772 21 4V20C21 20.5523 20.5523 21 20 21H15.4024Z" fill="rgba(97,255,0,1)"></path></svg>


                        </Link>
                    </li>

                   

                    <li>
                    <Link href="#" title="" className="flex items-center justify-center text-white transition-all duration-200 bg-gray-800  w-7 h-7 hover:bg-blue-600 focus:bg-blue-600">
                      
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M18.3362 18.339H15.6707V14.1622C15.6707 13.1662 15.6505 11.8845 14.2817 11.8845C12.892 11.8845 12.6797 12.9683 12.6797 14.0887V18.339H10.0142V9.75H12.5747V10.9207H12.6092C12.967 10.2457 13.837 9.53325 15.1367 9.53325C17.8375 9.53325 18.337 11.3108 18.337 13.6245V18.339H18.3362ZM7.00373 8.57475C6.14573 8.57475 5.45648 7.88025 5.45648 7.026C5.45648 6.1725 6.14648 5.47875 7.00373 5.47875C7.85873 5.47875 8.55173 6.1725 8.55173 7.026C8.55173 7.88025 7.85798 8.57475 7.00373 8.57475ZM8.34023 18.339H5.66723V9.75H8.34023V18.339ZM19.6697 3H4.32923C3.59498 3 3.00098 3.5805 3.00098 4.29675V19.7033C3.00098 20.4202 3.59498 21 4.32923 21H19.6675C20.401 21 21.001 20.4202 21.001 19.7033V4.29675C21.001 3.5805 20.401 3 19.6675 3H19.6697Z" fill="rgba(53,255,0,1)"></path></svg>
                    </Link>
                </li>


                </ul>
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
                        <Link href="/contact" title="" className="flex text-base text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600"> Contact Us </Link>
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

                <form name="contact" method="POST" data-netlify="true" data-netlify-honeypot="bot-field" action="https://youtube.com/@unboxxbusiness">
  <input type="hidden" name="form-name" value="contact" />
  
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