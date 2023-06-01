import React from 'react'
import Link from 'next/link'


const Plans = () => {
  return (
    <section className="py-10 bg-white sm:py-16 lg:py-24">
    <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="max-w-xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-black lg:text-5xl sm:text-5xl">Pricing</h2>
            <p className="mt-4 text-lg leading-relaxed text-gray-600">Unbeatable Pre-Launch Prices: Save over 50% Off! All prices quoted are one-time payments in US dollars. Same-day express service available at double the rate.</p>
        </div>

        
        <div className="hidden mt-16 lg:block">
            <table className="w-full">
                <thead>
                    <tr>
                        <th className="py-8 pr-4"></th>

                        <th className="px-4 py-8 text-center">
                            <span className="text-base font-medium text-blue-600"> Bronze</span>
                            <p className="mt-6 text-6xl font-bold">$49</p>
                            <p className="mt-2 text-base font-normal text-gray-500">One Time</p>
                        </th>

                        <th className="px-4 py-8 text-center">
                            <span className="text-base font-medium text-blue-600"> Silver</span>
                            <p className="mt-6 text-6xl font-bold">$150</p>
                            <p className="mt-2 text-base font-normal text-gray-500">One Time</p>
                        </th>

                        <th className="px-4 py-8 text-center bg-gray-900 rounded-t-xl">
                            <span className="px-4 py-2 text-base font-medium text-white bg-blue-600 rounded-full"> Gold </span>
                            <p className="mt-6 text-6xl font-bold text-white">$350</p>
                            <p className="mt-2 text-base font-normal text-gray-200">One Time</p>
                        </th>

                        <th className="px-4 py-8 text-center">
                            <span className="text-base font-medium text-blue-600"> Ultimate</span>
                            <p className="mt-6 text-6xl font-bold">$500</p>
                            <p className="mt-2 text-base font-normal text-gray-500">One Time</p>
                        </th>
                    </tr>
                </thead>

                <tbody>
                    <tr>
                        <td className="py-4 pr-4 font-medium border-b border-gray-200">Website Pages</td>

                        <td className="px-4 py-4 text-center border-b border-gray-200">01</td>

                        <td className="px-4 py-4 text-center border-b border-gray-200">04</td>

                        <td className="px-4 py-4 text-center text-white bg-gray-900 border-b border-white/20">08</td>

                        <td className="px-4 py-4 text-center border-b border-gray-200">Multiple Pages</td>
                    </tr>

                    <tr>
                        <td className="py-4 pr-4 font-medium border-b border-gray-200">Free Web Hosting On Netlify </td>

                        <td className="px-4 py-4 text-center border-b border-gray-200">
                        <svg className="flex-shrink-0 w-5 h-5 text-indigo-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                            </svg>
                        </td>

                        <td className="px-4 py-4 text-center border-b border-gray-200">
                        <svg className="flex-shrink-0 w-5 h-5 text-indigo-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                            </svg>
                        </td>

                        <td className="px-4 py-4 text-center text-white bg-gray-900 border-b border-white/20">
                        <svg className="flex-shrink-0 w-5 h-5 text-indigo-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                            </svg>
                        </td>

                        <td className="px-4 py-4 text-center border-b border-gray-200">
                        <svg className="flex-shrink-0 w-5 h-5 text-indigo-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                            </svg>
                        </td>
                    </tr>

                    <tr>
                        <td className="py-4 pr-4 font-medium border-b border-gray-200">Free illustrations from Pixabay/Pexels</td>

                        <td className="px-4 py-4 text-center border-b border-gray-200">
                        <svg className="flex-shrink-0 w-5 h-5 text-indigo-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                            </svg>
                        </td>

                        <td className="px-4 py-4 text-center border-b border-gray-200">
                        <svg className="flex-shrink-0 w-5 h-5 text-indigo-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                            </svg>
                        </td>

                        <td className="px-4 py-4 text-center text-white bg-gray-900 border-b border-white/20">
                        <svg className="flex-shrink-0 w-5 h-5 text-indigo-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                            </svg>
                        </td>

                        <td className="px-4 py-4 text-center border-b border-gray-200">
                        <svg className="flex-shrink-0 w-5 h-5 text-indigo-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                            </svg>
                        </td>
                    </tr>

                    <tr>
                        <td className="py-4 pr-4 font-medium border-b border-gray-200">3-5 working days turn-around</td>

                        <td className="px-4 py-4 text-center border-b border-gray-200">
                        
                        <svg className="flex-shrink-0 w-5 h-5 text-indigo-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                            </svg>
                            
                            </td>

                        <td className="px-4 py-4 text-center border-b border-gray-200">
                        <svg className="flex-shrink-0 w-5 h-5 text-indigo-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                            </svg>
                        </td>

                        <td className="px-4 py-4 text-center text-white bg-gray-900 border-b border-white/20">
                        <svg className="flex-shrink-0 w-5 h-5 text-indigo-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                            </svg>
                        </td>

                        <td className="px-4 py-4 text-center border-b border-gray-200">
                        <svg className="flex-shrink-0 w-5 h-5 text-indigo-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                            </svg>
                        </td>
                    </tr>

                    <tr>
                        <td className="py-4 pr-4 font-medium border-b border-gray-200">No copywriting or graphic design</td>

                        <td className="px-4 py-4 text-center border-b border-gray-200">-</td>

                        <td className="px-4 py-4 text-center border-b border-gray-200">-</td>

                        <td className="px-4 py-4 text-center text-white bg-gray-900 border-b border-white/20">
                        <svg className="flex-shrink-0 w-5 h-5 text-indigo-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                            </svg>
                        </td>

                        <td className="px-4 py-4 text-center border-b border-gray-200">
                        <svg className="flex-shrink-0 w-5 h-5 text-indigo-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                            </svg>
                        </td>
                    </tr>

                    <tr>
                        <td className="py-4 pr-4 font-medium border-b border-gray-200">Real time analytics</td>

                        <td className="px-4 py-4 text-center border-b border-gray-200">-</td>

                        <td className="px-4 py-4 text-center border-b border-gray-200">-</td>

                        <td className="px-4 py-4 text-center text-white bg-gray-900 border-b border-white/20">
                        <svg className="flex-shrink-0 w-5 h-5 text-indigo-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                            </svg>
                        </td>

                        <td className="px-4 py-4 text-center border-b border-gray-200">
                        <svg className="flex-shrink-0 w-5 h-5 text-indigo-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                            </svg>
                        </td>
                    </tr>

                    <tr>
                        <td className="py-4 pr-4 font-medium border-b border-gray-200">Website Revision</td>

                        <td className="px-4 py-4 text-center border-b border-gray-200">01</td>

                        <td className="px-4 py-4 text-center border-b border-gray-200">02</td>

                        <td className="px-4 py-4 text-center text-white bg-gray-900 border-b border-white/20">
                        03
                        </td>

                        <td className="px-4 py-4 text-center border-b border-gray-200">
                        05
                        </td>
                    </tr>

                    <tr>
                        <td className="py-4 pr-4 font-medium border-b border-gray-200">Custom Domain</td>

                        <td className="px-4 py-4 text-center border-b border-gray-200">-</td>

                        <td className="px-4 py-4 text-center border-b border-gray-200">-</td>

                        <td className="px-4 py-4 text-center text-white bg-gray-900 border-b border-white/20">
                        <svg className="flex-shrink-0 w-5 h-5 text-indigo-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                            </svg>
                        </td>

                        <td className="px-4 py-4 text-center border-b border-gray-200">
                        <svg className="flex-shrink-0 w-5 h-5 text-indigo-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                            </svg>
                        </td>
                    </tr>

                    <tr>
                    <td className="py-4 pr-4 font-medium border-b border-gray-200">Backend Admin Panel</td>

                    <td className="px-4 py-4 text-center border-b border-gray-200">-</td>

                    <td className="px-4 py-4 text-center border-b border-gray-200">-</td>

                    <td className="px-4 py-4 text-center text-white bg-gray-900 border-b border-white/20">
                    -
                    </td>

                    <td className="px-4 py-4 text-center border-b border-gray-200">
                    <svg className="flex-shrink-0 w-5 h-5 text-indigo-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                            </svg>
                    </td>
                </tr>



                <tr>
                <td className="py-4 pr-4 font-medium border-b border-gray-200">Priority customer support</td>

                <td className="px-4 py-4 text-center border-b border-gray-200">-</td>

                <td className="px-4 py-4 text-center border-b border-gray-200">-</td>

                <td className="px-4 py-4 text-center text-white bg-gray-900 border-b border-white/20">
                Email Support
                </td>

                <td className="px-4 py-4 text-center border-b border-gray-200">
                Email + Live Chat Support
                </td>
            </tr>



                <tr>
                    <td className="py-4 pr-4 font-medium border-b border-gray-200">1 tree planted for every purchase 🌳</td>

                    <td className="px-4 py-4 text-center border-b border-gray-200"><svg className="flex-shrink-0 w-5 h-5 text-indigo-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                            </svg></td>

                    <td className="px-4 py-4 text-center border-b border-gray-200"><svg className="flex-shrink-0 w-5 h-5 text-indigo-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                            </svg></td>

                    <td className="px-4 py-4 text-center text-white bg-gray-900 border-b border-white/20">
                    <svg className="flex-shrink-0 w-5 h-5 text-indigo-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                            </svg>
                    </td>

                    <td className="px-4 py-4 text-center border-b border-gray-200">
                    <svg className="flex-shrink-0 w-5 h-5 text-indigo-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                            </svg>
                    </td>
                </tr>


                    <tr>
                        <td className="py-6 pr-4"></td>

                        <td className="px-4 py-6 text-center">
                            <Link href="https://wa.me/message/WYGR5WKQWVJMA1" title="" className="inline-flex items-center font-semibold text-blue-600 hover:text-blue-700">
                                Get Started 
                                <svg className="w-4 h-4 ml-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                    <path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path>
                                </svg>
                            </Link>
                        </td>

                        <td className="px-4 py-6 text-center">
                            <Link href="https://wa.me/message/WYGR5WKQWVJMA1" title="" className="inline-flex items-center font-semibold text-blue-600 hover:text-blue-700">
                                Get Started 
                                <svg className="w-4 h-4 ml-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                    <path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path>
                                </svg>
                            </Link>
                        </td>

                        <td className="px-4 py-6 text-center text-white bg-yellow-500 rounded-b-xl">
                            <Link href="https://wa.me/message/WYGR5WKQWVJMA1" title="" className="inline-flex items-center font-semibold text-white">
                                Get Started 
                                <svg className="w-4 h-4 ml-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                    <path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path>
                                </svg>
                            </Link>
                        </td>

                        <td className="px-4 py-6 text-center">
                            <Link href="https://wa.me/message/WYGR5WKQWVJMA1" title="" className="inline-flex items-center font-semibold text-blue-600 hover:text-blue-700">
                                Get Started 
                                <svg className="w-4 h-4 ml-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                    <path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path>
                                </svg>
                            </Link>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>

   
    <div className="block mt-12 border-t border-b border-gray-200 divide-y divide-gray-200 lg:hidden">
        <div className="grid grid-cols-4 text-center divide-x divide-gray-200">
            <div className="px-2 py-2">
                <span className="text-sm font-medium text-blue-600"> Bronze </span>
                <p className="mt-2 text-xl font-bold">$49</p>
                <span className="mt-1 text-sm font-normal text-gray-500"> One Time </span>
            </div>

            <div className="px-2 py-2">
                <span className="text-sm font-medium text-blue-600"> Silver </span>
                <p className="mt-2 text-xl font-bold">$150</p>
                <span className="mt-1 text-sm font-normal text-gray-500"> One Time </span>
            </div>

            <div className="px-2 py-2">
                <span className="text-sm font-medium text-blue-600"> Gold </span>
                <p className="mt-2 text-xl font-bold">$350</p>
                <span className="mt-1 text-sm font-normal text-gray-500"> One Time </span>
            </div>

            <div className="px-2 py-2">
                <span className="text-sm font-medium text-blue-600"> Ultimate </span>
                <p className="mt-2 text-xl font-bold">$500</p>
                <span className="mt-1 text-sm font-normal text-gray-500"> One Time </span>
            </div>
        </div>

        <div className="px-2 py-4 sm:px-4">
            <p className="font-semibold">Website Pages</p>
        </div>

        <div className="grid grid-cols-4 text-center divide-x divide-gray-200">
            <div className="px-2 py-2">01</div>

            <div className="px-2 py-2">04</div>

            <div className="px-2 py-2">08</div>

            <div className="px-2 py-2">Multiple Pages</div>
        </div>

        <div className="px-2 py-4 sm:px-4">
            <p className="font-semibold">Free Web Hosting On Netlify  </p>
        </div>

        <div className="grid grid-cols-4 text-center divide-x divide-gray-200">
            <div className="px-2 py-2"><svg className="flex-shrink-0 w-5 h-5 text-indigo-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                            </svg></div>

            <div className="px-2 py-2"><svg className="flex-shrink-0 w-5 h-5 text-indigo-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                            </svg></div>

            <div className="px-2 py-2"><svg className="flex-shrink-0 w-5 h-5 text-indigo-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                            </svg></div>

            <div className="px-2 py-2"><svg className="flex-shrink-0 w-5 h-5 text-indigo-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                            </svg></div>
        </div>

        <div className="px-2 py-4 sm:px-4">
            <p className="font-semibold">Free illustrations from Pixabay/Pexels</p>
        </div>

        <div className="grid grid-cols-4 text-center divide-x divide-gray-200">
            <div className="px-2 py-2"><svg className="flex-shrink-0 w-5 h-5 text-indigo-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                            </svg></div>

            <div className="px-2 py-2"><svg className="flex-shrink-0 w-5 h-5 text-indigo-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                            </svg></div>

            <div className="px-2 py-2"><svg className="flex-shrink-0 w-5 h-5 text-indigo-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                            </svg></div>

            <div className="px-2 py-2"><svg className="flex-shrink-0 w-5 h-5 text-indigo-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                            </svg></div>
        </div>

        <div className="px-2 py-4 sm:px-4">
            <p className="font-semibold">3-5 working days turn-around</p>
        </div>

        <div className="grid grid-cols-4 text-center divide-x divide-gray-200">
            <div className="px-2 py-2"><svg className="flex-shrink-0 w-5 h-5 text-indigo-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                            </svg></div>

            <div className="px-2 py-2">
            <svg className="flex-shrink-0 w-5 h-5 text-indigo-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                            </svg>
            </div>

            <div className="px-2 py-2">
            <svg className="flex-shrink-0 w-5 h-5 text-indigo-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                            </svg>
            </div>

            <div className="px-2 py-2">
            <svg className="flex-shrink-0 w-5 h-5 text-indigo-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                            </svg>
            </div>
        </div>

        <div className="px-2 py-4 sm:px-4">
            <p className="font-semibold">No copywriting or graphic design</p>
        </div>

        <div className="grid grid-cols-4 text-center divide-x divide-gray-200">
            <div className="px-2 py-2">-</div>

            <div className="px-2 py-2">
            -
            </div>

            <div className="px-2 py-2">
            <svg className="flex-shrink-0 w-5 h-5 text-indigo-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                            </svg>
            </div>

            <div className="px-2 py-2">
            <svg className="flex-shrink-0 w-5 h-5 text-indigo-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                            </svg>
            </div>
        </div>

        <div className="px-2 py-4 sm:px-4">
            <p className="font-semibold">Real time analytics</p>
        </div>

        <div className="grid grid-cols-4 text-center divide-x divide-gray-200">
            <div className="px-2 py-2">-</div>

            <div className="px-2 py-2">
            -
            </div>

            <div className="px-2 py-2">
            <svg className="flex-shrink-0 w-5 h-5 text-indigo-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                            </svg>
            </div>

            <div className="px-2 py-2">
            <svg className="flex-shrink-0 w-5 h-5 text-indigo-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                            </svg>
            </div>
        </div>

        <div className="px-2 py-4 sm:px-4">
            <p className="font-semibold">Website Revision</p>
        </div>

        <div className="grid grid-cols-4 text-center divide-x divide-gray-200">
            <div className="px-2 py-2">01</div>

            <div className="px-2 py-2">
            02
            </div>

            <div className="px-2 py-2">
           03
            </div>

            <div className="px-2 py-2">
           05
            </div>
        </div>

        <div className="px-2 py-4 sm:px-4">
        <p className="font-semibold">Custom Domain</p>
    </div>

    <div className="grid grid-cols-4 text-center divide-x divide-gray-200">
        <div className="px-2 py-2">-</div>

        <div className="px-2 py-2">
        -
        </div>

        <div className="px-2 py-2">
        <svg className="flex-shrink-0 w-5 h-5 text-indigo-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                            </svg>
        </div>

        <div className="px-2 py-2">
        <svg className="flex-shrink-0 w-5 h-5 text-indigo-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                            </svg>
        </div>
    </div>
        
    <div className="px-2 py-4 sm:px-4">
        <p className="font-semibold">Backend Admin Panel</p>
    </div>

    <div className="grid grid-cols-4 text-center divide-x divide-gray-200">
        <div className="px-2 py-2">-</div>

        <div className="px-2 py-2">
       -
        </div>

        <div className="px-2 py-2">
       -
        </div>

        <div className="px-2 py-2">
        <svg className="flex-shrink-0 w-5 h-5 text-indigo-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                            </svg>
        </div>
    </div>
        
    <div className="px-2 py-4 sm:px-4">
    <p className="font-semibold">Priority customer support</p>
</div>

<div className="grid grid-cols-4 text-center divide-x divide-gray-200">
    <div className="px-2 py-2">-</div>

    <div className="px-2 py-2">
    -
    </div>

    <div className="px-2 py-2">
    Email
    </div>

    <div className="px-2 py-2">
   Email + LiveChat
    </div>
</div>




    <div className="px-2 py-4 sm:px-4">
    <p className="font-semibold">1 tree planted for every purchase 🌳</p>
</div>

<div className="grid grid-cols-4 text-center divide-x divide-gray-200">
    <div className="px-2 py-2"><svg className="flex-shrink-0 w-5 h-5 text-indigo-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                            </svg></div>

    <div className="px-2 py-2">
    <svg className="flex-shrink-0 w-5 h-5 text-indigo-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                            </svg>
    </div>

    <div className="px-2 py-2">
    <svg className="flex-shrink-0 w-5 h-5 text-indigo-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                            </svg>
    </div>

    <div className="px-2 py-2">
    <svg className="flex-shrink-0 w-5 h-5 text-indigo-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                            </svg>
    </div>
</div>


        <div className="grid grid-cols-4 text-center divide-x divide-gray-200">
            <div className="px-1 py-2 sm:px-4">
                <span className="text-sm font-medium text-blue-600"> Bronze </span>
                <p className="mt-2 text-xl font-bold">$49</p>
                <span className="mt-1 text-sm font-normal text-gray-500"> One Time </span>
                <Link href="https://wa.me/message/WYGR5WKQWVJMA1" title="" className="flex items-center justify-center w-full px-1 py-2 mt-5 text-sm text-white transition-all duration-200 bg-blue-600 border border-transparent rounded-md hover:bg-blue-700" role="button"> Get Started  </Link>
            </div>

            <div className="px-1 py-2 sm:px-4">
                <span className="text-sm font-medium text-blue-600"> Silver</span>
                <p className="mt-2 text-xl font-bold">$150</p>
                <span className="mt-1 text-sm font-normal text-gray-500"> One Time </span>
                <Link href="https://wa.me/message/WYGR5WKQWVJMA1" title="" className="flex items-center justify-center w-full px-1 py-2 mt-5 text-sm text-white transition-all duration-200 bg-blue-600 border border-transparent rounded-md hover:bg-blue-700" role="button"> Get Started  </Link>
            </div>

            <div className="px-1 py-2 sm:px-4">
                <span className="text-sm font-medium text-blue-600"> Gold </span>
                <p className="mt-2 text-xl font-bold">$350</p>
                <span className="mt-1 text-sm font-normal text-gray-500"> One Time </span>
                <Link href="https://wa.me/message/WYGR5WKQWVJMA1" title="" className="flex items-center justify-center w-full px-1 py-2 mt-5 text-sm text-white transition-all duration-200 bg-blue-600 border border-transparent rounded-md hover:bg-blue-700" role="button"> Get Started  </Link>
            </div>

            <div className="px-1 pt-2 pb-4 sm:px-4">
                <span className="text-sm font-medium text-blue-600"> Ultimate </span>
                <p className="mt-2 text-xl font-bold">$500</p>
                <span className="mt-1 text-sm font-normal text-gray-500"> One Time </span>
                <Link href="https://wa.me/message/WYGR5WKQWVJMA1" title="" className="flex items-center justify-center w-full px-1 py-2 mt-5 text-sm text-white transition-all duration-200 bg-blue-600 border border-transparent rounded-md hover:bg-blue-700" role="button"> Get Started  </Link>
            </div>
        </div>
    </div>
</section>

  )
}

export default Plans