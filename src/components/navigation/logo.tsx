import Image from "next/image"
import Link from "next/link"

const Logo = () => {
  return (
    <Link href="/" className="flex gap-2 items-center justify-center">
        <Image src="/avatar.jpeg" alt="logo" width={40} height={40} className="object-cover rounded-full border-2"/>
        <span className="text-sm font-semibold">MOHAMMED</span>
    </Link>
  )
}

export default Logo
