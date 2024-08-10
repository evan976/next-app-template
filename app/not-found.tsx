'use client'

import Error from 'next/error'

export default function Page() {
  return (
    <html lang="en">
      <body>
        <Error statusCode={404} />
      </body>
    </html>
  )
}
