import { BlogNewsCard } from "@/app/components/ui";

export default function InsightsNewsBlock() {
  // get from a api or state manager or props
  const news = [
    {
      title: "Insights News",
      description: "",
      image: "/globe.svg",
    },
    {
      title: "Delivery News",
      description: "",
      image: "/globe.svg",
    },
    {
      title: "Sport News",
      description: "",
      image: "/globe.svg",
    },
  ];

  return (
    <div className="flex flex-row gap-6">
      {news.map((news) => (
        <BlogNewsCard
          key={news.title}
          title={news.title}
          description={news.description}
          image={news.image}
        />
      ))}
    </div>
  )
}