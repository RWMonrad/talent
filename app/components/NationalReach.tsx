import Image from 'next/image'

export function NationalReach() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">NASJONAL REKKEVIDDE,<br />LOKAL PÅVIRKNING.</h2>
            <p className="text-xl mb-6">
              Vår modell har spredt seg til flere byer i Norge, og skaper 
              muligheter for ungdom over hele landet.
            </p>
            <ul className="space-y-4 text-lg">
              <li className="flex items-center">
                <span className="w-4 h-4 bg-black mr-4"></span>
                <span>5 lokasjoner nasjonalt</span>
              </li>
              <li className="flex items-center">
                <span className="w-4 h-4 bg-black mr-4"></span>
                <span>Over 200 ungdommer påvirket årlig</span>
              </li>
              <li className="flex items-center">
                <span className="w-4 h-4 bg-black mr-4"></span>
                <span>Samarbeid med 50+ lokale bedrifter</span>
              </li>
            </ul>
          </div>
          <div className="relative h-[400px]">
            <Image
              src="/placeholder.svg"
              alt="Kart over Norge med Talentfabrikkens lokasjoner"
              fill
              className="object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

