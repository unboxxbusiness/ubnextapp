import Pay from '@/components/Web/Pay'
import Services from '@/components/Web/Services'
import React from 'react'
import Head from 'next/head'
const web = () => {
  return (
    <>
    <Head>
   <title>Blog Website Development</title>
   <meta name="description" content="Expert blog website development services for a captivating online presence. Engage your audience with a beautifully designed and functional blog. Get started today." />
   <meta name="keywords" content="Blog website development, custom design, responsive templates, SEO-friendly CMS, monetization strategies, social media integration,Affordable YouTube video editor, professional editing services, boost channel success with quality editing,social media, small businesses, professional, brand, solutions,social media agency india,social media marketing india,social media management india,social media handling india,small business,business ideas,marketing agency for social media ,marketing social media agency,
   digital marketing agency near me,social media marketing company,social media marketing services" />
   <meta property="og:title" content="Blog Website Development" />
   
   <meta property="og:description" content="Expert blog website development services for a captivating online presence. Engage your audience with a beautifully designed and functional blog. Get started today." />
   <meta property="og:image" content="/images/offer.png" />
   <link rel="icon" href="/favicon.png" />
 </Head>
    <section className="py-10 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 sm:py-16 lg:py-24">
    <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div className="text-center">
            <h2 className="text-3xl font-bold leading-tight text-white sm:text-3xl lg:text-4xl">WEBSITE DEVELOPMENT SERVICES</h2>
            <p className="mt-4 text-xl text-white font-medium">Simplify your life by focusing on your business, not your website</p>
            
      
        </div>
    </div>
</section>
<Services />
<Pay />
    </>
  )
}

export default web