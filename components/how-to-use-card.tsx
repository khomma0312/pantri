import Image from "next/image";

interface HowToUseCardProps {
  image: string;
  title: string;
  description: string;
}

export const HowToUseCard = ({
  image,
  title,
  description,
}: HowToUseCardProps) => (
  <div className="flex flex-col gap-3">
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
