import Link from "next/link"

interface TileProps {
  title: string
  href: string
}

export default function Tile({ title, href }: TileProps) {
  return (
    <Link href={href} className="block p-6 bg-white rounded-lg shadow-md hover:bg-gray-50">
      <h2 className="text-xl font-semibold text-gray-900">{title}</h2>
    </Link>
  )
}

