import Image from 'next/image'
import { WrapperLayout } from './WrapperLayout'
import Link from 'next/link'

export function Footer() {
  return (
    <div className="bg-black py-16">
      <WrapperLayout>
        <div className="flex w-full flex-wrap justify-between gap-8 lg:flex-nowrap lg:gap-0">
          <div className="flex flex-col gap-6 text-white">
            <Image width={32} height={32} alt="" src="/logo-footer.png" />
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-8">
                <Link href="/">Download Now</Link>
                <Link href="/">Licence</Link>
              </div>

              <div className="flex flex-wrap items-center gap-3 lg:gap-8">
                <Link href="/">About</Link>
                <Link href="/">Features</Link>
                <Link href="/">Pricing</Link>
                <Link href="/">News</Link>
                <Link href="/">Help</Link>
                <Link href="/">Contact</Link>
              </div>
            </div>
            <span className="text-sm text-zinc-300">
              © Developed by João Knisspell
            </span>
          </div>
          <div className="flex flex-col gap-4">
            <span className="text-lg font-semibold text-zinc-300">
              Get the App
            </span>
            <Image width={135} src="/gplay.png" height={40} alt="" />
            <Image width={135} src="/astore.png" height={40} alt="" />
          </div>
        </div>
      </WrapperLayout>
    </div>
  )
}
