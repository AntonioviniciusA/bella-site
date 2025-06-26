"use client";

import { FadeIn } from "../Animations";

export function SystemCard({
  title,
  description,
  image,
  color,
  icon: Icon,
  delay,
}) {
  return (
    <FadeIn delay={delay}>
      <div
        className={`group cursor-pointer transition-all duration-300 hover:scale-105 bg-gradient-to-r ${color} rounded-lg border-0 overflow-hidden shadow-xl`}>
        <div className="relative h-32 lg:h-40 overflow-hidden">
          <img
            src={image || "/placeholder.svg"}
            alt={title}
            fill
            className="object-cover group-hover:scale-110 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-300" />
          <div className="absolute inset-0 flex items-center justify-between p-4 lg:p-6">
            <div className="text-white">
              <h3 className="font-bold text-lg lg:text-xl mb-1">{title}</h3>
              <p className="text-sm lg:text-base opacity-90">{description}</p>
            </div>
            <Icon className="w-8 h-8 lg:w-10 lg:h-10 text-white/80" />
          </div>
        </div>
      </div>
    </FadeIn>
  );
}
