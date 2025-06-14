import { FeatureType } from "@/types/interface";

export function Feature({ icon, title, description }: FeatureType) {
  return (
    <div className="bg-neutral-700/50 p-4 ma::p-6 rounded-lg flex flex-col text-white items-center text-center z-50 transition-transform transform hover:scale-105 hover:bg-neutral-800/70">
      <div className="p-2 sm:p-3 rounded-full mb-4 transition-colors">
        {icon}
      </div>
      <h3
        className={`text-base sm:text-lg font-roboto font-medium mb-2 transition-colors ${
          title ? '' : 'hidden'
        }`}
      >
        {title}
      </h3>
      <p className="text-xs text-white text-opacity-70 font-roboto font-normal sm:text-sm md::text-base xl:text-lg">
        {description}
      </p>
    </div>
  );
}
