import React from 'react';
import AnimatedSection from "@/components/animated-section";

interface HeroSectionProps {
  title: string;
  description?: string;
  children?: React.ReactNode;
  centerContent?: boolean;
}

/**
 * Standard hero section with consistent styling
 */
export function HeroSection({ 
  title, 
  description, 
  children,
  centerContent = true 
}: HeroSectionProps) {
  return (
    <section className="bg-gradient-to-b from-neutral-50 to-neutral-100 pt-12 pb-12 md:pt-32 md:pb-28">
      <div className="container mx-auto px-4 md:px-6">
        <AnimatedSection className={`${centerContent ? 'text-center max-w-3xl mx-auto' : ''}`}>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">{title}</h1>
          {description && (
            <p className="text-lg text-neutral-600">{description}</p>
          )}
          {children}
        </AnimatedSection>
      </div>
    </section>
  );
}
