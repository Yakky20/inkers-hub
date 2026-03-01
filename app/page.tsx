import Header from '@/components/Header'
import HeroSection from '@/components/HeroSection'
import ChallengeSection from '@/components/ChallengeSection'
import TalentCycleSection from '@/components/TalentCycleSection'
import ForTalentsRecruiters from '@/components/ForTalentsRecruiters'
import WhyDifferent from '@/components/WhyDifferent'
import CTABanner from '@/components/CTABanner'
import FooterSection from '@/components/FooterSection'

export default function Home() {
  return (
    <div className="relative flex min-h-screen w-full flex-col overflow-x-hidden">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <ChallengeSection />
        <TalentCycleSection />
        <ForTalentsRecruiters />
        <WhyDifferent />
        <CTABanner />
      </main>
      <FooterSection />
    </div>
  )
}
