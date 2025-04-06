"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { ChevronUp, MessageCircle } from "lucide-react"
import { cn } from "@/lib/utils"

const FixedActionButtons = () => {
  const [showScrollTop, setShowScrollTop] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  return (
    <div className="fixed bottom-6 w-full z-40 px-4 pointer-events-none">
      <div className="container mx-auto flex justify-between items-center">
        {/* WhatsApp Button */}
        <Link
          href="https://wa.me/5569992083972?text=Ol%C3%A1%20eu%20gostaria%20de%20informa%C3%A7%C3%B5es%20sobre%20as%20solu%C3%A7%C3%B5es%20da%20Decide%20Digital!"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center w-12 h-12 rounded-full bg-[#23CB98] text-white shadow-lg hover:bg-[#128C7E] transition-all duration-300 pointer-events-auto"
          aria-label="Contato via WhatsApp"
        >
          <MessageCircle size={24} />
        </Link>

        {/* Scroll to Top Button */}
        <button
          onClick={scrollToTop}
          className={cn(
            "flex items-center justify-center w-12 h-12 rounded-full bg-[#23CB98] text-white shadow-lg hover:bg-[#1ba77c] transition-all duration-300 pointer-events-auto",
            !showScrollTop && "opacity-0 translate-y-10 pointer-events-none"
          )}
          aria-label="Voltar ao topo"
        >
          <ChevronUp size={24} />
        </button>
      </div>
    </div>
  )
}

export default FixedActionButtons
