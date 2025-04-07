import React from 'react';

interface PageContainerProps {
  children: React.ReactNode;
}

/**
 * Standard page container with consistent top padding
 */
export function PageContainer({ children }: PageContainerProps) {
  return <div className="pt-16">{children}</div>;
}
