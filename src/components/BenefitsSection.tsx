'use client'

import { Card } from './Card'
import { WrapperLayout } from './WrapperLayout'

import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useLayoutEffect } from 'react'

export function BenefitsSection() {
  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger)
    gsap.to('.anim-card', {
      y: 0,
      opacity: 1,
      stagger: 0.2,
      scrollTrigger: {
        trigger: '.cards-wrapper',
        // markers: true,
        start: 'top 55%',
        end: 'bottom 70%',
        scrub: true,
      },
    })

    return () => gsap.killTweensOf('.anim-card')
  }, [])

  const cards = [
    {
      title: 'Robust workflow',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed erat nibh tristique ipsum.',
      iconPath: '/icon-1.png',
    },
    {
      title: 'Flexibility',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed erat nibh tristique ipsum.',
      iconPath: '/icon-2.png',
    },
    {
      title: 'User friendly',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed erat nibh tristique ipsum.',
      iconPath: '/icon-3.png',
    },
    {
      title: 'Multiple layouts',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed erat nibh tristique ipsum.',
      iconPath: '/icon-4.png',
    },
    {
      title: 'Better components',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed erat nibh tristique ipsum.',
      iconPath: '/icon-5.png',
    },
    {
      title: 'Well organised',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed erat nibh tristique ipsum.',
      iconPath: '/icon-6.png',
    },
  ]
  return (
    <div className="cards-wrapper py-12 lg:py-24">
      <WrapperLayout>
        <div className="flex flex-col gap-16">
          <div className="flex w-full flex-col items-center gap-4 text-center">
            <h2 className="text-4xl font-bold lg:text-5xl">
              Tailor-made features
            </h2>
            <p className="max-w-[800px] text-lg text-zinc-700">
              Lorem ipsum is common placeholder text used to demonstrate the
              graphic elements of a document or visual presentation.
            </p>
          </div>

          <div className="flex w-full flex-wrap items-start justify-between  gap-y-16">
            {cards.map((card) => {
              return (
                <Card
                  className="anim-card flex translate-y-4 flex-col items-center px-4 opacity-0 md:max-w-[329px] lg:max-w-[384px]"
                  key={card.title}
                  title={card.title}
                  description={card.description}
                  iconPath={card.iconPath}
                />
              )
            })}
          </div>
        </div>
      </WrapperLayout>
    </div>
  )
}
