import Plans from '@/components/Home/Plans'
import React from 'react'
import Head from 'next/head'
const pricing = () => {
  return (
    <>

    <Head>
        <title>Pricing</title>
        <meta name="description" content="Explore our pricing options for high-quality services. Find the perfect plan to meet your needs and budget. Unlock great value and quality today." />
        <meta name="keywords" content="Affordable YouTube video editor, professional editing services, boost channel success with quality editing,social media, small businesses, professional, brand, solutions,social media agency india,social media marketing india,social media management india,social media handling india,small business,business ideas,marketing agency for social media ,marketing social media agency,
        digital marketing agency near me,social media marketing company,social media marketing services" />
        <meta property="og:title" content="Pricing" />
        
        <meta property="og:description" content="Explore our pricing options for high-quality services. Find the perfect plan to meet your needs and budget. Unlock great value and quality today." />
        <meta property="og:image" content="/images/offer.png" />
        <link rel="icon" href="/favicon.png" />
      </Head>
    
    <section className="py-10 bg-gray-900 sm:py-16 lg:py-24">
    <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div className="text-center">
            <h2 className="text-3xl font-bold leading-tight text-white sm:text-3xl lg:text-4xl">Discover our cost-effective social media management plans today!</h2>
            <p className="mt-4 text-lg text-white font-medium">Expand your online presence across top platforms like Facebook, Instagram, LinkedIn, Twitter, Google My Business, and Pinterest with our comprehensive social media content offerings. Our flexible monthly plans allow you to cancel or modify your subscription at any time.
            <br />Personalize your plan during checkout! When you sign up, you will have the opportunity to enhance your package with extras such as additional posts, expanded network coverage, Instagram Stories, Reels, and blog content.
            </p>
            
      
        </div>
    </div>
</section>


    <Plans />
    </>
  )
}

export default pricing