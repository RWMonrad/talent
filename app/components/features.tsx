import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Image from "next/image"

export function Features() {
  const features = [
    {
      title: "Maskin",
      description: "Praktisk læring med avansert maskineri som elektriske trekkvogner for å sikre utvikling av praktiske ferdigheter.",
      image: "/placeholder.svg"
    },
    {
      title: "Teknologi",
      description: "Avansert opplæring i IoT, robotikk og automatisering, som forbereder ungdom på fremtidens jobber.",
      image: "/placeholder.svg"
    },
    {
      title: "Administrasjon",
      description: "Lær å drive moderne bedrifter med AI-verktøy, kodeplattformer og profesjonell medieproduksjonsprogramvare.",
      image: "/placeholder.svg"
    }
  ]

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Våre hovedområder</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature) => (
            <Card key={feature.title} className="border-none shadow-lg">
              <CardHeader>
                <CardTitle className="text-xl mb-4">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="relative aspect-video w-full overflow-hidden rounded-lg">
                  <Image
                    src={feature.image}
                    alt={feature.title}
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
                <p className="text-muted-foreground">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

