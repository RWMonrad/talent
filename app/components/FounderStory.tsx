'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'

export function FounderStory() {
  return (
    <section className="py-32 px-6">
      <div className="max-w-[2000px] mx-auto">
        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-[clamp(4rem,8vw,6rem)] leading-[0.9] font-bold tracking-tighter mb-32"
        >
          KRAFTEN<br />BAK
        </motion.h2>

        <div className="grid grid-cols-2 gap-24">
          {/* Left Column - Image and Statement */}
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="relative aspect-[4/3]"
            >
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/RONNY.jpg-WFzlF7WhLwDFCKYjy1f50xy9nm9nZb.jpeg"
                alt="Ronny Bergersen"
                fill
                className="object-cover grayscale"
                priority
              />
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="space-y-4"
            >
              <blockquote className="text-xl font-light">
                "Som dyslektiker ble jeg ofte oversett i skolesystemet. Men jeg nektet å la 
                det definere min fremtid. I dag leder jeg et av Norges største 
                entreprenørselskaper, Bergersen-konsernet."
              </blockquote>
              <div>
                <p className="text-lg font-medium">Ronny Bergersen</p>
                <p className="text-base text-gray-600">Medgrunnlegger, Talentfabrikken</p>
              </div>
            </motion.div>
          </div>

          {/* Right Column - Info Blocks */}
          <div className="flex flex-col gap-2 -mt-[32px]">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6 }}
              className="bg-gray-50 p-6"
            >
              <h3 className="text-2xl font-bold mb-4">Vår Visjon</h3>
              <p className="text-lg font-light">
                Min historie er drivkraften bak Talentfabrikken. Jeg vet at det finnes 
                tusenvis av unge mennesker der ute som blir undervurdert - akkurat som 
                jeg ble. De har talenter og ferdigheter som det tradisjonelle systemet 
                ikke ser.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.8 }}
              className="bg-gray-50 p-6"
            >
              <h3 className="text-2xl font-bold mb-4">Vår Tilnærming</h3>
              <p className="text-lg font-light">
                Talentfabrikken er ikke bare en skole eller et arbeidstreningsprogram. 
                Det er et bevis på at når du får muligheten til å lære på din egen måte, 
                når noen virkelig tror på deg - da kan du oppnå alt.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.0 }}
              className="bg-gray-50 p-6"
            >
              <h3 className="text-2xl font-bold mb-4">Vår Fremtid</h3>
              <p className="text-lg font-light">
                Gjennom Talentfabrikken bygger vi broer mellom talent og muligheter. 
                Vi skaper ikke bare arbeidsplasser - vi former fremtidens ledere som 
                vil forstå verdien av mangfold og ulike læringsstiler.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

