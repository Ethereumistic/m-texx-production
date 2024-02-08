export const metadata = {
  title: 'M-Texx Textile Recycling',
  description: 'M-Texx Recycling Textile',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
