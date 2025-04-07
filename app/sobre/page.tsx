import Image from "next/image"
import Link from "next/link"
import { Metadata } from "next"
import AnimatedSection from "@/components/animated-section"
import AnimatedButton from "@/components/animated-button"
import AnimatedImage from "@/components/animated-image"
import AnimatedIcon from "@/components/animated-icon"
import { CheckCircle } from "lucide-react"

export const metadata: Metadata = {
  title: "Sobre a Decide Digital | Nossa História e Missão",
  description: "Conheça a história da Decide Digital, nossa missão, valores e como nos tornamos referência em soluções digitais inteligentes em Rondônia e no Brasil.",
  alternates: {
    canonical: "https://decidedigital.com.br/sobre",
  },
  openGraph: {
    title: "Sobre a Decide Digital | Nossa História e Missão",
    description: "Conheça a história da Decide Digital, nossa missão, valores e como nos tornamos referência em soluções digitais inteligentes.",
    url: "https://decidedigital.com.br/sobre",
    images: [
      {
        url: "/a-timeline-infographic-for-nossa-histori.webp",
        width: 1200,
        height: 630,
        alt: "História da Decide Digital",
      },
    ],
  },
}

export default function SobrePage() {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-neutral-50 to-neutral-100 pt-12 pb-12 md:pt-32 md:pb-28">
        <div className="container mx-auto px-4 md:px-6">
          <AnimatedSection className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Sobre a Decide Digital</h1>
            <p className="text-lg text-neutral-600">
              Somos uma empresa de tecnologia especializada em desenvolvimento web, aplicativos personalizados,
              automações e cibersegurança.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* History Section */}
      <section className="py-8 md:py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection animation="slide-in-left">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Nossa História</h2>
              <p className="text-neutral-600 mb-6">
                A Decide Digital nasceu em 2020 como uma agência de marketing digital em Cacoal, Rondônia. Com o passar
                do tempo, identificamos a necessidade de soluções tecnológicas mais robustas e personalizadas para
                nossos clientes.
              </p>
              <p className="text-neutral-600 mb-6">
                Em 2022, expandimos nosso foco para o desenvolvimento de software e automações, transformando-nos em uma
                empresa de tecnologia completa, capaz de atender às demandas digitais mais complexas do mercado.
              </p>
              <p className="text-neutral-600">
                Hoje, a Decide Digital atua em todo o território nacional, oferecendo soluções inovadoras que ajudam
                empresas de todos os portes a crescerem e se destacarem no ambiente digital.
              </p>
            </AnimatedSection>

            <AnimatedSection animation="slide-in-right" className="block">
              <div className="relative h-[300px] md:h-[400px] w-full overflow-hidden rounded-xl">
                <video 
                  className="w-full h-full object-cover" 
                  autoPlay 
                  loop 
                  muted 
                  playsInline
                >
                  <source src="/videos/1.mp4" type="video/mp4" />
                  Seu navegador não suporta vídeos HTML5.
                </video>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-8 md:py-20 bg-neutral-50">
        <div className="container mx-auto px-4 md:px-6">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Nossa Trajetória</h2>
            <p className="text-neutral-600 max-w-2xl mx-auto">Conheça os principais marcos da nossa história.</p>
          </AnimatedSection>

          <div className="max-w-3xl mx-auto">
            {/* Timeline Item */}
            <AnimatedSection
              animation="fade-in"
              delay={0.1}
              className="relative pl-10 pb-10 border-l-2 border-[#23CB98]"
            >
              <div className="absolute left-[-8px] top-0 w-4 h-4 bg-[#23CB98] rounded-full"></div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-bold mb-1">2020</h3>
                <p className="text-neutral-600">
                  Fundação da Decide Digital como agência de marketing digital em Cacoal, Rondônia.
                </p>
              </div>
            </AnimatedSection>

            {/* Timeline Item */}
            <AnimatedSection
              animation="fade-in"
              delay={0.2}
              className="relative pl-10 pb-10 border-l-2 border-[#23CB98]"
            >
              <div className="absolute left-[-8px] top-0 w-4 h-4 bg-[#23CB98] rounded-full"></div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-bold mb-1">2021</h3>
                <p className="text-neutral-600">
                  Expansão dos serviços para incluir desenvolvimento web e automações básicas.
                </p>
              </div>
            </AnimatedSection>

            {/* Timeline Item */}
            <AnimatedSection
              animation="fade-in"
              delay={0.3}
              className="relative pl-10 pb-10 border-l-2 border-[#23CB98]"
            >
              <div className="absolute left-[-8px] top-0 w-4 h-4 bg-[#23CB98] rounded-full"></div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-bold mb-1">2022</h3>
                <p className="text-neutral-600">
                  Transformação em empresa de tecnologia com foco em desenvolvimento de software e automações avançadas.
                </p>
              </div>
            </AnimatedSection>

            {/* Timeline Item */}
            <AnimatedSection
              animation="fade-in"
              delay={0.4}
              className="relative pl-10 pb-10 border-l-2 border-[#23CB98]"
            >
              <div className="absolute left-[-8px] top-0 w-4 h-4 bg-[#23CB98] rounded-full"></div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-bold mb-1">2023</h3>
                <p className="text-neutral-600">
                  Início da atuação nacional e lançamento das primeiras soluções SaaS próprias.
                </p>
              </div>
            </AnimatedSection>

            {/* Timeline Item */}
            <AnimatedSection animation="fade-in" delay={0.5} className="relative pl-10 border-l-2 border-[#23CB98]">
              <div className="absolute left-[-8px] top-0 w-4 h-4 bg-[#23CB98] rounded-full"></div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-bold mb-1">2024</h3>
                <p className="text-neutral-600">
                  Consolidação como referência em soluções digitais inteligentes, com foco em inovação e resultados.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values Section */}
      <section className="py-8 md:py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Missão, Visão e Valores</h2>
            <p className="text-neutral-600 max-w-2xl mx-auto">Conheça os princípios que norteiam nosso trabalho.</p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 md:gap-8">
            <AnimatedSection animation="slide-up" delay={0.1}>
              <div className="bg-neutral-50 p-8 rounded-xl h-full">
                <h3 className="text-2xl font-bold mb-4 text-[#23CB98]">Missão</h3>
                <p className="text-neutral-600">
                  Transformar negócios através de soluções digitais inteligentes, impulsionando o crescimento e a
                  inovação de nossos clientes.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection animation="slide-up" delay={0.2}>
              <div className="bg-neutral-50 p-8 rounded-xl h-full">
                <h3 className="text-2xl font-bold mb-4 text-[#23CB98]">Visão</h3>
                <p className="text-neutral-600">
                  Ser reconhecida como referência nacional em soluções tecnológicas inovadoras, contribuindo para a
                  transformação digital das empresas brasileiras.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection animation="slide-up" delay={0.3}>
              <div className="bg-neutral-50 p-8 rounded-xl h-full">
                <h3 className="text-2xl font-bold mb-4 text-[#23CB98]">Valores</h3>
                <ul className="text-neutral-600 space-y-2">
                  <li className="flex items-start gap-2">
                    <AnimatedIcon
                      icon={CheckCircle}
                      className="text-[#23CB98] h-5 w-5 mt-0.5 flex-shrink-0"
                      animation="bounce"
                    />
                    <span>Inovação constante</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AnimatedIcon
                      icon={CheckCircle}
                      className="text-[#23CB98] h-5 w-5 mt-0.5 flex-shrink-0"
                      animation="bounce"
                    />
                    <span>Excelência técnica</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AnimatedIcon
                      icon={CheckCircle}
                      className="text-[#23CB98] h-5 w-5 mt-0.5 flex-shrink-0"
                      animation="bounce"
                    />
                    <span>Foco no cliente</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AnimatedIcon
                      icon={CheckCircle}
                      className="text-[#23CB98] h-5 w-5 mt-0.5 flex-shrink-0"
                      animation="bounce"
                    />
                    <span>Ética e transparência</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AnimatedIcon
                      icon={CheckCircle}
                      className="text-[#23CB98] h-5 w-5 mt-0.5 flex-shrink-0"
                      animation="bounce"
                    />
                    <span>Compromisso com resultados</span>
                  </li>
                </ul>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-8 md:py-20 bg-neutral-900 text-white">
        <div className="container mx-auto px-4 md:px-6">
          <AnimatedSection className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Vamos trabalhar juntos?</h2>
            <p className="text-neutral-300 mb-8">
              Entre em contato conosco e descubra como podemos ajudar sua empresa a alcançar seus objetivos digitais.
            </p>
            <AnimatedButton animation="shine" size="lg" className="text-base" asChild>
              <Link href="/contato">Fale Conosco</Link>
            </AnimatedButton>
          </AnimatedSection>
        </div>
      </section>
    </div>
  )
}

