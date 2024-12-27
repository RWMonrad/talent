import Image from 'next/image'

export function ImpactSection() {
  return (
    <section className="py-32 px-6">
      <div className="max-w-[2000px] mx-auto">
        <div className="mb-32">
          <h2 className="text-[clamp(4rem,8vw,6rem)] leading-[0.9] font-bold tracking-tighter">
            VÅR<br />PÅVIRKNING
          </h2>
        </div>
        
        <div className="grid grid-cols-3 gap-24">
          <div>
            <p className="text-xl font-light">
              Vi skaper ikke bare endring, vi gir ungdommer muligheten til å endre sin egen kurs.
            </p>
          </div>
          <div>
            <p className="text-xl font-light">
              Gjennom praktisk læring og ekte arbeidserfaring, bygger vi broer til en bedre fremtid.
            </p>
          </div>
          <div>
            <p className="text-xl font-light">
              Vår modell har bevist at når ungdom får muligheten, skaper de varige endringer i sine liv.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-24 mt-32">
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <span className="w-3 h-3 bg-black"></span>
              <span>58 ungdommer i arbeid årlig</span>
            </div>
            <div className="flex items-center gap-4">
              <span className="w-3 h-3 bg-black"></span>
              <span>85% går videre til fast ansettelse</span>
            </div>
            <div className="flex items-center gap-4">
              <span className="w-3 h-3 bg-black"></span>
              <span>100% føler økt selvverd og uavhengighet</span>
            </div>
          </div>
          <div className="col-span-2">
            <div className="relative aspect-[16/9] w-full">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/MASKIN2.jpg-iXYdY47jbS43yVaEJIuclPG2BNUP6T.jpeg"
                alt="Maskinarbeid i steinbrudd"
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

