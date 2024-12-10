import '@/styles/globals.css'
import { Inter } from 'next/font/google'
import { ThemeProvider } from "@/components/ThemeProvider"
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Anasimos Abrha - Luxury Portfolio',
  description: 'Professional portfolio of Anasimos Abrha, Tech-Savvy Professional | Cloud Architect | IT Support Specialist | Virtual Assistant | Graphic Designer',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <div className="flex flex-col min-h-screen">
            <Navbar />
            <main className="flex-grow pt-20 max-w-6xl mx-auto w-full">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}

