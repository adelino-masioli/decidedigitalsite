import React from 'react';
import AnimatedSection from "@/components/animated-section";

interface ContentSectionProps {
  title?: string;
  description?: string;
  children: React.ReactNode;
  bgColor?: 'white' | 'neutral-50' | 'neutral-900';
  textColor?: 'default' | 'white';
  centerTitle?: boolean;
}

/**
 * Standard content section with consistent styling
 */
export function ContentSection({ 
  title, 
  description, 
  children, 
  bgColor = 'white',
  textColor = 'default',
  centerTitle = true
}: ContentSectionProps) {
  const bgColorClass = `bg-${bgColor}`;
  const textColorClass = textColor === 'white' ? 'text-white' : '';
  const descriptionColorClass = textColor === 'white' ? 'text-neutral-300' : 'text-neutral-600';
  
  return (
    <section className={`py-8 md:py-20 ${bgColorClass} ${textColorClass}`}>
      <div className="container mx-auto px-4 md:px-6">
        {(title || description) && (
          <AnimatedSection className={`${centerTitle ? 'text-center' : ''} mb-8 md:mb-16`}>
            {title && <h2 className="text-3xl md:text-4xl font-bold mb-4">{title}</h2>}
            {description && (
              <p className={`${descriptionColorClass} ${centerTitle ? 'max-w-2xl mx-auto' : ''}`}>
                {description}
              </p>
            )}
          </AnimatedSection>
        )}
        {children}
      </div>
    </section>
  );
}
