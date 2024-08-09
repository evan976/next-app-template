import { getTranslations } from 'next-intl/server'
import { ImageResponse } from 'next/og'

export default async function OpenGraphImage() {
  const t = await getTranslations()
  return new ImageResponse(
    <div tw="bg-white w-full h-full text-5xl text-black flex items-center justify-center">
      {t('metadata.title')}
    </div>,
    {
      width: 1200,
      height: 630,
    },
  )
}
