import { AchievmentsSection } from '@/components/AchievmentsSection'
import { BenefitsSection } from '@/components/BenefitsSection'
import { DefaultSection } from '@/components/DefaultSection'
import { DefaultSectionCard } from '@/components/DefaultSection/Card'
import { DownloadSection } from '@/components/DownloadSection'
import { Footer } from '@/components/Footer'
import { Hero } from '@/components/Hero'
import { IntegrationsSection } from '@/components/IntegrationsSection'
import { LogosSection } from '@/components/LogosSection'
import { ReviewCardsSection } from '@/components/ReviewCardsSection'

export default function Home() {
  return (
    <div className="h-full">
      <Hero />
      <LogosSection />
      <BenefitsSection />
      <ReviewCardsSection />
      <AchievmentsSection />
      <IntegrationsSection />
      <DownloadSection />
      <Footer />
    </div>
  )
}
