
import Head from 'next/head'
import Payment from '@/components/Booster/Payment'

import React from 'react'

const booster = () => {
  return (
<>

<Head>
        <title>Booster Done For You Services</title>
        <meta name="description" content="Affordable social media management for small businesses. Boost your online presence and engage with your target audience effectively." />
        <meta name="keywords" content="Affordable YouTube video editor, professional editing services, boost channel success with quality editing,social media, small businesses, professional, brand, solutions,social media agency india,social media marketing india,social media management india,social media handling india,small business,business ideas,marketing agency for social media ,marketing social media agency,
        digital marketing agency near me,social media marketing company,social media marketing services" />
        <meta property="og:title" content="Booster Done For You Services" />
        
        <meta property="og:description" content="Affordable social media management for small businesses. Boost your online presence and engage with your target audience effectively." />
        <meta property="og:image" content="/images/offer.png" />
        <link rel="icon" href="/favicon.png" />
      </Head>
    <section className="py-10 bg-red-700 sm:py-16 lg:py-24">
    <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div className="text-center">
            <h2 className="text-3xl font-bold leading-tight text-white sm:text-3xl lg:text-4xl">Socialize and Succeed</h2>
            <p className="mt-4 text-lg text-white font-medium">Amplify Your Real Estate Brand with Expert Social Media Management</p>
            
      
        </div>
    </div>
</section>


<Payment />
</>


  )
}

export default booster