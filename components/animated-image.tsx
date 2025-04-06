"use client"

import Image from "next/image"
import { cn } from "@/lib/utils"

interface AnimatedImageProps {
  src: string
  alt: string
  width?: number
  height?: number
  fill?: boolean
  priority?: boolean
  className?: string
  animationDuration?: number
}

const AnimatedImage = ({
  src,
  alt,
  width = 500,
  height = 500,
  fill = false,
  priority = false,
  className,
  animationDuration = 5,
}: AnimatedImageProps) => {
  return (
    <div className={cn("relative", fill ? "w-full h-full" : "w-fit h-fit")} style={{ width: fill ? '100%' : 'auto', height: fill ? '100%' : 'auto' }}>
      <Image
        src={src}
        alt={alt}
        width={!fill ? width : undefined}
        height={!fill ? height : undefined}
        fill={fill}
        priority={priority}
        style={{ 
          objectFit: 'contain',
          '--duration': `${animationDuration}s`
        } as React.CSSProperties}
        className={cn(
          "transition-all grayscale-animation",
          className
        )}
      />
    </div>
  )
}

export default AnimatedImage
