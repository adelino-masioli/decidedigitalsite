"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled || isMenuOpen ? "bg-white/90 backdrop-blur-md shadow-sm py-5" : "md:bg-transparent md:py-5 bg-white/90 backdrop-blur-md shadow-sm py-5",
      )}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
          <Image 
            src="/logo-dark.png" 
            alt="Decide Digital" 
            width={150} 
            height={27} 
            style={{ width: '150px', height: '27px', maxWidth: '150px' }}
            priority 
          />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-neutral-800 hover:text-[#23CB98] transition-colors">
              Home
            </Link>
            <Link href="/sobre" className="text-neutral-800 hover:text-[#23CB98] transition-colors">
              Sobre
            </Link>
            <Link href="/contato" className="text-neutral-800 hover:text-[#23CB98] transition-colors">
              Contato
            </Link>
            <Button asChild>
              <Link href="/contato">Solicitar Orçamento</Link>
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-neutral-800" onClick={toggleMenu} aria-label="Toggle menu">
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden pt-5 pb-6 animate-fade-in">
            <div className="flex flex-col space-y-2">
              <Link
                href="/"
                className="text-neutral-800 hover:text-[#23CB98] transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                href="/sobre"
                className="text-neutral-800 hover:text-[#23CB98] transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Sobre
              </Link>
              <Link
                href="/contato"
                className="text-neutral-800 hover:text-[#23CB98] transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Contato
              </Link>
              <Button asChild className="w-full mt-2" onClick={() => setIsMenuOpen(false)}>
                <Link href="/contato">Solicitar Orçamento</Link>
              </Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}

export default Header

