export function HeroSection() {
  return (
    <section className="min-h-screen pt-32 px-6">
      <div className="max-w-[2000px] mx-auto">
        <div className="grid grid-cols-12 gap-8">
          <div className="col-span-12">
            <h1 className="text-[clamp(6rem,15vw,12rem)] leading-[0.85] font-bold tracking-tighter mb-32">
              ENDRE<br />
              KURS
            </h1>
          </div>
        </div>
        
        <div className="grid grid-cols-3 gap-24">
          <div>
            <p className="text-xl font-light">
              En skole- og fritidsordning for ungdom som vil lære på sin egen måte.
            </p>
          </div>
          <div>
            <p className="text-xl font-light">
              Vi skaper muligheter gjennom praktisk læring og ekte arbeidserfaring.
            </p>
          </div>
          <div>
            <p className="text-xl font-light">
              Her bygger vi fremtidens ledere gjennom handling, ikke bare ord.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

