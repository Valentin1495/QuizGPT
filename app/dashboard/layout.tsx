import '@/app/globals.css';
import type { Metadata } from 'next';
import Navbar from '@/components/navbar';
import { Toaster } from 'react-hot-toast';

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className='max-w-7xl mx-auto p-10'>
        <Toaster />
        <Navbar />
        {children}
      </body>
    </html>
  );
}
