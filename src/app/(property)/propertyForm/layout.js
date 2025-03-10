import { Inter } from "next/font/google"
import { Providers } from "../provider"


const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Real Estate Property Listing",
  description: "Add your property details to list on our platform",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}

