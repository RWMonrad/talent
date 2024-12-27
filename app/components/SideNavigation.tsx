'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

const links = [
  { href: '/fabrikk', label: 'FABRIKK' },
  { href: '/utenforskap', label: 'UTENFORSKAP' },
  { href: '/baerekraft', label: 'BÆREKRAFT' },
  { href: '/merc', label: 'MERC' },
  { href: '/om-oss', label: 'OM OSS' },
  { href: '/kontakt', label: 'KONTAKT' },
  { href: '/doner', label: 'DONER' },
  { href: '/logg-inn', label: 'LOGG INN' }
]

export function SideNavigation() {
  return (
    <nav className="fixed top-0 right-0 h-screen w-64 bg-black text-white flex flex-col justify-center z-50">
      <div className="space-y-6 px-8">
        {links.map((link) => (
          <motion.div
            key={link.href}
            whileHover={{ x: -10 }}
            className="text-right"
          >
            <Link 
              href={link.href}
              className="text-2xl font-bold hover:text-gray-300 transition-colors"
            >
              {link.label}
            </Link>
          </motion.div>
        ))}
      </div>
    </nav>
  )
}

