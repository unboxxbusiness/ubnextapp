import React from 'react'
import Link from 'next/link'
const Section2 = () => {
  return (
    <section className="py-10 bg-blue-900 sm:py-16 lg:py-24">
    <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">Getting Started is easy!</h2>

        </div>

        <div className="grid grid-cols-1 gap-6 mx-auto mt-8 text-center md:max-w-5xl sm:grid-cols-3 md:gap-8 sm:mt-16">
            <div className="relative overflow-hidden bg-white border-2 border-gray-100 rounded-md">
                <div className="absolute hidden top-3 right-3">
                    <svg className="w-6 h-6 text-orange-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                        <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                    </svg>
                </div>

                <div className="px-4 py-5 lg:p-8">
                    <p className="text-lg font-medium text-gray-500">Step 1</p>
                    
                    <ul className="flex flex-col mt-8 space-y-1">
                        <li className="text-base font-medium text-gray-900 lg:text-xl">Simply tap the button below to commence. We present a range of choices for you; just pick your desired combination and you will be swiftly on your way to completion!</li>
                        
                    </ul>
                </div>
            </div>

            <div className="relative overflow-hidden bg-white border-2 border-gray-100 rounded-md">
                <div className="absolute hidden top-3 right-3">
                    <svg className="w-6 h-6 text-orange-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                        <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                    </svg>
                </div>

                <div className="px-4 py-5 lg:p-8">
                    <p className="text-lg font-medium text-gray-500">Step 2</p>
                    
                    <ul className="flex flex-col mt-8 space-y-1">
                        <li className="text-base font-medium text-gray-900 lg:text-xl">Complete our onboarding form to share your business and social media goals. Grant access to your social media pages via our dashboard. No passwords needed!</li>
                        
                    </ul>
                </div>
            </div>

            <div className="relative overflow-hidden bg-white border-2 border-gray-900 rounded-md shadow">
                <div className="absolute top-3 right-3">
                    <svg className="w-6 h-6 text-orange-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                        <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                    </svg>
                </div>

                <div className="px-4 py-5 lg:p-8">
                    <p className="text-lg font-medium text-gray-500">Step 3</p>
                    
                    <ul className="flex flex-col mt-8 space-y-1">
                        <li className="text-base font-medium text-gray-900 lg:text-xl">Within 2 working days of social media account access, we will start daily posting. Relax, let go of social media stress, and focus on business growth.</li>

                    </ul>
                </div>
            </div>
        </div>

        <div className="mt-8 text-center md:mt-16">
            <Link href="https://wa.me/message/WYGR5WKQWVJMA1" target="_blank" rel="noopener noreferrer" title="" className="inline-flex items-center justify-center px-10 py-4 font-semibold text-white transition-all duration-200 rounded-md bg-gradient-to-r from-fuchsia-600 to-blue-600 focus:opacity-80 hover:opacity-80" role="button"> Get Started </Link>
            <p className="mt-4 text-sm text-white">No Credit Card Required</p>
        </div>
    </div>
</section>

  )
}

export default Section2