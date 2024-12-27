'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

export function CallToAction() {
  return (
    <section className="py-32 px-6 bg-black text-white">
      <div className="max-w-[2000px] mx-auto">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          <h2 className="text-[clamp(3rem,6vw,4rem)] leading-[0.9] font-bold tracking-tighter mb-8">
            BLI EN DEL AV ENDRINGEN
          </h2>
          <p className="text-xl font-light mb-16 max-w-3xl">
            Hver handling teller. Enten du er en potensiell student, en bedrift som ønsker 
            å samarbeide, eller noen som vil støtte vår misjon - din innsats kan gjøre en forskjell.
          </p>
          
          <div className="flex flex-col md:flex-row items-center gap-8">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link 
                href="/bli-student"
                className="group relative inline-flex items-center justify-center bg-white text-black px-8 py-4 rounded-full overflow-hidden transition-all duration-300"
              >
                <span className="relative z-10 font-medium">BLI STUDENT</span>
                <div className="absolute inset-0 bg-gray-100 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
              </Link>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link 
                href="/samarbeid"
                className="group inline-flex items-center gap-2 text-white hover:text-gray-200 transition-colors duration-300"
              >
                <span className="font-medium">SAMARBEID MED OSS</span>
                <ArrowRight className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
            </motion.div>
          </div>

          <div className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-16 w-full">
            <Link 
              href="/kontakt"
              className="group flex flex-col items-center text-center hover:text-gray-300 transition-colors duration-300"
            >
              <h3 className="text-lg font-bold mb-2">KONTAKT</h3>
              <p className="text-sm font-light">Ta kontakt for mer informasjon</p>
            </Link>
            <Link 
              href="/sosiale-medier"
              className="group flex flex-col items-center text-center hover:text-gray-300 transition-colors duration-300"
            >
              <h3 className="text-lg font-bold mb-2">FØLG OSS</h3>
              <p className="text-sm font-light">Hold deg oppdatert på sosiale medier</p>
            </Link>
            <Link 
              href="/nyhetsbrev"
              className="group flex flex-col items-center text-center hover:text-gray-300 transition-colors duration-300"
            >
              <h3 className="text-lg font-bold mb-2">NYHETSBREV</h3>
              <p className="text-sm font-light">Meld deg på vårt nyhetsbrev</p>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

