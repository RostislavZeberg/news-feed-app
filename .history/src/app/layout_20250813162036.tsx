import './styles/globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'News Feed App',
  description: 'Infinite scroll news feed application',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}