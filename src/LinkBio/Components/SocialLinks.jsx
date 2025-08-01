"use client";

import { FadeIn } from "./Animations";
import {
  Instagram,
  Facebook,
  Linkedin,
  Youtube,
  MessageCircle,
} from "lucide-react";

const socialLinks = [
  {
    name: "Instagram",
    icon: Instagram,
    color: "from-pink-500 to-rose-500",
    url: "https://www.instagram.com/bellasolucoesoficial",
  },
  {
    name: "Facebook",
    icon: Facebook,
    color: "from-blue-600 to-blue-700",
    url: "https://www.facebook.com/bellasolucoes",
  },
  {
    name: "LinkedIn",
    icon: Linkedin,
    color: "from-blue-700 to-blue-800",
    url: "#",
  },
  {
    name: "YouTube",
    icon: Youtube,
    color: "from-red-600 to-red-700",
    url: "https://www.youtube.com/@bellasolucoesoficial",
  },
  {
    name: "WhatsApp",
    icon: MessageCircle,
    color: "from-green-500 to-green-600",
    url: "https://api.whatsapp.com/send/?phone=%2B556141412287&text&type=phone_number&app_absent=0",
  },
];

export function SocialLinks() {
  return (
    <div className="px-4 lg:px-8 mt-8 lg:mt-12">
      <div className="flex justify-center space-x-4 lg:space-x-6">
        {socialLinks.map((social, index) => (
          <FadeIn key={index} delay={index * 50}>
            <div
              className={`w-12 h-12 lg:w-14 lg:h-14 rounded-full bg-gradient-to-r ${social.color} p-0.5 cursor-pointer group hover:scale-110 transition-all duration-300 transform`}>
              <div className="w-full h-full rounded-full bg-slate-900 flex items-center justify-center group-hover:bg-transparent transition-colors duration-300">
                <social.icon className="w-5 h-5 lg:w-6 lg:h-6 text-white" />
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </div>
  );
}
