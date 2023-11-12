import { Url } from "next/dist/shared/lib/router/router";
import Link from "next/link";

export default function ExerciseLink({href, children} : {href: Url, children: React.ReactNode}) {
    return (
        <Link
        href={href}
        className="w-full px-3 py-2 text-white text-center hover:bg-gray-600"
        >
            {children}
        </Link>
    )
}