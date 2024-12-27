import Link from 'next/link'
import Image from 'next/image'

const areas = [
  {
    title: "MASKIN",
    description: "Praktisk læring med avansert maskineri for å utvikle hands-on ferdigheter.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/MASKIN4.jpg-ChzNGxxncD5xerLa7CNecGM7hapcf6.jpeg",
    details: "Vår maskinavdeling gir praktisk erfaring med moderne utstyr og teknologi, fra sandblåsing til strøsandproduksjon."
  },
  {
    title: "TEKNOLOGI",
    description: "Innovativ opplæring i IoT, robotikk og automatisering for fremtidens jobber.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ROB1.jpg-ZE0xIneGEVaaH6VRWSSY74cLhpha1v.png",
    details: "Vi fokuserer på fremtidsrettet teknologi og digitale løsninger som former morgendagens arbeidsliv."
  },
  {
    title: "ADMINISTRASJON",
    description: "Lær moderne forretningsdrift med AI-verktøy og profesjonell programvare.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/TECH5.jpg-QRNH5GKp1P7ZXK534yIK2GaCgzYKyV.jpeg",
    details: "Administrasjonsavdelingen gir innsikt i moderne forretningsdrift og digitale verktøy."
  }
]

export function FocusAreas() {
  return (
    <section className="py-32 px-6">
      <div className="max-w-[2000px] mx-auto">
        <h2 className="text-[clamp(3rem,6vw,4rem)] leading-[0.9] font-bold tracking-tighter mb-24">
          VÅRE HOVEDOMRÅDER
        </h2>
        
        <div className="grid grid-cols-3 gap-24">
          {areas.map((area, index) => (
            <div key={index} className="space-y-8">
              <div className="relative aspect-[4/3] w-full">
                <Image
                  src={area.image}
                  alt={area.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="border-t pt-8">
                <h3 className="text-2xl font-bold mb-4">{area.title}</h3>
                <p className="text-lg font-light mb-4">{area.description}</p>
                <p className="text-lg font-light mb-6">{area.details}</p>
                <Link href={`#${area.title.toLowerCase()}`} className="text-sm underline hover:opacity-60">
                  LES MER
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

