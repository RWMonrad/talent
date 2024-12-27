'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'

const certifications = [
  { name: 'Miljøfyrtårn', image: '/placeholder.svg' },
  { name: 'Svanemerket', image: '/placeholder.svg' },
  { name: 'ISO 14001', image: '/placeholder.svg' },
  { name: 'Fairtrade', image: '/placeholder.svg' }
]

export function MerchIntro() {
  return (
    <section className="py-32 px-6">
      <div className="max-w-[2000px] mx-auto">
        <div className="grid grid-cols-12 gap-24">
          {/* Text Content */}
          <div className="col-span-4">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-[clamp(3rem,5vw,4rem)] leading-[0.9] font-bold tracking-tighter mb-8"
            >
              BRA FOR BUSINESS,<br />
              BRA FOR SAMFUNNET.
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-xl font-light"
            >
              Vi er en registrert sosial virksomhet som driver og innoverer som en 
              moderne bedrift: produkt først. Vi har samarbeidet med bransjeledere 
              for å utforske beste praksis for bærekraftig produksjon, og deretter 
              lagt til meningsfull, lokal sosial påvirkning gjennom vår unike 
              Talentfabrikken-tilnærming.
            </motion.p>
          </div>

          {/* Certifications */}
          <div className="col-span-4">
            <div className="grid grid-cols-2 gap-8">
              {certifications.map((cert, index) => (
                <motion.div
                  key={cert.name}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="aspect-square relative"
                >
                  <Image
                    src={cert.image}
                    alt={cert.name}
                    fill
                    className="object-contain"
                  />
                </motion.div>
              ))}
            </div>
          </div>

          {/* Featured Image */}
          <div className="col-span-4">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="aspect-[3/4] relative"
            >
              <Image
                src="/placeholder.svg"
                alt="Featured product"
                fill
                className="object-cover"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

