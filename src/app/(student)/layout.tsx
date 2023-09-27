import React from 'react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Student',
  description: 'Student routes',
};

export default function StudentLayout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      Student header
      <br />
      {children}
      <br />
      Student footer
    </div>
  );
}
