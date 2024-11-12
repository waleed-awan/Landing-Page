'use client'

import Image from 'next/image'
import { WrapperLayout } from './WrapperLayout'

import { useLayoutEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

export function DownloadSection() {
  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger)
    gsap.to('.anim-cel-1', {
      opacity: 1,
      y: 0,
      stagger: 0.2,
      scrollTrigger: {
        trigger: '.download-section',
        start: 'top 10%',
        end: 'bottom 70%',
      },
    })
    gsap.to('.anim-cel-2', {
      opacity: 1,
      y: 0,
      stagger: 0.2,
      scrollTrigger: {
        trigger: '.download-section',
        start: 'top 10%',
        end: 'bottom 70%',
      },
    })
  }, [])
  return (
    <div className="download-section mt-12 w-full overflow-hidden bg-teal-500 lg:mt-0">
      <WrapperLayout>
        <div className="flex flex-col gap-8 lg:flex-row lg:justify-between">
          <div className="flex w-full flex-col pt-12 lg:max-w-[592px] lg:py-48">
            <h3 className="text-3xl font-bold lg:text-5xl">
              Manage all projects from your mobile
            </h3>
            <p className="pb-12 pt-2 lg:text-lg">
              Download the app to manage your projects, keep track of the
              progress and complete tasks without procastinating. Stay on track
              and complete on time!
            </p>
            <span className="pb-8 text-lg font-semibold">Get the app</span>
            <div className="flex items-center gap-3">
              <Image width={135} height={40} alt="" src={'/gplay.png'} />
              <Image width={135} height={40} alt="" src={'/astore.png'} />
            </div>
          </div>

          <div className="flex flex-col gap-0 md:flex-row md:justify-center md:gap-32 lg:gap-8 lg:pl-12">
            <img
              className="anim-cel-1 max-h-[464px] max-w-[232px] -translate-y-16 self-start opacity-0 md:mb-44 lg:-mt-20"
              src="/smart-2.png"
              alt=""
            />
            <img
              className="anim-cel-2 -mb-20 max-h-[464px] max-w-[232px] translate-y-16 self-end opacity-0"
              src="smartphone.png"
              alt=""
            />
          </div>
        </div>
      </WrapperLayout>
    </div>
  )
}
