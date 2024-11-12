'use client'

import Image from 'next/image'
import { DefaultSection } from './DefaultSection'

import { useLayoutEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

export function IntegrationsSection() {
  const logos = [
    '/logo-7.png',
    '/logo-8.png',
    '/logo-9.png',
    '/logo-10.png',
    '/logo-11.png',
    '/logo-12.png',
    '/logo-13.png',
  ]
  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger)
    gsap.to('.anim-icon', {
      opacity: 1,
      y: 0,
      ease: 'back.out',
      stagger: 0.2,
      duration: 0.5,
      scrollTrigger: {
        trigger: '.integrations-section',
        start: 'top 20%',
        end: 'bottom 40%',
      },
    })
  }, [])
  return (
    <div className="integrations-section">
      <DefaultSection
        headline="Easy integrations with 170+ tools"
        subheadline="Connect Landify with your favourite tools that you use daily and keep things on track."
      >
        <div className="flex h-[168px] w-full items-center justify-center bg-[url('/vector.png')] bg-cover bg-center bg-no-repeat md:w-1/2 lg:h-[270px] lg:w-full lg:max-w-[696px] lg:bg-auto">
          <div className="flex flex-wrap items-center justify-center gap-9 md:gap-12 lg:max-w-[448px] lg:gap-16">
            {logos.map((logo, index) => {
              return (
                <Image
                  className="anim-icon w-10 translate-y-4 opacity-0 lg:w-16"
                  width={64}
                  height={64}
                  alt=""
                  src={logo}
                  key={index}
                />
              )
            })}
          </div>
        </div>
      </DefaultSection>
    </div>
  )
}
