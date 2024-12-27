import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Image from "next/image"

const features = [
  {
    title: "MASKIN",
    description: "Utdannelse av maskinførere for spesialiserte arbeidsoppgaver innen sandblåsing og strøsandproduksjon.",
    image: "/placeholder.svg"
  },
  {
    title: "TEKNOLOGI",
    description: "Innovasjon innen robotisering, automatisering og autonome systemer.",
    image: "/placeholder.svg"
  },
  {
    title: "ADMINISTRASJON",
    description: "Fokus på salg, markedsføring og moderne forretningsdrift med AI, Big Data og IoT.",
    image: "/placeholder.svg"
  }
]

export function FeatureSection() {
  return (
    <section className="py-20 bg-secondary">
      <div className="container mx-auto px-4 max-w-7xl">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">Våre hovedområder</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="bg-background">
              <CardHeader className="p-0">
                <div className="relative w-full h-48">
                  <Image
                    src={feature.image}
                    alt={feature.title}
                    fill
                    className="object-cover"
                  />
                </div>
              </CardHeader>
              <CardContent className="p-6">
                <CardTitle className="text-xl mb-4">{feature.title}</CardTitle>
                <p className="text-muted-foreground">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

