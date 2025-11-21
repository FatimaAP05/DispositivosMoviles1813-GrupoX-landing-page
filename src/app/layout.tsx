import type {Metadata} from 'next';
import './globals.css';
import { Toaster } from "@/components/ui/toaster"
import { I18nProvider } from '@/context/i18n-context';

export const metadata: Metadata = {
  title: 'Vitalia',
  description: 'Connecting Families, Enhancing Care.',
  icons: {
    icon: 'https://media.discordapp.net/attachments/1286768073453342767/1441098476266983495/logo.png?ex=69208f0b&is=691f3d8b&hm=d9f95a426a248bc51ee8fcbd6277621ffdd2c9cf747905e415d6a391f797e050&=&format=webp&quality=lossless&width=750&height=750',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet" />
      </head>
      <body className="font-body antialiased">
        <I18nProvider>
          {children}
        </I18nProvider>
        <Toaster />
      </body>
    </html>
  );
}
