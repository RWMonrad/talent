export function SustainabilitySection() {
  return (
    <section className="py-32 px-6 bg-black text-white">
      <div className="max-w-[2000px] mx-auto">
        <div className="mb-32">
          <h2 className="text-[clamp(4rem,8vw,6rem)] leading-[0.9] font-bold tracking-tighter">
            SOSIALT<br />BÆREKRAFTIG
          </h2>
        </div>

        <div className="grid grid-cols-3 gap-24">
          <div>
            <p className="text-xl font-light">
              Som en akkreditert sosial virksomhet, reinvesterer vi 50% av all profitt 
              i å støtte, styrke og ansette ungdom som faller utenfor tradisjonelle systemer.
            </p>
          </div>
          <div>
            <p className="text-xl font-light">
              Gjennom vårt arbeidsprogram ansetter og styrker vi sårbar ungdom til å tro på 
              seg selv igjen, og bygger en bro mellom læring og arbeidsliv.
            </p>
          </div>
          <div>
            <p className="text-xl font-light">
              Vi skaper varige endringer gjennom en helhetlig tilnærming til bærekraft - 
              miljømessig, sosialt og økonomisk.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-24 mt-32 pt-16 border-t border-white/20">
          <div>
            <h3 className="text-lg font-bold mb-4">MILJØMESSIG BÆREKRAFT</h3>
            <p className="text-gray-400 font-light">
              Våre verksteder og fasiliteter drives med fornybar energi og minimalt avfall.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">SOSIAL BÆREKRAFT</h3>
            <p className="text-gray-400 font-light">
              Vi skaper varige endringer i samfunnet gjennom utdanning og inkludering.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">ØKONOMISK BÆREKRAFT</h3>
            <p className="text-gray-400 font-light">
              Vår forretningsmodell sikrer langsiktig drift og reinvestering i samfunnet.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

