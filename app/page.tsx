import Link from "next/link"
import Image from "next/image"
import { Metadata } from "next"
import ServiceCard from "@/components/service-card"
import TechIcon from "@/components/tech-icon"
import AnimatedImage from "@/components/animated-image"
import AnimatedSection from "@/components/animated-section"
import AnimatedButton from "@/components/animated-button"
import AnimatedIcon from "@/components/animated-icon"
import { Code, Smartphone, Workflow, Database, Shield, Zap, Users, Clock, CheckCircle } from "lucide-react"

export const metadata: Metadata = {
  title: "Decide Digital | Soluções Digitais Inteligentes para sua Empresa",
  description: "Desenvolvimento Web, Aplicativos sob Medida, Automação de Processos e Cibersegurança para impulsionar o crescimento do seu negócio em Rondônia e todo o Brasil.",
  alternates: {
    canonical: "https://decidedigital.com.br",
  },
  openGraph: {
    title: "Decide Digital | Soluções Digitais Inteligentes para sua Empresa",
    description: "Desenvolvimento Web, Aplicativos sob Medida, Automação de Processos e Cibersegurança para impulsionar o crescimento do seu negócio.",
    url: "https://decidedigital.com.br",
    images: [
      {
        url: "/digital-solutions.webp",
        width: 1200,
        height: 630,
        alt: "Decide Digital - Soluções Digitais Inteligentes",
      },
    ],
  },
}

