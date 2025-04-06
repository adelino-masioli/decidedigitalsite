import { cn } from "@/lib/utils"
import type { LucideIcon } from "lucide-react"
import AnimatedIcon from "@/components/animated-icon"

interface ServiceCardProps {
  title: string
  description: string
  icon: LucideIcon
  className?: string
}

const ServiceCard = ({ title, description, icon, className }: ServiceCardProps) => {
  return (
    <div
      className={cn(
        "service-card bg-white rounded-xl p-6 shadow-sm border border-neutral-100 transition-all duration-300 hover:shadow-lg",
        className,
      )}
    >
      <div className="w-12 h-12 bg-[#23CB98]/10 rounded-lg flex items-center justify-center mb-4 transition-all duration-300 group-hover:bg-[#23CB98]/20">
        <AnimatedIcon icon={icon} className="text-[#23CB98]" size={24} animation="spin" />
      </div>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-neutral-600">{description}</p>
    </div>
  )
}

export default ServiceCard

