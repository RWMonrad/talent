import Image from 'next/image'

export function Testimonial() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative h-[400px]">
            <Image
              src="/placeholder.svg"
              alt="Student portrait"
              fill
              className="object-cover"
            />
          </div>
          <div>
            <blockquote className="text-2xl md:text-3xl font-bold mb-6">
              "Talentfabrikken ga meg muligheten til å oppdage mine styrker og bygge en fremtid jeg aldri trodde var mulig."
            </blockquote>
            <p className="text-xl mb-2">Maria Johansen</p>
            <p className="text-gray-600">Tidligere student, nå ansatt som tekniker</p>
          </div>
        </div>
      </div>
    </section>
  )
}

