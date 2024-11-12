import { ComponentProps } from 'react'

type WrapperLayoutProps = ComponentProps<'div'>

export function WrapperLayout(props: WrapperLayoutProps) {
  return (
    <div
      className="mx-auto  w-full max-w-[1256px] px-5 md:px-10 lg:px-5"
      {...props}
    >
      {props.children}
    </div>
  )
}