export default function Home() {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-neutral-50 to-neutral-100 pt-12 pb-0 md:pt-32 md:pb-28">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
            <AnimatedSection animation="slide-in-left">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4">
                Soluções Digitais <span className="text-[#23CB98]">Inteligentes</span> para sua Empresa Crescer
              </h1>
              <p className="text-lg md:text-xl text-neutral-600 mb-8">
                Desenvolvimento Web • Aplicativos sob Medida • Automação de Processos • Cibersegurança
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <AnimatedButton animation="pulse" size="lg" className="text-base" asChild>
                  <Link href="/contato">Solicitar Orçamento</Link>
                </AnimatedButton>
                <AnimatedButton animation="float" variant="outline" size="lg" className="text-base" asChild>
                  <Link href="/sobre">Conheça a Decide Digital</Link>
                </AnimatedButton>
              </div>
            </AnimatedSection>

            <AnimatedSection animation="slide-in-right" className="block">
              {/* Reduz a altura no mobile (default) e mantém 400px em md+ */}
              <div className="relative h-[300px] md:h-[400px] w-full overflow-hidden rounded-xl">
                <video 
                  className="w-full h-full object-cover" 
                  autoPlay 
                  loop 
                  muted 
                  playsInline
                >
                  <source src="/videos/2.mp4" type="video/mp4" />
                  Seu navegador não suporta vídeos HTML5.
                </video>
              </div>
            </AnimatedSection>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent"></div>
      </section>

      {/* Services Section */}
      <section className="py-10  md:py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <AnimatedSection className="text-center mb-8 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">O que fazemos</h2>
            <p className="text-neutral-600 max-w-2xl mx-auto">
              Oferecemos soluções completas em tecnologia para impulsionar o crescimento do seu negócio.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatedSection animation="slide-up" delay={0.1}>
              <ServiceCard
                title="Desenvolvimento Web"
                description="Sites, sistemas e plataformas web personalizadas com foco em performance e experiência do usuário."
                icon={Code}
              />
            </AnimatedSection>

            <AnimatedSection animation="slide-up" delay={0.2}>
              <ServiceCard
                title="Aplicativos sob Medida"
                description="Aplicativos mobile nativos e multiplataforma desenvolvidos para atender às necessidades específicas do seu negócio."
                icon={Smartphone}
              />
            </AnimatedSection>

            <AnimatedSection animation="slide-up" delay={0.3}>
              <ServiceCard
                title="Automação de Processos"
                description="Soluções No Code e Low Code para automatizar fluxos de trabalho e aumentar a produtividade da sua equipe."
                icon={Workflow}
              />
            </AnimatedSection>

            <AnimatedSection animation="slide-up" delay={0.4}>
              <ServiceCard
                title="Análise de Dados"
                description="Transforme dados em insights valiosos para tomada de decisões estratégicas com nossas soluções de análise."
                icon={Database}
              />
            </AnimatedSection>

            <AnimatedSection animation="slide-up" delay={0.5}>
              <ServiceCard
                title="Cibersegurança"
                description="Proteja seu negócio contra ameaças digitais com nossas soluções avançadas de segurança da informação."
                icon={Shield}
              />
            </AnimatedSection>

            <AnimatedSection animation="slide-up" delay={0.6}>
              <ServiceCard
                title="Soluções SaaS"
                description="Desenvolvimento de software como serviço (SaaS) e micro SaaS para necessidades específicas de mercado."
                icon={Zap}
              />
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-8 md:py-20 bg-neutral-50">
        <div className="container mx-auto px-4 md:px-6">
          <AnimatedSection className="text-center mb-8 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Tecnologias Utilizadas</h2>
            <p className="text-neutral-600 max-w-2xl mx-auto">
              Trabalhamos com as tecnologias mais modernas e eficientes do mercado.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-6 justify-items-center">
            <AnimatedSection animation="fade-in" delay={0.1}>
              <TechIcon name="n8n" icon="/n8n.png" />
            </AnimatedSection>
            <AnimatedSection animation="fade-in" delay={0.2}>
              <TechIcon name="Flutterflow" icon="/flutterflow.svg" />
            </AnimatedSection>
            <AnimatedSection animation="fade-in" delay={0.3}>
              <TechIcon name="Supabase" icon="/supabase.png" />
            </AnimatedSection>
            <AnimatedSection animation="fade-in" delay={0.4}>
              <TechIcon name="Python" icon="/python.webp" />
            </AnimatedSection>
            <AnimatedSection animation="fade-in" delay={0.5}>
              <TechIcon name="JavaScript" icon="/javascript.webp" />
            </AnimatedSection>
            <AnimatedSection animation="fade-in" delay={0.6}>
              <TechIcon name="Ruby on Rails" icon="/ror.png" />
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Differentials Section */}
      <section className="py-5 md:py-20 bg-white pb-12 md:pb-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            <AnimatedSection animation="slide-in-left" className="block">
              <div className="relative h-[300px] md:h-[400px] w-full overflow-hidden rounded-xl">
                <video 
                  className="w-full h-full object-cover" 
                  autoPlay 
                  loop 
                  muted 
                  playsInline
                >
                  <source src="/videos/3.mp4" type="video/mp4" />
                  Seu navegador não suporta vídeos HTML5.
                </video>
              </div>
            </AnimatedSection>

            <AnimatedSection animation="slide-in-right">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Nossos Diferenciais</h2>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="mt-1 bg-[#23CB98]/10 p-2 rounded-full">
                    <AnimatedIcon icon={Users} className="text-[#23CB98]" animation="bounce" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-1">Abordagem Centrada no Cliente</h3>
                    <p className="text-neutral-600">
                      Entendemos suas necessidades e desenvolvemos soluções personalizadas.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="mt-1 bg-[#23CB98]/10 p-2 rounded-full">
                    <AnimatedIcon icon={Clock} className="text-[#23CB98]" animation="spin" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-1">Entregas Rápidas</h3>
                    <p className="text-neutral-600">
                      Metodologias ágeis para entregar valor de forma contínua e eficiente para o seu negócio.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="mt-1 bg-[#23CB98]/10 p-2 rounded-full">
                    <AnimatedIcon icon={CheckCircle} className="text-[#23CB98]" animation="bounce" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-1">Qualidade Garantida</h3>
                    <p className="text-neutral-600">
                      Processos rigorosos de controle de qualidade para garantir soluções robustas e confiáveis.
                    </p>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-8 md:py-20 bg-neutral-900 text-white">
        <div className="container mx-auto px-4 md:px-6">
          <AnimatedSection className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Pronto para transformar seu negócio?</h2>
            <p className="text-neutral-300 mb-8">
              Entre em contato conosco hoje mesmo e descubra como podemos ajudar sua empresa a crescer com nossas
              soluções digitais inteligentes.
            </p>
            <AnimatedButton animation="shine" size="lg" className="text-base" asChild>
              <Link href="/contato">Solicitar Orçamento</Link>
            </AnimatedButton>
          </AnimatedSection>
        </div>
      </section>
    </div>
  )
}
