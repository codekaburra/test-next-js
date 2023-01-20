import Link from 'next/link';
import './globals.css'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const header = (<header><div><h1>EM Tools</h1></div></header>);
  const footer = (<footer><div><Link href="/">Back to Home</Link><h3>Developed By EM @ 2023</h3></div></footer>);
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body>
        {header}
        {children}
        {footer}
      </body>
    </html>
  )
}
