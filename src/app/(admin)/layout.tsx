import React from 'react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Admin',
  description: 'Admin routes',
};

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      admin header
      <br />
      {children}
      <br />
      admin footer
    </div>
  );
}
