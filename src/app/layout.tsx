import { Metadata } from "next"
import '@/app/globals.css'

export const metadata: Metadata = {
  title: "Recipe page"
}

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html className='box-border m-0 p-0'>
      <body className='bg-(--beige) flex justify-center'>
        {children}
      </body>
    </html>
  )
}
