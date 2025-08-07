import Image from "next/image";

interface BlogNewsCardProps {
  title: string;
  description: string;
  image: string;
}

const BlogNewsCard = ({ title, description, image }: BlogNewsCardProps) => {
  return (
    <div className="flex flex-col gap-2">
      <h2>{title}</h2>
      <p>{description}</p>
      <Image src={image} alt="img" width={70} height={70} />
    </div>
  )
}

export default BlogNewsCard