import type { Metadata } from 'next'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import ExerciseList from "@/components/ExerciseList";

export const metadata: Metadata = {
  title: 'Przegląd zadań',
  description: 'By Filip Sankowski',
}

export default function RootLayout({children,}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pl">
      <body className="flex flex-col min-h-screen">
        <div>
          <Header />
        </div>
      

        <div className="flex flex-row flex-nowrap grow">
          <div className="bg-gray-500 w-1/6">
          <ExerciseList />
          </div>

          <div className="bg-gray-300 w-5/6">
            {children}
          </div>
        </div>

        <div className="bottom-0">
          <Footer />
        </div>        
      </body>
    </html>
  )
}
