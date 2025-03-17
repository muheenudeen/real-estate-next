import Providers from './provider';

import '@/app/globals.css';

export const metadata = {
  title: 'Real Estate Platform',
  description: 'Find your dream property',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  )
}