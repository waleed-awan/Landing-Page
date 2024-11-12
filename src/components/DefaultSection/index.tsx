import { ComponentProps } from 'react'
import { WrapperLayout } from '../WrapperLayout'

type DefaultSectionProps = ComponentProps<'div'> & {
  headline: string
  subheadline: string
}

export function DefaultSection({
  headline,
  subheadline,
  ...props
}: DefaultSectionProps) {
  return (
    <div className="pt-12 lg:py-20" {...props}>
      <WrapperLayout>
        <div className="flex w-full flex-wrap justify-between gap-8 md:flex-col md:items-start lg:flex-row lg:items-center">
          <div className="flex flex-1 flex-col gap-2">
            <h3 className="text-3xl font-bold lg:text-5xl">{headline}</h3>
            <span className="lg:text-lg">{subheadline}</span>
          </div>
          {props.children}
        </div>
      </WrapperLayout>
    </div>
  )
}
