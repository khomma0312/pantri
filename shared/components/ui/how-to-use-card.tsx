import Image from "next/image";

interface HowToUseCardProps {
  image: string;
  title: string;
  description: string;
  step: number;
}

export const HowToUseCard = ({
  image,
  title,
  description,
  step,
}: HowToUseCardProps) => (
  <div className="grid grid-rows-subgrid row-span-3 gap-3 relative w-4/5 mx-auto md:w-full">
    <div className="absolute -top-2 -left-2 z-10 bg-primary-600 text-white text-sm font-bold rounded-full w-8 h-8 flex items-center justify-center">
      {step}
    </div>
    <Image
      src={image}
      alt={title}
      width={220}
      height={99}
      className="rounded-lg object-cover w-full h-auto"
    />
    <h3 className="text-base font-medium">{title}</h3>
    <p className="text-sm text-primary-800">{description}</p>
  </div>
);
