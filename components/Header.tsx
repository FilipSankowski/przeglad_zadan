import Link from "next/link";

export default function Header() {
  return (
    <div className="w-full bg-teal-600 text-white p-4">
      <Link
      href="/"
      className="w-full h-full"
      >
        <span className="py-4 px-2">Przegląd zadań</span>
      </Link>
    </div>
    
  )
}