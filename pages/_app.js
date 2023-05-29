import { motion, AnimatePresence } from 'framer-motion';
import { useRouter } from 'next/router';
import '@/styles/globals.css'

import Layout from '../components/Layout';
 
export default function MyApp({ Component, pageProps }) {
  const router = useRouter();

  return (
    <Layout>
    <AnimatePresence wait>
    <motion.div
      key={router.pathname}
      initial="pageInitial"
      animate="pageAnimate"
      exit="pageExit"
      variants={{
        pageInitial: {
          opacity: 0,
          x: -100,
        },
        pageAnimate: {
          opacity: 1,
          x: 0,
          transition: { duration: 0.3 },
        },
        pageExit: {
          opacity: 0,
          x: 100,
          transition: { duration: 0.3 },
        },
      }}
    >
      <Component {...pageProps} />
    </motion.div>
  </AnimatePresence>
    </Layout>
  );
}