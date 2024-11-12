import Image from 'next/image'
import { ComponentProps } from 'react'

type DefaultSectionCardProps = ComponentProps<'div'> & {
  heading: string
  subheading: string
  iconPath: string
}

export function DefaultSectionCard({
  heading,
  subheading,
  iconPath,
  ...props
}: DefaultSectionCardProps) {
  return (
    <div {...props}>
      <Image width={32} height={32} alt="" src={iconPath} />
      <div className="flex flex-col">
        <span className="text-2xl font-bold lg:text-4xl">{heading}</span>
        <span className="text-sm lg:text-base">{subheading}</span>
      </div>
    </div>
  )
}
