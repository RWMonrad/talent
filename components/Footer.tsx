import Link from 'next/link'

export function Footer() {
  return (
    <footer className="bg-background border-t">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-bold mb-4">Om oss</h3>
            <ul className="space-y-2">
              <li><Link href="#" className="text-muted-foreground hover:text-primary">Vår historie</Link></li>
              <li><Link href="#" className="text-muted-foreground hover:text-primary">Team</Link></li>
              <li><Link href="#" className="text-muted-foreground hover:text-primary">Karriere</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-4">Tjenester</h3>
            <ul className="space-y-2">
              <li><Link href="#" className="text-muted-foreground hover:text-primary">Maskin</Link></li>
              <li><Link href="#" className="text-muted-foreground hover:text-primary">Teknologi</Link></li>
              <li><Link href="#" className="text-muted-foreground hover:text-primary">Administrasjon</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-4">Ressurser</h3>
            <ul className="space-y-2">
              <li><Link href="#" className="text-muted-foreground hover:text-primary">Blog</Link></li>
              <li><Link href="#" className="text-muted-foreground hover:text-primary">FAQ</Link></li>
              <li><Link href="#" className="text-muted-foreground hover:text-primary">Kontakt oss</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-4">Følg oss</h3>
            <ul className="space-y-2">
              <li><Link href="#" className="text-muted-foreground hover:text-primary">Facebook</Link></li>
              <li><Link href="#" className="text-muted-foreground hover:text-primary">Twitter</Link></li>
              <li><Link href="#" className="text-muted-foreground hover:text-primary">Instagram</Link></li>
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t text-center text-muted-foreground">
          <p>&copy; 2023 Talentfabrikken. Alle rettigheter reservert.</p>
        </div>
      </div>
    </footer>
  )
}

