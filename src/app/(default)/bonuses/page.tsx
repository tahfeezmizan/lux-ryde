import BonusesCards from "@/components/Bonuses/bonuses-cards";
import BonusesHeader from "@/components/Bonuses/bonuses-header";
import ReferralBonusCard from "@/components/Bonuses/ReferralBonusCard";


export default function page() {
  return (
    <div>
      <BonusesHeader />
      <BonusesCards />

      <ReferralBonusCard/>
    </div>
  );
}
