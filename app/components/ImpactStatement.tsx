import Image from 'next/image'

export function ImpactStatement() {
  return (
    <section className="py-32 bg-black text-white">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 gap-24 items-center">
          <div>
            <h2 className="text-[clamp(3rem,6vw,4rem)] leading-[0.9] font-bold tracking-tighter mb-8">
              VI SKAPER ENDRING<br />
              GJENNOM HANDLING<br />
              OG MULIGHETER
            </h2>
            <p className="text-xl font-light max-w-2xl">
              Som en akkreditert sosial virksomhet, reinvesterer vi 50% av all profitt 
              i å støtte, styrke og ansette ungdom som faller utenfor tradisjonelle systemer.
              Dette er ikke bare en forretningsmodell - det er vår måte å skape varig endring på.
            </p>
          </div>
          <div className="relative aspect-[4/3] w-full">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/MASKIN4.jpg-ChzNGxxncD5xerLa7CNecGM7hapcf6.jpeg"
              alt="Praktisk arbeid i aksjon"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

