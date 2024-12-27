'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import Image from 'next/image'
import { Button } from '@/components/ui/button'

export function HeroSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  }

  return (
    <section ref={ref} className="relative pt-32 pb-16 px-4 overflow-hidden min-h-screen flex items-center">
      <div className="container mx-auto max-w-7xl relative z-10">
        <motion.div
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={variants}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="grid md:grid-cols-2 gap-12 items-center"
        >
          <div className="space-y-6">
            <h1 className="text-5xl md:text-7xl font-bold leading-tight gradient-text">
              ENDRE<br />KURS!
            </h1>
            <p className="text-xl text-muted-foreground">
              Talentfabrikken er for deg som er klar for noe nytt. Her møter du andre som også digger å lære på sin egen måte.
            </p>
            <Button size="lg" className="text-lg px-8 py-6 rounded-full">
              Utforsk mulighetene
            </Button>
          </div>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="relative h-[400px] md:h-[600px]"
          >
            <Image
              src="/hero-image.jpg"
              alt="Unge mennesker som jobber sammen"
              fill
              className="object-cover rounded-2xl shadow-2xl"
              priority
            />
          </motion.div>
        </motion.div>
      </div>
      <div className="absolute inset-0 bg-gradient-to-r from-background via-background to-transparent z-0"></div>
    </section>
  )
}

