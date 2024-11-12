'use client'

import { DefaultSection } from './DefaultSection'
import { DefaultSectionCard } from './DefaultSection/Card'

import { useLayoutEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

export function AchievmentsSection() {
  const cards = [
    {
      heading: '10,000+',
      subheading: 'Downloads per day',
      iconPath: '/icon-1.png',
    },
    {
      heading: '2 Million',
      subheading: 'Users',
      iconPath: '/icon-2.png',
    },
    {
      heading: '500+',
      subheading: 'Clients',
      iconPath: '/icon-3.png',
    },
    {
      heading: '140',
      subheading: 'Countries',
      iconPath: '/icon-4.png',
    },
  ]

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger)
    gsap.to('.anim-default-section-card', {
      opacity: 1,
      scale: 1,
      stagger: 0.3,
      scrollTrigger: {
        trigger: '.achieve-section',
        // markers: true,
        scrub: true,
        start: 'top 40%',
        end: 'bottom 40%',
      },
    })
  }, [])
  return (
    <div className="achieve-section">
      <DefaultSection
        headline="Our 18 years of achievements"
        subheadline="With our super powers we have reached this"
      >
        <div className="flex flex-1 flex-wrap gap-x-8 gap-y-10 lg:justify-end">
          {cards.map((card, index) => {
            return (
              <DefaultSectionCard
                className="anim-default-section-card flex w-[280px] scale-50 items-center justify-start gap-4 opacity-0"
                heading={card.heading}
                subheading={card.subheading}
                iconPath={card.iconPath}
                key={index}
              />
            )
          })}
        </div>
      </DefaultSection>
    </div>
  )
}
