import ClientProviders from '@/components/ClientProviders/clientProviders';
import '@/app/globals.css';

export const metadata = {
  title: 'Real Estate Platform',
  description: 'Find your dream property',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ClientProviders>
          {children}
        </ClientProviders>
      </body>
    </html>
  )
}