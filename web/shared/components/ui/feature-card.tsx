import Image from "next/image";

interface FeatureCardProps {
  icon: string;
  title: string;
  description: string;
}

export const FeatureCard = ({ icon, title, description }: FeatureCardProps) => (
  <div className="bg-white border border-primary-200 rounded-lg p-4 flex flex-col gap-3">
    <Image src={icon} alt={title} width={24} height={24} />
    <h3 className="text-base font-bold">{title}</h3>
    <p className="text-sm text-primary-800">{description}</p>
  </div>
);
