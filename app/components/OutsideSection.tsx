import Image from 'next/image'

export function OutsideSection() {
  return (
    <section className="pt-16 pb-32 px-6">
      <div className="max-w-[2000px] mx-auto">
        
        <div className="grid grid-cols-3 gap-24">
          <div>
            <p className="text-xl font-light mb-8">
              I Norge står over 100.000 unge mellom 16-25 år utenfor skole og arbeidsliv. 
              Dette representerer ikke bare tapte muligheter for individet, 
              men også et betydelig tap for samfunnet.
            </p>
            <div className="aspect-[4/3] relative">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/MASKIN2.jpg-iXYdY47jbS43yVaEJIuclPG2BNUP6T.jpeg"
                alt="Ungdom i arbeid"
                fill
                className="object-cover"
              />
            </div>
          </div>
          <div>
            <p className="text-xl font-light mb-8">
              Hos Talentfabrikken ser vi ikke på utenforskap som en endestasjon, 
              men som et utgangspunkt for endring. Vi tror på at alle har et talent 
              som kan utvikles når de får de riktige verktøyene og mulighetene.
            </p>
            <div className="aspect-[4/3] relative">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/TECH5.jpg-QRNH5GKp1P7ZXK534yIK2GaCgzYKyV.jpeg"
                alt="Teknologiopplæring"
                fill
                className="object-cover"
              />
            </div>
          </div>
          <div>
            <p className="text-xl font-light mb-8">
              Gjennom praktisk arbeid og reell erfaring skaper vi en ny vei tilbake 
              til samfunnet. Vi bygger selvtillit, kompetanse og nettverk som varer livet ut.
              Dette er ikke bare ord - det er vår daglige virkelighet.
            </p>
            <div className="aspect-[4/3] relative">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ROB1.jpg-ZE0xIneGEVaaH6VRWSSY74cLhpha1v.png"
                alt="Praktisk læring"
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

