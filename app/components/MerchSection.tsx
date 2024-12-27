'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'

const certifications = [
  { name: 'WQA Sustainability', image: 'lbk1.jpg' },
  { name: 'Green Tick', image: 'lbk2.jpg' },
  { name: 'Recycled 100', image: 'lbk3.jpg' },
  { name: 'ISO 14001', image: 'lbk5.jpg' },
  { name: 'Triple Bottom Line', image: 'lbk6.jpg' },
  { name: 'Gold Quarrier', image: 'lpk4.jpg' }
]

export function MerchSection() {
  return (
    <section className="py-24">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-12 gap-16">
          <div className="col-span-5">
            <h2 className="text-4xl font-bold mb-6">
              INNOVASJON TIL DET<br />
              BESTE FOR SAMFUNNET
            </h2>
            <p className="text-lg font-light">
              Vi er en registrert sosial virksomhet som driver og innoverer som en 
              moderne bedrift: produkt først. Vi har samarbeidet med bransjeledere 
              for å utforske beste praksis for bærekraftig produksjon, og deretter 
              lagt til meningsfull, lokal sosial påvirkning gjennom vår unike 
              Talentfabrikken-tilnærming.
            </p>
          </div>
          
          <div className="col-span-2">
            <div className="flex flex-col gap-6">
              {certifications.map((cert, index) => (
                <motion.div
                  key={cert.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="relative aspect-square w-full"
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
          
          <div className="col-span-5">
            <div className="aspect-[4/5] relative">
              <Image
                src="/placeholder.svg"
                alt="Featured product"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

