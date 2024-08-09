'use client'

import ErrorComp from 'next/error'

export default function Page() {
  return (
    <html lang="en">
      <body>
        <ErrorComp statusCode={404} />
      </body>
    </html>
  )
}
