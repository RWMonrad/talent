import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export function ContactSection() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 max-w-3xl">
        <h2 className="text-4xl md:text-5xl font-bold mb-8 text-center">Kontakt oss</h2>
        <form className="space-y-6">
          <div className="grid grid-cols-2 gap-6">
            <Input placeholder="Fornavn" />
            <Input placeholder="Etternavn" />
          </div>
          <Input type="email" placeholder="E-post" />
          <Textarea placeholder="Din melding" rows={5} />
          <Button type="submit" className="w-full">Send melding</Button>
        </form>
      </div>
    </section>
  )
}

