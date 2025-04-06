import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Contato | Fale com a Decide Digital",
  description: "Entre em contato com a Decide Digital para solicitar um orçamento ou tirar dúvidas sobre nossos serviços de desenvolvimento web, aplicativos, automação e cibersegurança.",
  alternates: {
    canonical: "https://decidedigital.com.br/contato",
  },
  openGraph: {
    title: "Contato | Fale com a Decide Digital",
    description: "Entre em contato com a Decide Digital para solicitar um orçamento ou tirar dúvidas sobre nossos serviços.",
    url: "https://decidedigital.com.br/contato",
    images: [
      {
        url: "/logo-dark.png",
        width: 1200,
        height: 630,
        alt: "Decide Digital - Contato",
      },
    ],
  },
}
