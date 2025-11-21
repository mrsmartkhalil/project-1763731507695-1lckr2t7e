import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import './globals.css';

export const metadata: Metadata = {
  title: 'Muhammad Afaq - AI Expert & Machine Learning Engineer',
  description: 'Portfolio website of Muhammad Afaq, an AI Expert specializing in machine learning, deep learning, and natural language processing.',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
