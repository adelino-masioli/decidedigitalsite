import Link from "next/link"
import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone  } from "lucide-react"
import TikTokIcon from "./tiktok"

const Footer = () => {
  return (
    <footer className="bg-neutral-900 text-neutral-200 pt-8 md:pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div>
            <h3 className="text-xl font-bold text-white mb-4">Decide Digital</h3>
            <p className="text-neutral-400 mb-6">Soluções digitais inteligentes para sua empresa crescer.</p>
            <div className="flex space-x-4">
              <Link
                href="https://www.facebook.com/decidedigitaloficial"
                target="_blank"
                rel="noopener noreferrer"
                className="text-neutral-400 hover:text-[#23CB98] transition-colors"
              >
                <Facebook size={30} strokeWidth={1}/>
                <span className="sr-only">Facebook</span>
              </Link>
              <Link
                href="https://www.instagram.com/decidedigitaloficial"
                target="_blank"
                rel="noopener noreferrer"
                className="text-neutral-400 hover:text-[#23CB98] transition-colors"
              >
                <Instagram size={30} strokeWidth={1} />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link
                href="https://www.tiktok.com/@decidedigitaloficial"
                target="_blank"
                rel="noopener noreferrer"
                className="text-neutral-400 hover:text-[#23CB98] transition-colors"
              >
                <TikTokIcon size={32} strokeWidth={2} />
                <span className="sr-only">Tiktok</span>
              </Link>
              <Link
                href="https://www.linkedin.com/company/96410978/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-neutral-400 hover:text-[#23CB98] transition-colors"
              >
                <Linkedin size={30} strokeWidth={1}/>
                <span className="sr-only">LinkedIn</span>
              </Link>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold text-white mb-4">Links Rápidos</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="text-neutral-400 hover:text-[#23CB98] transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/sobre" className="text-neutral-400 hover:text-[#23CB98] transition-colors">
                  Sobre
                </Link>
              </li>
              <li>
                <Link href="/contato" className="text-neutral-400 hover:text-[#23CB98] transition-colors">
                  Contato
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold text-white mb-4">Contato</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <MapPin size={20} className="text-[#23CB98] mt-1 flex-shrink-0" />
                <span className="text-neutral-400">Cacoal - Rondônia</span>
              </li>
              <li className="flex items-start space-x-3">
                <Mail size={20} className="text-[#23CB98] mt-1 flex-shrink-0" />
                <span className="text-neutral-400">contato@decidedigital.com.br</span>
              </li>
              <li className="flex items-start space-x-3">
                <Phone size={20} className="text-[#23CB98] mt-1 flex-shrink-0" />
                <span className="text-neutral-400">(69) 99208-3972</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-neutral-800 mt-12 pt-8 text-center text-neutral-500 text-sm">
          <p>© {new Date().getFullYear()} Decide Digital. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer

