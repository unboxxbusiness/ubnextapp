import Faq1 from '@/components/Faq1'
import React from 'react'
import Head from 'next/head'
const faq = () => {
  return (
    <div>
    <Head>
        <title>Frequently Asked Questions FAQ - Unboxx Business</title>
        <meta name="description" content="Discover answers to commonly asked questions about Unboxx Business services, pricing tiers, web development, hosting, and more. Get all the information you need to make an informed decision for your business website." />
        <meta name="keywords" content="Affordable Jamstack websites, budget-friendly solutions, speed-optimized & secure, scalable web development, expert design services,
        social media, small businesses, professional, brand, solutions,social media agency india,social media marketing india,social media management india,social media handling india,small business,business ideas,marketing agency for social media ,marketing social media agency,digital marketing agency near me,social media marketing company,social media marketing services" />
        <meta property="og:title" content="Frequently Asked Questions FAQ - Unboxx Business" />
        
        <meta property="og:description" content="Discover answers to commonly asked questions about Unboxx Business services, pricing tiers, web development, hosting, and more. Get all the information you need to make an informed decision for your business website." />
        <meta property="og:image" content="/images/offer.png" />
        <link rel="icon" href="/favicon.png" />
      </Head>
    <section className="py-10 bg-gray-900 sm:py-16 lg:py-24">
    <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div className="text-center">
            <h2 className="text-3xl font-bold leading-tight text-white sm:text-3xl lg:text-4xl">FAQs</h2>
           
      
        </div>
    </div>
</section>
<Faq1 />
    
    
    </div>
  )
}

export default faq