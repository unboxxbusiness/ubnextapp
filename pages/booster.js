import Details from '@/components/Booster/Details'
import Head from 'next/head'
import Payment from '@/components/Booster/Payment'
import Steps from '@/components/Booster/Steps'
import React from 'react'

const booster = () => {
  return (
<>

<Head>
        <title>Affordable YouTube Video Editor Services - Hire the Best Today!</title>
        <meta name="description" content="Affordable YouTube video editor services to enhance your content. Transform your videos and boost your channel's success. Hire us today!." />
        <meta name="keywords" content="Affordable YouTube video editor, professional editing services, boost channel success with quality editing,social media, small businesses, professional, brand, solutions,social media agency india,social media marketing india,social media management india,social media handling india,small business,business ideas,marketing agency for social media ,marketing social media agency,
        digital marketing agency near me,social media marketing company,social media marketing services" />
        <meta property="og:title" content="Affordable YouTube Video Editor Services - Hire the Best Today!" />
        
        <meta property="og:description" content="Affordable YouTube video editor services to enhance your content. Transform your videos and boost your channel's success. Hire us today!." />
        <meta property="og:image" content="/images/offer.png" />
        <link rel="icon" href="/favicon.png" />
      </Head>
    <section className="py-10 bg-gray-100 sm:py-16 lg:py-24">
    <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div className="text-center">
            <h2 className="text-3xl font-bold leading-tight text-black sm:text-3xl lg:text-4xl">Add an Expert Video Editor to Your Team in Just a Few Clicks and You Will Never Have to Edit Again.</h2>
            <p className="mt-4 text-lg font-medium">The Best Video Editing Service For YouTubers!</p>
            
      
        </div>
    </div>
</section>
<Steps />
<Details />
<Payment />
</>


  )
}

export default booster