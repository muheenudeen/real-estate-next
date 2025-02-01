import ClientProviders from '@/components/ClientProviders/clientProviders'
import Navbar from '@/components/Navbar/Navbar'
import '@/app/globals.css'
import Footer from '@/components/Footer/footer'

export const metadata = {
  title: 'Real Estate Platform',
  description: 'Find your dream property',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ClientProviders>
          <Navbar />
          {children}
          <Footer/>

        </ClientProviders>
      </body>
    </html>
  )
}

