import { LoaderCircleIcon } from 'lucide-react'

export default function Loading() {
  return (
    <div className="flex items-center justify-center h-screen w-screen">
      <LoaderCircleIcon className="size-8 animate-spin text-neutral-400" />
    </div>
  )
}
