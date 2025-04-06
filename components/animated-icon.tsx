import { cn } from "@/lib/utils"
import type { LucideIcon } from "lucide-react"

interface AnimatedIconProps {
  icon: LucideIcon
  className?: string
  size?: number
  animation?: "spin" | "bounce" | "none"
}

const AnimatedIcon = ({ icon: Icon, className, size = 24, animation = "none" }: AnimatedIconProps) => {
  const getAnimationClass = () => {
    switch (animation) {
      case "spin":
        return "icon-spin"
      case "bounce":
        return "icon-bounce"
      default:
        return ""
    }
  }

  return <Icon className={cn(getAnimationClass(), className)} size={size} />
}

export default AnimatedIcon

