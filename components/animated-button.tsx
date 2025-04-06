"use client"

import type React from "react"

import { useState, useRef, type ReactNode } from "react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

interface AnimatedButtonProps {
  children: ReactNode
  className?: string
  variant?: "default" | "destructive" | "outline" | "secondary" | "ghost" | "link"
  size?: "default" | "sm" | "lg" | "icon"
  animation?: "pulse" | "shine" | "float" | "ripple"
  asChild?: boolean
  onClick?: () => void
  type?: "button" | "submit" | "reset"
}

const AnimatedButton = ({
  children,
  className,
  variant = "default",
  size = "default",
  animation = "float",
  asChild = false,
  onClick,
  type,
  ...props
}: AnimatedButtonProps) => {
  const [isRippling, setIsRippling] = useState(false)
  const [coords, setCoords] = useState({ x: -1, y: -1 })
  const buttonRef = useRef<HTMLButtonElement>(null)

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (animation === "ripple") {
      const rect = buttonRef.current?.getBoundingClientRect()
      if (rect) {
        setCoords({
          x: e.clientX - rect.left,
          y: e.clientY - rect.top,
        })
        setIsRippling(true)
        setTimeout(() => setIsRippling(false), 600)
      }
    }

    onClick && onClick()
  }

  const getAnimationClass = () => {
    switch (animation) {
      case "pulse":
        return "btn-pulse"
      case "shine":
        return "btn-shine"
      case "float":
        return "btn-float"
      case "ripple":
        return "btn-ripple"
      default:
        return ""
    }
  }

  // When asChild is true, we need to make sure we're not adding additional children
  // to the component, as Slot expects exactly one child element
  if (asChild) {
    return (
      <Button
        ref={buttonRef}
        className={cn(getAnimationClass(), className)}
        variant={variant}
        size={size}
        asChild={true}
        onClick={handleClick}
        type={type}
        {...props}
      >
        {children}
      </Button>
    )
  }

  return (
    <Button
      ref={buttonRef}
      className={cn(getAnimationClass(), className)}
      variant={variant}
      size={size}
      asChild={false}
      onClick={handleClick}
      type={type}
      {...props}
    >
      {children}
      {isRippling && animation === "ripple" && (
        <span
          className="ripple"
          style={{
            left: coords.x,
            top: coords.y,
          }}
        />
      )}
    </Button>
  )
}

export default AnimatedButton

