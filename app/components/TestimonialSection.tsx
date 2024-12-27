import Image from 'next/image'
import { Card, CardContent } from "@/components/ui/card"

const testimonials = [
  {
    name: "Emma Larsen",
    role: "Tidligere student",
    content: "Talentfabrikken ga meg muligheten til å utforske mine interesser og utvikle ferdigheter jeg aldri visste jeg hadde. Det har vært en livsforandrende opplevelse.",
    image: "/placeholder.svg"
  },
  {
    name: "Markus Olsen",
    role: "Nåværende student",
    content: "Jeg elsker den praktiske tilnærmingen til læring her. Det er så motiverende å se hvordan det vi lærer kan anvendes i den virkelige verden.",
    image: "/placeholder.svg"
  },
  {
    name: "Sofia Ahmed",
    role: "Alumnus",
    content: "Takket være Talentfabrikken fant jeg min lidenskap for teknologi. Nå jobber jeg i en spennende startup og bruker ferdighetene jeg lærte hver dag.",
    image: "/placeholder.svg"
  }
]

export function TestimonialSection() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 max-w-7xl">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">Hva våre studenter sier</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-secondary">
              <CardContent className="p-6 flex flex-col items-center text-center">
                <div className="w-24 h-24 rounded-full overflow-hidden mb-4">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    width={96}
                    height={96}
                    className="object-cover"
                  />
                </div>
                <p className="mb-4 text-muted-foreground">{testimonial.content}</p>
                <h3 className="font-semibold">{testimonial.name}</h3>
                <p className="text-sm text-muted-foreground">{testimonial.role}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

