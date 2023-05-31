import Image from 'next/image'
import Head from 'next/head';
import Link from 'next/link'
import Features from '@/components/Home/Features'

import Section2 from '@/components/Home/Section2'
import Section3 from '@/components/Home/Section3'
import Plans from '@/components/Home/Plans'

import Section5 from '@/components/Home/Section5'

export default function Home() {
return (
<>
    <Head>
        <title>Unboxx Business: Affordable Real Estate Jamstack Website Solutions for Your Success</title>
        <meta name="description" content="Elevate your real estate business with Unboxx Business. We offer affordable Jamstack website solutions designed for speed, security, and scalability. Boost your success today!" />
        <meta name="keywords" content="Affordable Jamstack websites, budget-friendly solutions, speed-optimized & secure, scalable web development, expert design services,
        social media, small businesses, professional, brand, solutions,social media agency india,social media marketing india,social media management india,social media handling india,small business,business ideas,marketing agency for social media ,marketing social media agency,digital marketing agency near me,social media marketing company,social media marketing services" />
        <meta property="og:title" content="Unboxx Business: Affordable Real Estate Jamstack Website Solutions for Your Success" />
        <meta property="og:description" content="  Elevate your real estate business with Unboxx Business. We offer affordable Jamstack website solutions designed for speed, security, and scalability. Boost your success today!" />
        <meta property="og:image" content="/images/offer.png" />
        <link rel="icon" href="/favicon.png" />
      </Head>

  <div className="bg-gray-50">
   
  <section className="relative py-12 sm:py-16 lg:pb-40">
      <div className="absolute bottom-0 right-0 overflow-hidden">
          <Image className="w-full h-auto origin-bottom-right transform scale-150 lg:w-auto lg:mx-auto lg:object-cover lg:scale-75" src="/images/pattern.png" alt="" width={1920} height={1280}/>
      </div>

      <div className="relative px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-y-4 lg:items-center lg:grid-cols-2 xl:grid-cols-2">
              <div className="text-center xl:col-span-1 lg:text-left md:px-16 lg:px-0 xl:pr-20">
                  <h1 className="text-4xl font-bold leading-tight text-gray-900 sm:text-5xl sm:leading-tight lg:text-5xl lg:leading-tight font-pj">Supercharge speed, security—beyond Wordpress!</h1>
                  <p className="mt-2 text-lg text-gray-600 sm:mt-6 font-inter">Real estate websites revamped! Switch from Wordpress to our supercharged static site. Lightning-fast, rock-solid security. FREE hosting.</p>

                  <Link href="/pricing" title="" className="inline-flex px-8 py-4 mt-8 text-lg font-bold text-white transition-all duration-200 bg-gray-900 border border-transparent rounded sm:mt-10 font-pj hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900" role="button">
                  Get Started Now!
                  </Link>

                  <div className="mt-8 sm:mt-16">
                      <div className="flex items-center justify-center lg:justify-start">
                          <svg className="w-5 h-5 text-[#FDB241]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                              <path
                                  d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                              />
                          </svg>
                          <svg className="w-5 h-5 text-[#FDB241]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                              <path
                                  d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                              />
                          </svg>
                          <svg className="w-5 h-5 text-[#FDB241]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                              <path
                                  d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                              />
                          </svg>
                          <svg className="w-5 h-5 text-[#FDB241]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                              <path
                                  d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                              />
                          </svg>
                          <svg className="w-5 h-5 text-[#FDB241]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                              <path
                                  d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                              />
                          </svg>
                      </div>

                      <blockquote className="mt-6">
                          <p className="text-lg font-bold text-gray-900 font-pj">Unbelievable Speed Boost!</p>
                          <p className="mt-3 text-base leading-7 text-gray-600 font-inter">I cant believe the difference it made when I switched from Wordpress to the supercharged static site. My website now loads in a blink of an eye, providing an exceptional user experience for my clients</p>
                      </blockquote>

                      <div className="flex items-center justify-center mt-3 lg:justify-start">
                          <Image className="flex-shrink-0 object-cover w-6 h-6 overflow-hidden rounded-full" src="/images/client1.png" alt="" width={50} height={50}/>
                          <p className="ml-2 text-base font-bold text-gray-900 font-pj">Riya Singh, </p>
                      </div>
                  </div>
              </div>

              <div className="xl:col-span-1">
                  <Image className="w-full mx-auto" src="/images/banner.png" alt="" width={1080} height={1080}/>
              </div>
          </div>
      </div>
  </section>


<Features />

<Section2 />
<Section3 />
<Plans />

<Section5 />

</div>

</>

)
}