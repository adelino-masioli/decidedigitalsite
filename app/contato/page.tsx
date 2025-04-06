"use client"

import type React from "react"

import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import AnimatedSection from "@/components/animated-section"
import AnimatedButton from "@/components/animated-button"
import AnimatedIcon from "@/components/animated-icon"
import { Mail, MapPin, Phone, Send } from "lucide-react"

export default function ContatoPage() {
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    telefone: "",
    mensagem: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    // Formatar a mensagem para o WhatsApp
    const whatsappMessage = encodeURIComponent(
      `Olá, meu nome é ${formData.nome}. \n\nE-mail: ${formData.email} \nTelefone: ${formData.telefone} \n\nMensagem: ${formData.mensagem}`,
    )

    // Número de WhatsApp da empresa (substitua pelo número real)
    const whatsappNumber = "5569992083972"

    // Abrir o WhatsApp com a mensagem pré-preenchida
    window.open(`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`, "_blank")
  }

  // Função para criar efeito de ripple nos inputs
  const createRipple = (e: React.MouseEvent<HTMLDivElement>) => {
    const input = e.currentTarget
    const rect = input.getBoundingClientRect()

    const circle = document.createElement("span")
    const diameter = Math.max(input.clientWidth, input.clientHeight)

    circle.style.width = circle.style.height = `${diameter}px`
    circle.style.left = `${e.clientX - rect.left - diameter / 2}px`
    circle.style.top = `${e.clientY - rect.top - diameter / 2}px`
    circle.classList.add("ripple")

    const ripple = input.getElementsByClassName("ripple")[0]
    if (ripple) {
      ripple.remove()
    }

    input.appendChild(circle)
  }

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-neutral-50 to-neutral-100 pt-24 pb-20 md:pt-32 md:pb-28">
        <div className="container mx-auto px-4 md:px-6">
          <AnimatedSection className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Fale com a Decide Digital</h1>
            <p className="text-lg text-neutral-600">
              Entre em contato conosco e descubra como podemos ajudar sua empresa a crescer com nossas soluções digitais
              inteligentes.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <AnimatedSection animation="slide-in-left">
              <div className="bg-neutral-50 p-8 rounded-xl h-full">
                <h2 className="text-2xl font-bold mb-6">Informações de Contato</h2>

                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="mt-1 bg-[#23CB98]/10 p-2 rounded-full">
                      <AnimatedIcon icon={MapPin} className="text-[#23CB98] h-5 w-5" animation="bounce" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-1">Endereço</h3>
                      <p className="text-neutral-600">Cacoal - Rondônia</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="mt-1 bg-[#23CB98]/10 p-2 rounded-full">
                      <AnimatedIcon icon={Mail} className="text-[#23CB98] h-5 w-5" animation="bounce" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-1">E-mail</h3>
                      <p className="text-neutral-600">contato@decidedigital.com.br</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="mt-1 bg-[#23CB98]/10 p-2 rounded-full">
                      <AnimatedIcon icon={Phone} className="text-[#23CB98] h-5 w-5" animation="bounce" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-1">Telefone</h3>
                      <p className="text-neutral-600">(69) 99208-3972</p>
                    </div>
                  </div>
                </div>

                <div className="mt-10">
                  <h3 className="text-lg font-semibold mb-4">Horário de Atendimento</h3>
                  <p className="text-neutral-600 mb-2">Segunda a Sexta: 8h às 18h</p>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection animation="slide-in-right">
              <h2 className="text-2xl font-bold mb-6">Envie uma Mensagem</h2>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="relative btn-ripple" onClick={createRipple}>
                  <label htmlFor="nome" className="block text-sm font-medium text-neutral-700 mb-1">
                    Nome Completo
                  </label>
                  <Input
                    id="nome"
                    name="nome"
                    value={formData.nome}
                    onChange={handleChange}
                    placeholder="Digite seu nome completo"
                    required
                    className="transition-all duration-300 focus:ring-[#23CB98] focus:border-[#23CB98] focus:ring-2"
                  />
                </div>

                <div className="relative btn-ripple" onClick={createRipple}>
                  <label htmlFor="email" className="block text-sm font-medium text-neutral-700 mb-1">
                    E-mail
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    suppressHydrationWarning
                    onChange={handleChange}
                    placeholder="Digite seu e-mail"
                    required
                    className="transition-all duration-300 focus:ring-[#23CB98] focus:border-[#23CB98] focus:ring-2"
                  />
                </div>

                <div className="relative btn-ripple" onClick={createRipple}>
                  <label htmlFor="telefone" className="block text-sm font-medium text-neutral-700 mb-1">
                    Telefone
                  </label>
                  <Input
                    id="telefone"
                    name="telefone"
                    value={formData.telefone}
                    onChange={handleChange}
                    placeholder="Digite seu telefone"
                    required
                    className="transition-all duration-300 focus:ring-[#23CB98] focus:border-[#23CB98] focus:ring-2"
                  />
                </div>

                <div className="relative btn-ripple" onClick={createRipple}>
                  <label htmlFor="mensagem" className="block text-sm font-medium text-neutral-700 mb-1">
                    Mensagem
                  </label>
                  <Textarea
                    id="mensagem"
                    name="mensagem"
                    value={formData.mensagem}
                    onChange={handleChange}
                    placeholder="Digite sua mensagem"
                    rows={5}
                    required
                    className="transition-all duration-300 focus:ring-[#23CB98] focus:border-[#23CB98] focus:ring-2"
                  />
                </div>

                <AnimatedButton type="submit" animation="ripple" className="w-full" size="lg">
                  <Send className="mr-2 h-4 w-4" /> Enviar para o WhatsApp
                </AnimatedButton>
              </form>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-neutral-50">
        <div className="container mx-auto px-4 md:px-6">
          <AnimatedSection className="text-center">
            <h2 className="text-3xl font-bold mb-4">Nossa Localização</h2>
            <p className="text-neutral-600 max-w-2xl mx-auto">
              Estamos localizados em Cacoal, Rondônia, mas atendemos clientes em todo o Brasil.
            </p>
          </AnimatedSection>

        </div>
      </section>
    </div>
  )
}

