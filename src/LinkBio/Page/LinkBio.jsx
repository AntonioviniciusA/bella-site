"use client";

import { BackgroundEffects } from "../Components/BackgroundEffects";
import { Header } from "../Components/HeaderLinkBio";
import { SocialLinks } from "../Components/SocialLinks";
import { SystemCard } from "../Components/SystemCard/SystemCard";
import { QuickLinkCard } from "../Components/QuickLinkCard";
import { ContactButton } from "../Components/ContactButton/ContactButton";
import { Footer } from "../Components/Footer";
import ImageMercadoPago from "../Images/MercadoPago.png";

const systems = [
  {
    title: "Sistema ERP Completo",
    description: "Gestão integrada para sua empresa",
    image: "/placeholder.svg?height=200&width=400",
    color: "from-blue-600 to-blue-800",
    icon: "Building2",
  },
  {
    title: "Dashboard Analytics",
    description: "Relatórios e métricas em tempo real",
    image: ImageMercadoPago,
    color: "from-purple-600 to-purple-800",
    icon: "BarChart3",
  },
  {
    title: "Gestão de Pessoas",
    description: "RH completo e folha de pagamento",
    image: "/placeholder.svg?height=200&width=400",
    color: "from-green-600 to-green-800",
    icon: "Users",
  },
];

const quickLinks = [
  {
    title: "Demonstração Gratuita",
    description: "Veja nossos sistemas em ação",
    color: "from-indigo-600 to-indigo-800",
  },
  {
    title: "Suporte Técnico",
    description: "Atendimento especializado 24/7",
    color: "from-emerald-600 to-emerald-800",
  },
];

export default function LinkBio() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
      <BackgroundEffects />

      <div className="relative z-10">
        <Header />
        <SocialLinks />

        {/* Main Systems Grid */}
        <div className="px-4 lg:px-8 mt-12 lg:mt-20">
          <div className="space-y-4 max-w-2xl mx-auto">
            {systems.map((system, index) => (
              <SystemCard
                key={index}
                title={system.title}
                description={system.description}
                image={system.image}
                color={system.color}
                icon={system.icon}
                delay={index * 100}
              />
            ))}
          </div>
        </div>

        {/* Quick Links */}
        <div className="px-4 lg:px-8 mt-12 lg:mt-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 max-w-4xl mx-auto">
            {quickLinks.map((link, index) => (
              <QuickLinkCard
                key={index}
                title={link.title}
                description={link.description}
                color={link.color}
                index={index}
                delay={(systems.length + index) * 100}
              />
            ))}
          </div>
        </div>

        {/* Contact Button */}
        <div className="text-center mt-12 lg:mt-16 pb-12">
          <ContactButton delay={(systems.length + quickLinks.length) * 100} />
        </div>

        <Footer />
      </div>
    </div>
  );
}
