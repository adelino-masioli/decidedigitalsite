import React from 'react';
import Link from "next/link";
import AnimatedSection from "@/components/animated-section";
import AnimatedButton from "@/components/animated-button";

interface CTASectionProps {
  title: string;
  description: string;
  buttonText: string;
  buttonLink: string;
  buttonAnimation?: string;
}

/**
 * Standard call-to-action section with consistent styling
 */
export function CTASection({ 
  title, 
  description, 
  buttonText, 
  buttonLink,
  buttonAnimation = "shine"
}: CTASectionProps) {
  return (
    <section className="py-8 md:py-20 bg-neutral-900 text-white">
      <div className="container mx-auto px-4 md:px-6">
        <AnimatedSection className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">{title}</h2>
          <p className="text-neutral-300 mb-8">{description}</p>
          <AnimatedButton animation={buttonAnimation} size="lg" className="text-base" asChild>
            <Link href={buttonLink}>{buttonText}</Link>
          </AnimatedButton>
        </AnimatedSection>
      </div>
    </section>
  );
}
