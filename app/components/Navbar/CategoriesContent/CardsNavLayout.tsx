import { Card } from "@/app/components/ui";

interface CardsNavLayoutProps {
  items: {
    title: string;
    description: string;
    image: string;
    path: string;
  }[];
}

export default function CardsNavLayout({ items }: CardsNavLayoutProps) {
  //get items from server or state manager or props

  return (
    <div className="flex justify-around flex-row gap-6 py-4">
      {items.map((item) => (
        <Card
          key={item.title}
          title={item.title}
          description={item.description}
          image={item.image}
          path={item.path}
        />
      ))}
    </div>
  )
}