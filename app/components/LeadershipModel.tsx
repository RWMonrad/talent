'use client'

import { useState, useRef, useEffect } from 'react'
import { motion, useSpring } from 'framer-motion'
import { ChevronRight, Workflow, Cog, Building2 } from 'lucide-react'

interface Section {
  id: string
  title: string
  description: string
  details: string[]
  icon: typeof Cog
  color: string
}

// Perlin noise implementation for more organic movement
function noise(x: number, y: number, z: number) {
  const p = new Array(512)
  for(let i=0; i < 256 ; i++) p[i] = i
  for(let i=0; i < 256 ; i++) {
    const r = Math.floor(Math.random() * 256)
    const temp = p[i]
    p[i] = p[r]
    p[r] = temp
  }
  for(let i=0; i < 256 ; i++) p[i + 256] = p[i]
  
  function fade(t: number) { return t * t * t * (t * (t * 6 - 15) + 10) }
  function lerp(t: number, a: number, b: number) { return a + t * (b - a) }
  
  function grad(hash: number, x: number, y: number, z: number) {
    const h = hash & 15
    const u = h < 8 ? x : y
    const v = h < 4 ? y : h === 12 || h === 14 ? x : z
    return ((h & 1) === 0 ? u : -u) + ((h & 2) === 0 ? v : -v)
  }
  
  const X = Math.floor(x) & 255
  const Y = Math.floor(y) & 255
  const Z = Math.floor(z) & 255
  
  x -= Math.floor(x)
  y -= Math.floor(y)
  z -= Math.floor(z)
  
  const u = fade(x)
  const v = fade(y)
  const w = fade(z)
  
  const A = p[X]+Y
  const AA = p[A]+Z
  const AB = p[A+1]+Z
  const B = p[X+1]+Y
  const BA = p[B]+Z
  const BB = p[B+1]+Z
  
  return lerp(w, 
    lerp(v, 
      lerp(u, grad(p[AA], x, y, z), grad(p[BA], x-1, y, z)),
      lerp(u, grad(p[AB], x, y-1, z), grad(p[BB], x-1, y-1, z))
    ),
    lerp(v,
      lerp(u, grad(p[AA+1], x, y, z-1), grad(p[BA+1], x-1, y, z-1)),
      lerp(u, grad(p[AB+1], x, y-1, z-1), grad(p[BB+1], x-1, y-1, z-1))
    )
  )
}

