'use client'

import { gsap } from 'gsap'
import { useLayoutEffect } from 'react'

import { PlayCircle } from 'lucide-react'
import { Header } from './Header'
import { WrapperLayout } from './WrapperLayout'

export function Hero() {
  useLayoutEffect(() => {
    gsap.to('.anim-headline', {
      duration: 1,
      x: 0,
      opacity: 1,
      ease: 'power2.out',
    })
    gsap.to('.anim-subheadline', {
      duration: 1,
      opacity: 1,
      y: 0,
      delay: 0.3,
      ease: 'power2.out',
    })
    gsap.to('.anim-cel', {
      duration: 1,
      y: 0,
      opacity: 1,
      delay: 0.9,
    })
    gsap.to('.anim-btn', {
      duration: 1,
      scale: 1,
      opacity: 1,
      ease: 'back.out',
      delay: 0.6,
    })
    gsap.to('.anim-btn-2', {
      duration: 1,
      x: 0,
      opacity: 1,
      ease: 'power2.out',
      delay: 0.9,
    })
  }, [])

  return (
    <div className="flex min-h-screen w-full flex-col bg-[url('/bg-hero.jpg')] bg-cover bg-center">
      <WrapperLayout>
        <Header />
        <div className="flex w-full flex-col items-center justify-between gap-10 lg:h-[calc(100vh-72px)] lg:flex-row lg:gap-0">
          <div className="flex max-w-[648px] flex-col py-10 lg:py-0 lg:pb-24">
            <h1 className="anim-headline -translate-x-8 text-4xl font-bold opacity-0 lg:text-6xl lg:leading-[70px]">
              The easiest way to manage projects
            </h1>
            <p className="anim-subheadline -translate-y-4 pb-8 pt-4 text-lg text-zinc-700 opacity-0">
              From the small stuff to the big picture, organizes the work so
              teams know what to do, why it matters, and how to get it done.
            </p>
            <div className="flex items-center">
              <button className="anim-btn scale-125 rounded-lg bg-violet-700 px-6 py-4 font-semibold text-white opacity-0 hover:bg-violet-600">
                Get Started
              </button>
              <button className="anim-btn-2 flex -translate-x-4 items-center gap-2 px-6 py-4 font-semibold text-violet-700 opacity-0 hover:text-violet-600">
                <PlayCircle className="h-6 w-6" /> Watch Video
              </button>
            </div>
          </div>
          <img
            id="teste"
            className="anim-cel translate-y-12 pb-20 opacity-0 lg:pb-0 lg:pr-20"
            src="/smartphone.png"
            alt=""
          />
        </div>
      </WrapperLayout>
    </div>
  )
}
