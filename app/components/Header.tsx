'use client'

import Link from 'next/link'
import { useState } from 'react'
import { Menu, X, ChevronDown } from 'lucide-react'

interface SubMenuItem {
  href: string
  label: string
}

interface MenuItem {
  href: string
  label: string
  subItems?: SubMenuItem[]
}

const menuItems: MenuItem[] = [
  {
    href: '/fremtid',
    label: 'FREMTID',
    subItems: [
      { href: '/fremtid/maskin', label: 'MASKIN' },
      { href: '/fremtid/teknologi', label: 'TEKNOLOGI' },
      { href: '/fremtid/administrasjon', label: 'ADMINISTRASJON' }
    ]
  },
  {
    href: '/fabrikken',
    label: 'FABRIKKEN',
    subItems: [
      { href: '/fabrikken/konsept', label: 'KONSEPT' },
      { href: '/fabrikken/bergverksindustri', label: 'BERGVERKSINDUSTRI' },
      { href: '/fabrikken/produkter', label: 'PRODUKTER' }
    ]
  },
  {
    href: '/baerekraft',
    label: 'BÆREKRAFT',
    subItems: [
      { href: '/baerekraft/miljo', label: 'MILJØ' },
      { href: '/baerekraft/sosialt-ansvar', label: 'SOSIALT ANSVAR' },
      { href: '/baerekraft/okonomi', label: 'ØKONOMI' }
    ]
  },
  {
    href: '/vi-bor-her',
    label: 'VI BOR HER',
    subItems: [
      { href: '/vi-bor-her/lekegrinda', label: 'LEKEGRINDA' },
      { href: '/vi-bor-her/cribs', label: 'CRIBS' },
      { href: '/vi-bor-her/vesteralen', label: 'VESTERÅLEN' },
      { href: '/vi-bor-her/aktiviteter', label: 'AKTIVITETER' }
    ]
  },
  { href: '/merch', label: 'MERCH' },
  { href: '/om-oss', label: 'OM OSS' },
  { href: '/kontakt', label: 'KONTAKT' }
]

export function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="text-3xl font-bold tracking-tight">
            TALENTFABRIKKEN
          </Link>
          
          <nav className="hidden md:flex items-center space-x-8">
            {menuItems.map((item) => (
              <div
                key={item.label}
                className="relative group"
                onMouseEnter={() => setActiveSubmenu(item.label)}
                onMouseLeave={() => setActiveSubmenu(null)}
              >
                <Link 
                  href={item.href} 
                  className="text-sm hover:opacity-60 transition-opacity flex items-center"
                >
                  {item.label}
                  {item.subItems && (
                    <ChevronDown className="ml-1 h-4 w-4" />
                  )}
                </Link>
                
                {item.subItems && activeSubmenu === item.label && (
                  <div className="absolute top-full left-0 bg-white py-4 px-6 shadow-lg min-w-[200px]">
                    <div className="space-y-4">
                      {item.subItems.map((subItem) => (
                        <Link
                          key={subItem.label}
                          href={subItem.href}
                          className="block text-sm hover:opacity-60 transition-opacity"
                        >
                          {subItem.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>

          <button 
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {isOpen && (
        <div className="fixed inset-0 bg-white z-40 pt-20">
          <nav className="container mx-auto px-6 py-8">
            <div className="flex flex-col space-y-6">
              {menuItems.map((item) => (
                <div key={item.label}>
                  <Link 
                    href={item.href} 
                    className="text-2xl font-bold"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.label}
                  </Link>
                  
                  {item.subItems && (
                    <div className="mt-4 ml-4 space-y-4">
                      {item.subItems.map((subItem) => (
                        <Link
                          key={subItem.label}
                          href={subItem.href}
                          className="block text-lg"
                          onClick={() => setIsOpen(false)}
                        >
                          {subItem.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}

