'use client'

import { ReviewCard } from './Card'
import { WrapperLayout } from './WrapperLayout'

import { useLayoutEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

export function ReviewCardsSection() {
  const cards = [
    {
      logoPath: '/r-logo-1.png',
      description:
        'To quickly start my startup landing page design, I was looking for a landing page UI Kit. Landify is one of the best landing page UI kit I have come across. It’s so flexible, well organised and easily editable.',
      name: 'Floyd Miles',
      role: 'Vice President, GoPro',
    },
    {
      logoPath: '/r-logo-2.png',
      description:
        'I used landify and created a landing page for my startup within a week. The Landify UI Kit is simple and highly intuitive, so anyone can use it.',
      name: 'Jane Cooper',
      role: 'CEO, Airbnb',
    },
    {
      logoPath: '/r-logo-3.png',
      description: 'Landify saved our time in designing my company page.',
      name: 'Kristin Watson',
      role: 'Co-Founder, Strapi',
    },
  ]

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger)
    gsap.to('.anim-quote', {
      opacity: 1,
      scale: 1,
      scrollTrigger: {
        trigger: '.review-section',
        scrub: true,
        start: 'top 70%',
        end: 'bottom 70%',
      },
    })
    gsap.to('.anim-text', {
      opacity: 1,
      x: 0,
      stagger: 0.3,
      scrollTrigger: {
        trigger: '.review-section',
        start: 'top 60%',
        end: 'bottom 70%',
      },
    })
    gsap.to('.review-section', {
      opacity: 1,
    })
    gsap.to('.anim-review-card', {
      opacity: 1,
      x: 0,
      stagger: 0.3,
      scrollTrigger: {
        trigger: '.review-section',
        start: 'top 40%',
        end: 'bottom 70%',
        scrub: true,
      },
    })
  }, [])

  return (
    <div className="review-section bg-cyan-100 pb-24 pt-32">
      <WrapperLayout>
        <div className="relative w-full lg:max-w-[488px]">
          <img
            className="anim-quote absolute -left-2 -top-9 z-0 w-24 scale-125 opacity-0 lg:-left-[102px] lg:-top-[64px] lg:w-[142px]"
            src="/quote.png"
            alt=""
          />
          <h3 className="anim-text z-20 mb-3 -translate-x-4 text-3xl font-bold opacity-0 md:text-4xl lg:text-5xl">
            Real Stories from Real Customers
          </h3>
          <span className="anim-text -translate-x-4 text-lg opacity-0">
            Get inspired by these stories.
          </span>
        </div>
        <div className="mt-16 flex flex-wrap gap-8 lg:justify-between">
          {cards.map((card) => {
            return (
              <ReviewCard
                className="anim-review-card flex w-full -translate-x-6 flex-col justify-between gap-8 rounded-lg bg-white p-8 opacity-0  shadow-lg lg:max-w-sm"
                description={card.description}
                logoPath={card.logoPath}
                name={card.name}
                role={card.role}
                key={card.name}
              />
            )
          })}
        </div>
      </WrapperLayout>
    </div>
  )
}
