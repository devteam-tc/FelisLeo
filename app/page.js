// import { Header } from './components/header'
// import { Hero } from '@/components/hero'
// import { Story } from '@/components/story'
// import { Services } from '@/components/services'
// import { WhyChooseUs } from '@/components/why-choose-us'
// import { LatestVideos } from '@/components/latest-videos'
// import { Announcements } from '@/components/announcements'
// import { CTA } from '@/components/cta'
// import { Footer } from '@/components/footer'

// export default function Page() {
//   return (
//     <div className="min-h-screen bg-black text-white">
//       <Header />
//       <main>
//         <Hero />
//         <Story />
//         <Services />
//         <WhyChooseUs />
//         <LatestVideos />
//         <Announcements />
//         <CTA />
//       </main>
//       <Footer />
//     </div>
//   )
// }

import { Header } from './components/header'
import { Hero } from './components/hero'
import { Story } from './components/story'
import { Services } from './components/services'
import { LatestVideos } from './components/latest-videos'
import { CTA } from './components/cta'
import { Footer } from './components/footer'
import Announcements from './components/announcements'
import CTASection from './components/CTASection'

export default function Page() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <Story />
        <Services />
        <CTA />
        <LatestVideos />
        <Announcements/>
        <CTASection/>

      </main>
      <Footer />
    </div>
  )
}