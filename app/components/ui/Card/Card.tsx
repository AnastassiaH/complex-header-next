import Image from "next/image";
import Link from "next/link";

interface CardProps {
  title: string;
  description: string;
  image: string;
  path: string;
}

const Card = ({ title, description, image, path }: CardProps) => {
  return (
    <Link href={path} className="flex justify-center items-center flex-col gap-3">
      <h2>{title}</h2>
      <Image src={image} alt="img" width={70} height={70} />
      <p className="text-gray-400 text-center">{description}</p>
    </Link>
  )
}

export default Card