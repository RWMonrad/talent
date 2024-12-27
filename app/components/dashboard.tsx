import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function Dashboard() {
  const metrics = [
    {
      title: "Ytelse hittil i år",
      value: "94.3%",
      description: "Måloppnåelse"
    },
    {
      title: "Salgsfremgang",
      value: "96.7%",
      description: "Av årsmål"
    },
    {
      title: "Netto overskudd",
      value: "13.25M",
      description: "NOK hittil i år"
    }
  ]

  return (
    <section className="py-20">
      <div className="container mx-auto px-4 max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12">Live KPI Dashboard</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {metrics.map((metric) => (
            <Card key={metric.title}>
              <CardHeader>
                <CardTitle className="text-lg">{metric.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-3xl font-bold">{metric.value}</p>
                <p className="text-sm text-muted-foreground">{metric.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

