import Image from 'next/image'
import Link from 'next/link'

export function Header() {
  return (
    <div className="flex w-full items-center justify-between bg-transparent">
      <div className="flex items-center justify-center gap-8 py-5">
        <Image width={128} height={32} src="/logo.png" alt="" />
        <nav className="hidden items-center justify-center gap-2 lg:flex ">
          <Link className="px-2 py-1 text-sm font-semibold" href="/">
            Features
          </Link>
          <Link className="px-2 py-1 text-sm font-semibold" href="/">
            Procing
          </Link>
          <Link className="px-2 py-1 text-sm font-semibold" href="/">
            Careers
          </Link>
          <Link className="px-2 py-1 text-sm font-semibold" href="/">
            Help
          </Link>
        </nav>
      </div>
      <div className="hidden items-center justify-center gap-3 md:flex">
        <Image width={135} height={40} src="/gplay.png" alt="" />
        <Image width={135} height={40} src="/astore.png" alt="" />
      </div>
    </div>
  )
}
