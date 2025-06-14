interface FeatureProps {
    icon: React.ReactNode; // React node for rendering icon/image
    title: string;
    description: string;
  }
  
  export const Safety: React.FC<FeatureProps> = ({ icon, title, description }) => (
    <div className="bg-neutral-700/50 flex text-white flex-col z-10 items-center p-4 border border-[#F1E1A3] border-gray-200 rounded-lg">
      <div className="mb-4">{icon}</div>
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-sm text-gray-600">{description}</p>
    </div>
  );
  