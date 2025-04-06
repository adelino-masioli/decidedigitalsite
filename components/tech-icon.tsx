
"use client"
import Image from "next/image"
import { cn } from "@/lib/utils"
import { useState } from "react"

interface TechIconProps {
  name: string
  icon: string
  className?: string
}

const TechIcon = ({ name, icon, className }: TechIconProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className={cn("tech-icon flex flex-col items-center", className)}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="w-16 h-16 md:w-20 md:h-20 bg-white rounded-xl shadow-sm flex items-center justify-center p-3 mb-2 transition-all duration-300">
        <Image
          src={icon || "/placeholder.svg"}
          alt={name}
          width={64}
          height={64}
          className={cn(
            "w-full h-full object-contain transition-all duration-300",
            !isHovered && "filter grayscale"
          )}
        />
      </div>
      <span className="text-sm text-neutral-600">{name}</span>
    </div>
  )
}

export default TechIcon

