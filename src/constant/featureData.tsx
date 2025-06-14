import Feature1 from "@/components/icon/Feature1";
import Feature2 from "@/components/icon/Feature2";
import Feature3 from "@/components/icon/Feature3";
import Feature4 from "@/components/icon/Feature4";

import { FeatureType } from "@/types/interface";

export const featureData: FeatureType[] = [
  {
    icon: <Feature1/>, 
    title: "Better Ride Experience",
    description:
      "A user opens the Your Ride app, enters their destination, and selects a ride option.",
  },
  {
    icon: <Feature2/>,
    title: "Better Driver Experience",
    description:
      "A driver accepts the request, and the app provides estimated arrival time and driver details to the user.",
  },
  {
    icon: <Feature3/>,
    title: "Loyalty Program",
    description:
      "The driver picks up the passenger and follows GPS navigation to the destination.",
  },
  {
    icon: <Feature4/>,
    title: "MLM System",
    description:
      "The fare is automatically charged to the user’s payment, and both the rider and driver can rate each other.",
  },
];
