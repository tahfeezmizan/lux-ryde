import Image from 'next/image';
import Feature1 from '@/assets/1.png';
import Feature2 from '@/assets/2.png';
import Feature3 from '@/assets/3.png';
import Feature4 from '@/assets/4.png';

// Define a type for the data structure
type FeatureType = {
  icon: JSX.Element;
  description: string;
};

export const bonusData: FeatureType[] = [
  {
    icon: <Image src={Feature1} alt="Feature 1" width={40} height={40} />,
    description: "Share your unique referral link with friends.",
  },
  {
    icon: <Image src={Feature2} alt="Feature 2" width={40} height={40} />,
    description: "They sign up and start using Your Ryde.",
  },
  {
    icon: <Image src={Feature3} alt="Feature 3" width={40} height={40} />,
    description: "You earn a percentage every time they ride.",
  },
  {
    icon: <Image src={Feature4} alt="Feature 4" width={40} height={40} />,
    description: "Earn commissions 10 levels deep in your downline!",
  },
];
