import { HeroSection } from '@/app/components/HeroSection'
import { TransitionBand } from '@/app/components/TransitionBand'
import { OutsideSection } from '@/app/components/OutsideSection'
import { FocusAreas } from '@/app/components/FocusAreas'
import { FounderStory } from '@/app/components/FounderStory'
import { ImpactStatement } from '@/app/components/ImpactStatement'
import { ImpactSection } from '@/app/components/ImpactSection'
import { LeadershipModel } from '@/app/components/LeadershipModel'
import { NationalReach } from '@/app/components/NationalReach'
import { Testimonial } from '@/app/components/Testimonial'
import { SustainabilitySection } from '@/app/components/SustainabilitySection'
import { MerchSection } from '@/app/components/MerchSection'
import { CallToAction } from '@/app/components/CallToAction'

export default function Home() {
  return (
    <main className="overflow-hidden">
      <HeroSection />
      <TransitionBand />
      <OutsideSection />
      <FocusAreas />
      <FounderStory />
      <ImpactStatement />
      <ImpactSection />
      <LeadershipModel />
      <NationalReach />
      <Testimonial />
      <SustainabilitySection />
      <MerchSection />
      <CallToAction />
    </main>
  )
}