export function LeadershipModel() {
  const [activeSection, setActiveSection] = useState<string | null>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const circleRefs = useRef<(HTMLDivElement | null)[]>([])
  
  const sections: Section[] = [
    {
      id: 'maskin',
      title: 'MASKIN',
      description: 'Utfordringer med praktisk opplæring i en digital verden.',
      details: [
        'Kostbare maskiner krever stor investering',
        'Kompleks vedlikeholdsstruktur',
        'Høye driftskostnader',
        'Strenge sikkerhetskrav'
      ],
      icon: Cog,
      color: '#FFB800'
    },
    {
      id: 'teknologi',
      title: 'TEKNOLOGI',
      description: 'Teknologiske barrierer i moderne opplæring.',
      details: [
        'Rask teknologisk utdatering',
        'Høye lisenskostnader',
        'Kompleks infrastruktur',
        'Kontinuerlig oppdateringsbehov'
      ],
      icon: Workflow,
      color: '#4299E1'
    },
    {
      id: 'administrasjon',
      title: 'ADMINISTRASJON',
      description: 'Administrative utfordringer i daglig drift.',
      details: [
        'Omfattende dokumentasjonskrav',
        'Komplekse regelverk',
        'Ressurskrevende oppfølging',
        'Strenge rapporteringskrav'
      ],
      icon: Building2,
      color: '#48BB78'
    }
  ]

  // Create spring physics for each section
  const springs = sections.map(() => ({
    x: useSpring(0, { stiffness: 100, damping: 10 }),
    y: useSpring(0, { stiffness: 100, damping: 10 })
  }))

  useEffect(() => {
    let timeOffset = 0
    const radius = 150 // Increased radius for better spacing
    const magneticRange = 60
    let frame: number

    const animate = () => {
      timeOffset += 0.002
      
      sections.forEach((_, index) => {
        const angle = timeOffset + (index * Math.PI * 2 / 3)
        const noiseX = noise(timeOffset * 2 + index, 0, 0) * 30
        const noiseY = noise(0, timeOffset * 2 + index, 0) * 30
        
        const baseX = Math.cos(angle) * radius + noiseX
        const baseY = Math.sin(angle) * radius + noiseY
        
        let finalX = baseX
        let finalY = baseY
        
        sections.forEach((_, otherIndex) => {
          if (index !== otherIndex) {
            const otherX = springs[otherIndex].x.get()
            const otherY = springs[otherIndex].y.get()
            
            const dx = baseX - otherX
            const dy = baseY - otherY
            const distance = Math.sqrt(dx * dx + dy * dy)
            
            if (distance < magneticRange) {
              const force = (magneticRange - distance) / magneticRange
              finalX += dx * force * 0.2
              finalY += dy * force * 0.2
            }
          }
        })
        
        springs[index].x.set(finalX)
        springs[index].y.set(finalY)
      })
      
      frame = requestAnimationFrame(animate)
    }
    
    animate()
    return () => cancelAnimationFrame(frame)
  }, [])

  return (
    <section className="py-32 px-6 bg-black text-white">
      <div className="max-w-[2000px] mx-auto">
        <div className="grid grid-cols-2 gap-24">
          <div className="relative">
            <div 
              ref={containerRef}
              className="relative w-[600px] h-[600px] mx-auto border border-white/20 rounded-full"
            >
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40
                rounded-full bg-white text-black flex items-center justify-center z-20 shadow-glow">
                <span className="text-base font-bold text-center">
                  TALENT&shy;FABRIKKEN
                </span>
              </div>

              {sections.map((section, index) => (
                <motion.div
                  key={section.id}
                  ref={el => circleRefs.current[index] = el}
                  style={{
                    x: springs[index].x,
                    y: springs[index].y,
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                  }}
                  className="transform -translate-x-1/2 -translate-y-1/2"
                  whileHover={{ scale: 1.1 }}
                  onClick={() => setActiveSection(activeSection === section.id ? null : section.id)}
                >
                  <div
                    className="w-32 h-32 rounded-full flex items-center justify-center cursor-pointer shadow-lg backdrop-blur-sm"
                    style={{ 
                      backgroundColor: `${section.color}dd`,
                      zIndex: activeSection === section.id ? 30 : 10 + index,
                      boxShadow: `0 0 30px ${section.color}66`
                    }}
                  >
                    <section.icon className="w-12 h-12 text-white" />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
          <div className="text-right">
            <h2 className="text-[clamp(3rem,6vw,4rem)] leading-[0.9] font-bold tracking-tighter mb-8">
              INTERAKTIV<br />LEDELSE
            </h2>
            <p className="text-xl font-light mb-8 text-white/80">
              Vår ledelsesmodell avdekker kompleksiteten i samspillet mellom 
              våre tre hovedområder. Dette krever nøye balansering og 
              konstant oppmerksomhet for å unngå ineffektivitet og friksjon 
              i arbeidsprosessene.
            </p>

            {activeSection && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                className="bg-white/10 backdrop-blur-sm p-8 rounded-xl mt-8 text-right"
              >
                <h3 className="text-2xl font-bold mb-4">
                  {sections.find(s => s.id === activeSection)?.title}
                </h3>
                <p className="text-lg mb-6 text-white/80">
                  {sections.find(s => s.id === activeSection)?.description}
                </p>
                <ul className="space-y-2">
                  {sections.find(s => s.id === activeSection)?.details.map((detail, index) => (
                    <li key={index} className="flex items-center justify-end gap-2 text-white/80">
                      {detail}
                      <ChevronRight className="w-4 h-4 text-white/60" />
                    </li>
                  ))}
                </ul>
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

