import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Anek_Malayalam } from 'next/font/google'
import './globals.css'


const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Junior College Fest',
  description: 'JAMIA JUNIOR FEST',
}

const anekMalayalam = Anek_Malayalam({
  subsets: ['latin', 'malayalam'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800'],
  display: 'swap',
})


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={anekMalayalam.className}>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
