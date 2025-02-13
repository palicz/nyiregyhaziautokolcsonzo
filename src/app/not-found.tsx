import Link from 'next/link'
import Image from 'next/image'

export default function NotFound() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center px-4">
      <div className="text-center">
        <div className="flex justify-center mb-8">
          <Image
            src="/images/logo.png"
            alt="Nyíregyházi Autókölcsönző"
            width={120}
            height={120}
            className="w-auto h-auto"
          />
        </div>
        <h1 className="text-4xl font-bold mb-4">404</h1>
        <h2 className="text-xl font-semibold mb-4">A keresett oldal nem található</h2>
        <p className="text-gray-600 mb-8">
          Sajnáljuk, de a keresett oldal nem létezik vagy eltávolításra került.
        </p>
        <Link
          href="/"
          className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-green-600 hover:bg-green-700 transition-colors duration-200"
        >
          Vissza a főoldalra
        </Link>
      </div>
    </div>
  )
} 