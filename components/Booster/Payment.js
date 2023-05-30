import React from 'react'
import Link from 'next/link'


const Payment = () => {
  return (
    <section className="py-10 bg-white sm:py-16 lg:py-24">
    <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">Pricing & Plans</h2>
            <p className="max-w-xl mx-auto mt-4 text-xl leading-relaxed text-gray-600">Dynamic Content on Facebook, Instagram, LinkedIn, Twitter, Google, Pinterest. Flexible Plans, Easy Customization & Cancellation</p>
        </div>

        <div className="grid max-w-md grid-cols-1 gap-6 mx-auto mt-8 text-center lg:max-w-full lg:mt-16 lg:grid-cols-3">
            <div className="overflow-hidden bg-white border-2 border-gray-100 rounded-md">
                <div className="p-8 xl:px-12">
                    <h3 className="text-base font-semibold text-purple-600">Basic</h3>
                    <p className="text-5xl font-bold text-black mt-7">$50</p>
                    <p className="mt-3 text-base text-gray-600">Per Month</p>

                    <ul className="inline-flex flex-col items-start space-y-5 text-left mt-9">
                        <li className="inline-flex items-center space-x-2">
                            <svg className="flex-shrink-0 w-5 h-5 text-indigo-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                            </svg>
                            <span className="text-base font-medium text-gray-900"> 1 bespoke post per week to 1 platform </span>
                        </li>

                        <li className="inline-flex items-center space-x-2">
                            <svg className="flex-shrink-0 w-5 h-5 text-indigo-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                            </svg>
                            <span className="text-base font-medium text-gray-900"> Unique content specific to your business and interesting to your followers </span>
                        </li>

                        <li className="inline-flex items-center space-x-2">
                            <svg className="h-5 text-indigo-500 flex-shrink-0w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                            </svg>
                            <span className="text-base font-medium text-gray-900"> A content strategy designed to boost social engagement </span>
                        </li>

                        <li className="inline-flex items-center space-x-2">
                            <svg className="h-5 text-indigo-500 flex-shrink-0w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                            </svg>
                            <span className="text-base font-medium text-gray-900"> Branded graphics unique to your business </span>
                        </li>


                        <li className="inline-flex items-center space-x-2">
                        <svg className="h-5 text-indigo-500 flex-shrink-0w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                            <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                        </svg>
                        <span className="text-base font-medium text-gray-900"> Dedicated account manager  </span>
                    </li>


                    <li className="inline-flex items-center space-x-2">
                            <svg className="h-5 text-indigo-500 flex-shrink-0w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                            </svg>
                            <span className="text-base font-medium text-gray-900"> Upgrade any time, additional services available at checkout</span>
                        </li>

                        <li className="inline-flex items-center space-x-2">
                            <svg className="flex-shrink-0 w-5 h-5 text-indigo-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                            </svg>
                            <span className="pb-0.5 text-base font-medium text-gray-900 border-b border-black border-dashed"> 1 tree planted for every purchase 🌳  </span>
                        </li>
                    </ul>

                    <Link href="https://wa.me/message/WYGR5WKQWVJMA1" title="" className="inline-flex items-center justify-center px-10 py-4 mt-10 text-base font-semibold text-white transition-all duration-200 bg-blue-600 rounded-md hover:bg-blue-700 focus:bg-blue-700" role="button"> Get Started </Link>
                    <p className="mt-4 text-sm text-gray-500">No Contract (cancel anytime)</p>
                </div>
            </div>

            <div className="overflow-hidden bg-white border-2 border-gray-100 rounded-md shadow-lg">
                <div className="p-8 xl:px-12">
                    <h3 className="text-base font-semibold text-purple-600">Premium</h3>
                    <p className="text-5xl font-bold text-black mt-7">$99</p>
                    <p className="mt-3 text-base text-gray-600">Per Month</p>

                    <ul className="inline-flex flex-col items-start space-y-5 text-left mt-9">
                        <li className="inline-flex items-center space-x-2">
                            <svg className="flex-shrink-0 w-5 h-5 text-indigo-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                            </svg>
                            <span className="text-base font-medium text-gray-900"> 3 bespoke posts per week to 2 platforms   </span>
                        </li>

                        <li className="inline-flex items-center space-x-2">
                            <svg className="flex-shrink-0 w-5 h-5 text-indigo-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                            </svg>
                            <span className="text-base font-medium text-gray-900">Unique content specific to your business and interesting to your followers </span>
                        </li>

                        <li className="inline-flex items-center space-x-2">
                            <svg className="flex-shrink-0 w-5 h-5 text-indigo-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                            </svg>
                            <span className="text-base font-medium text-gray-900"> A content strategy designed to boost social engagement  </span>
                        </li>

                        <li className="inline-flex items-center space-x-2">
                            <svg className="flex-shrink-0 w-5 h-5 text-indigo-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                            </svg>
                            <span className="text-base font-medium text-gray-900"> Branded graphics unique to your business</span>
                        </li>


                        <li className="inline-flex items-center space-x-2">
                            <svg className="flex-shrink-0 w-5 h-5 text-indigo-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                            </svg>
                            <span className="text-base font-medium text-gray-900">Dedicated account manager</span>
                        </li>


                        
                        <li className="inline-flex items-center space-x-2">
                            <svg className="flex-shrink-0 w-5 h-5 text-indigo-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                            </svg>
                            <span className="text-base font-medium text-gray-900"> Real time social media analytics</span>
                        </li>

                        
                        <li className="inline-flex items-center space-x-2">
                            <svg className="flex-shrink-0 w-5 h-5 text-indigo-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                            </svg>
                            <span className="text-base font-medium text-gray-900"> Upgrade any time, additional services available at checkout </span>
                        </li>
                        <li className="inline-flex items-center space-x-2">
                        <svg className="flex-shrink-0 w-5 h-5 text-indigo-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                            <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                        </svg>
                        <span className="text-base font-medium text-gray-900"> 1 tree planted for every purchase 🌳 </span>
                    </li>


                        <li className="inline-flex items-center space-x-2">
                            <svg className="flex-shrink-0 w-5 h-5 text-indigo-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                            </svg>
                            <span className="pb-0.5 text-base font-medium text-gray-900 border-b border-black border-dashed"> Premium Support </span>
                        </li>
                    </ul>

                    <Link href="https://wa.me/message/WYGR5WKQWVJMA1" title="" className="inline-flex items-center justify-center px-10 py-4 mt-10 text-base font-semibold text-white transition-all duration-200 rounded-md bg-gradient-to-r from-fuchsia-600 to-blue-600 hover:opacity-80 focus:opacity-80" role="button"> Get Started </Link>
                    <p className="mt-4 text-sm text-gray-500">No Contract (cancel anytime) </p>
                </div>
            </div>

            <div className="overflow-hidden bg-white border-2 border-gray-100 rounded-md">
                <div className="p-8 xl:px-12">
                    <h3 className="text-base font-semibold text-purple-600">Ultimate</h3>
                    <p className="text-5xl font-bold text-black mt-7">$199</p>
                    <p className="mt-3 text-base text-gray-600">Per Month</p>

                    <ul className="inline-flex flex-col items-start space-y-5 text-left mt-9">
                        <li className="inline-flex items-center space-x-2">
                            <svg className="flex-shrink-0 w-5 h-5 text-indigo-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                            </svg>
                            <span className="text-base font-medium text-gray-900"> 4 bespoke posts per week to 3 platforms   </span>
                        </li>

                        <li className="inline-flex items-center space-x-2">
                            <svg className="flex-shrink-0 w-5 h-5 text-indigo-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                            </svg>
                            <span className="text-base font-medium text-gray-900"> Unique content specific to your business and interesting to your followers </span>
                        </li>

                        <li className="inline-flex items-center space-x-2">
                            <svg className="flex-shrink-0 w-5 h-5 text-indigo-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                            </svg>
                            <span className="text-base font-medium text-gray-900"> A content strategy designed to boost social engagement and account growth </span>
                        </li>

                        <li className="inline-flex items-center space-x-2">
                            <svg className="flex-shrink-0 w-5 h-5 text-indigo-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                            </svg>
                            <span className="text-base font-medium text-gray-900">Branded graphics unique to your business  </span>
                        </li>

                        <li className="inline-flex items-center space-x-2">
                        <svg className="flex-shrink-0 w-5 h-5 text-indigo-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                            <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                        </svg>
                        <span className="text-base font-medium text-gray-900"> Dedicated account manager   </span>
                    </li>


                    <li className="inline-flex items-center space-x-2">
                            <svg className="flex-shrink-0 w-5 h-5 text-indigo-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                            </svg>
                            <span className="text-base font-medium text-gray-900"> Downgrade at any time, additional services available at checkout </span>
                        </li>

                        <li className="inline-flex items-center space-x-2">
                            <svg className="flex-shrink-0 w-5 h-5 text-indigo-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                            </svg>
                            <span className="text-base font-medium text-gray-900"> Real time social media analytics </span>
                        </li>

                        <li className="inline-flex items-center space-x-2">
                            <svg className="flex-shrink-0 w-5 h-5 text-indigo-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                            </svg>
                            <span className="text-base font-medium text-gray-900"> 1 strategy call per month included  </span>
                        </li>


                        <li className="inline-flex items-center space-x-2">
                            <svg className="flex-shrink-0 w-5 h-5 text-indigo-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                            </svg>
                            <span className="pb-0.5 text-base font-medium text-gray-900 border-b border-black border-dashed"> Fast customer support </span>
                        </li>
                        <li className="inline-flex items-center space-x-2">
                            <svg className="flex-shrink-0 w-5 h-5 text-indigo-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                            </svg>
                            <span className="pb-0.5 text-base font-medium text-gray-900 border-b border-black border-dashed"> 1 tree planted for every purchase 🌳 </span>
                        </li>
                    </ul>

                    <Link href="https://wa.me/message/WYGR5WKQWVJMA1" title="" className="inline-flex items-center justify-center px-10 py-4 mt-10 text-base font-semibold text-white transition-all duration-200 bg-blue-600 rounded-md hover:bg-blue-700 focus:bg-blue-700" role="button"> Get Started </Link>
                    <p className="mt-4 text-sm text-gray-500">No Contract (cancel anytime)</p>
                </div>
            </div>
        </div>
    </div>
</section>

  )
}

export default Payment