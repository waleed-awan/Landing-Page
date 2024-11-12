import { WrapperLayout } from './WrapperLayout'

export function LogosSection() {
  const logos = [
    '/logo-1.png',
    '/logo-2.png',
    '/logo-3.png',
    '/logo-4.png',
    '/logo-5.png',
    '/logo-6.png',
  ]
  return (
    <WrapperLayout>
      <div className="py-4">
        <div className="flex w-full flex-wrap items-center justify-center gap-x-16 gap-y-8 border-b border-t py-6 lg:gap-16">
          {logos.map((logo, index) => {
            return <img className="py-4" key={index} src={logo} alt="" />
          })}
        </div>
      </div>
    </WrapperLayout>
  )
}
