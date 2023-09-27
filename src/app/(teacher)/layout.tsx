import React from 'react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Teacher',
  description: 'Teacher routes',
};

export default function TeacherLayout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      Teacher header
      <br />
      {children}
      <br />
      Teacher footer
    </div>
  );
}
