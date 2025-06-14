import CompanyInfo from '@/components/aboutUsPage/CompanyInfo'
import FounderSection from '@/components/aboutUsPage/FounderSection'
import MeetOurTeam from '@/components/aboutUsPage/MeetOurTeam'
import WhoWeAre from '@/components/aboutUsPage/WhoWeAre'
import React from 'react'

export default function page() {
  return (
    <div>
    <WhoWeAre/>
    <CompanyInfo/>
    <FounderSection/>
    <MeetOurTeam/>

    </div>
  )
}
