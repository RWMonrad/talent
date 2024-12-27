import Link from 'next/link'

export function Footer() {
  return (
    <footer className="bg-black text-white py-24">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-12 gap-8">
          {/* Left Column - Connect */}
          <div className="col-span-12 md:col-span-3">
            <h3 className="text-gray-500 mb-6 text-sm tracking-wide">FØLG OSS</h3>
            <div className="space-y-3">
              <Link href="#" className="block text-sm hover:text-gray-300">Facebook</Link>
              <Link href="#" className="block text-sm hover:text-gray-300">Instagram</Link>
              <Link href="#" className="block text-sm hover:text-gray-300">LinkedIn</Link>
              <Link href="#" className="block text-sm hover:text-gray-300">YouTube</Link>
            </div>
          </div>

          {/* Middle Column - Info */}
          <div className="col-span-12 md:col-span-3 md:col-start-5">
            <h3 className="text-gray-500 mb-6 text-sm tracking-wide">INFORMASJON</h3>
            <div className="space-y-3">
              <Link href="#" className="block text-sm hover:text-gray-300">Ofte stilte spørsmål</Link>
              <Link href="#" className="block text-sm hover:text-gray-300">For bedrifter</Link>
              <Link href="#" className="block text-sm hover:text-gray-300">Personvern</Link>
            </div>
          </div>

          {/* Right Column - Main Nav */}
          <div className="col-span-12 md:col-span-4 md:col-start-9">
            <nav className="space-y-4">
              <Link href="/fabrikk" className="block mega-nav font-bold hover:text-gray-300">FABRIKK</Link>
              <Link href="/utenforskap" className="block mega-nav font-bold hover:text-gray-300">UTENFORSKAP</Link>
              <Link href="/baerekraft" className="block mega-nav font-bold hover:text-gray-300">BÆREKRAFT</Link>
              <Link href="/merch" className="block mega-nav font-bold hover:text-gray-300">MERCH</Link>
              <Link href="/om-oss" className="block mega-nav font-bold hover:text-gray-300">OM OSS</Link>
              <Link href="/kontakt" className="block mega-nav font-bold hover:text-gray-300">KONTAKT</Link>
              <Link href="/doner" className="block mega-nav font-bold hover:text-gray-300">DONER</Link>
              <Link href="/logg-inn" className="block mega-nav font-bold hover:text-gray-300">LOGG INN</Link>
            </nav>
          </div>
        </div>
      </div>
    </footer>
  )
}

