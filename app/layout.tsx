import Navbar from '@/components/navbar';
import './globals.css';
import type { Metadata } from 'next';
import AuthProvider from '@/components/auth-provider';
import { ThemeProvider } from '@/components/theme-provider';

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
      <body>
        <ThemeProvider
          attribute='class'
          defaultTheme='system'
          enableSystem
          disableTransitionOnChange
        >
          <AuthProvider>
            <Navbar />

            {children}
          </AuthProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
