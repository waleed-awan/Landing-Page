import Image from 'next/image'
import { ComponentProps } from 'react'

type CardProps = ComponentProps<'div'> & {
  title: string
  description: string
  iconPath: string
}

export function Card({ title, description, iconPath, ...props }: CardProps) {
  return (
    <div {...props}>
      <Image width={32} height={32} src={iconPath} alt="" />
      <h3 className="pb-2 pt-5 text-2xl font-bold lg:text-3xl">{title}</h3>
      <p className="text-center text-zinc-700">{description}</p>
    </div>
  )
}

type ReviewCardProps = ComponentProps<'div'> & {
  logoPath: string
  description: string
  name: string
  role: string
}

export function ReviewCard({
  logoPath,
  description,
  name,
  role,
  ...props
}: ReviewCardProps) {
  return (
    <div {...props}>
      <Image width={112} height={32} src={logoPath} alt="" />
      <div className="flex items-start gap-3">
        <Image src="/quote-card.png" width={16} height={13} alt="" />
        <p className="text-lg">{description}</p>
      </div>
      <div className="flex flex-col">
        <span className="text-lg font-bold">{name}</span>
        <span className="text-sm text-zinc-700">{role}</span>
      </div>
    </div>
  )
}
