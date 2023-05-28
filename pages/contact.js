import React from 'react'
import Head from 'next/head'
import Message from "../components/Message"


const contact = () => {
  return (

    <>
    <Head>
        <title>Get in Touch with Us - Contact Our Team Today</title>
        <meta name="description" content="Reach out to us and connect with our dedicated team today. We are here to assist you and provide the support you need. Contact us now" />
        <meta name="keywords" content="Affordable YouTube video editor, professional editing services, boost channel success with quality editing,social media, small businesses, professional, brand, solutions,social media agency india,social media marketing india,social media management india,social media handling india,small business,business ideas,marketing agency for social media ,marketing social media agency,
        digital marketing agency near me,social media marketing company,social media marketing services" />
        <meta property="og:title" content="Get in Touch with Us - Contact Our Team Today" />
        
        <meta property="og:description" content="Reach out to us and connect with our dedicated team today. We are here to assist you and provide the support you need. Contact us now" />
        <meta property="og:image" content="/images/offer.png" />
        <link rel="icon" href="/favicon.png" />
      </Head>
    <section className="py-10 bg-gray-100 sm:py-16 lg:py-24">
    <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold leading-tight text-gray-900 sm:text-4xl lg:text-5xl">Get in Touch with Us - Contact Our Team Today</h2>
            <p className="max-w-xl mx-auto mt-4 text-base leading-relaxed text-gray-500">Ready to take your small business to the next level with a professional social media presence? Get in touch with us today and let us help you unlock the full potential of social media marketing.</p>
        </div>

        <div className="max-w-5xl mx-auto mt-12 sm:mt-16">
            <div className="grid grid-cols-1 gap-6 px-8 text-center md:px-0 md:grid-cols-3">
                <div className="overflow-hidden bg-white rounded-xl">
                    <div className="p-6">
                        <svg className="flex-shrink-0 w-10 h-10 mx-auto text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="1"
                                d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                            />
                        </svg>
                        <p className="mt-6 text-lg font-medium text-gray-900">+91 8383066031</p>
                       
                    </div>
                </div>

                <div className="overflow-hidden bg-white rounded-xl">
                    <div className="p-6">
                        <svg className="flex-shrink-0 w-10 h-10 mx-auto text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                        <p className="mt-6 text-lg font-medium text-gray-900">info@unboxxbusiness.com</p>
                      
                    </div>
                </div>

                <div className="overflow-hidden bg-white rounded-xl">
                    <div className="p-6">
                        <svg className="flex-shrink-0 w-10 h-10 mx-auto text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        <p className="mt-6 text-lg font-medium leading-relaxed text-gray-900">We operate remotely</p>
                    </div>
                </div>
            </div>

            <div className="mt-6 overflow-hidden bg-white rounded-xl">
                <div className="px-6 py-12 sm:p-12">
                    <h3 className="text-3xl font-semibold text-center text-gray-900">Send us a message</h3>

                    <Message />
                </div>
            </div>
        </div>
    </div>
</section>
</>
  )
}

export default contact