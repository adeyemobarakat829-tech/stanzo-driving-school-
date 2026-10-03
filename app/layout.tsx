import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Stanzo Driving School | Driving Lessons in Mbombela',
  description: 'Stanzo Driving School | Driving Lessons in Mbombela',
  icons: { icon: '/logo.svg' },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
