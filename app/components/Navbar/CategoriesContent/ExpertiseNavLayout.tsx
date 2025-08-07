import { Navigation } from "@/app/config/navData";
import Link from "next/link";
import { v4 as uuidv4 } from 'uuid';


interface NavItem {
  titleItem: Navigation;
  listItems: Navigation[];
}

const navItems: NavItem[] = [
  {
    titleItem: {
      id: uuidv4(),
      name: 'data-science-and-ai-ml-services',
      label: 'Data Science and AI/ML Services',
      path: '/expertise/data-science-and-ai-ml-services',
    },
    listItems: [
      {
        id: uuidv4(),
        name: 'ai-development-services',
        label: 'AI Development Services',
        path: '/expertise/ai-development-services',
      },
      {
        id: uuidv4(),
        name: 'ml-development-services',
        label: 'ML Development Services',
        path: '/expertise/ml-development-services',
      },
      {
        id: uuidv4(),
        name: 'generative-ai-development-services',
        label: 'Generative AI Development Services',
        path: '/expertise/generative-ai-development-services',
      },
      {
        id: uuidv4(),
        name: 'intelligent-document-processing',
        label: 'Intelligent Document Processing',
        path: '/expertise/intelligent-document-processing',
      },
      {
        id: uuidv4(),
        name: 'data-science-services',
        label: 'Data Science Services',
        path: '/expertise/data-science-services',
      },
    ],
  },
  {
    titleItem: {
      id: uuidv4(),
      name: 'big-data-and-analytics',
      label: 'Big Data and Analytics',
      path: '/expertise/big-data-and-analytics',
    },
    listItems: [
      {
        id: uuidv4(),
        name: 'data-analytics-strategy-consulting',
        label: 'Data Analytics Strategy Consulting',
        path: '/expertise/data-analytics-strategy-consulting',
      },
      {
        id: uuidv4(),
        name: 'data-engineering-services-consulting',
        label: 'Data Engineering Services Consulting',
        path: '/expertise/data-engineering-services-consulting',
      },
      {
        id: uuidv4(),
        name: 'data-governance-services-consulting',
        label: 'Data Governance Services Consulting',
        path: '/expertise/data-governance-services-consulting',
      },
      {
        id: uuidv4(),
        name: 'business-intelligence-services',
        label: 'Business Intelligence Services',
        path: '/expertise/business-intelligence-services',
      },
      {
        id: uuidv4(),
        name: 'data-lake-consulting',
        label: 'Data Lake Consulting',
        path: '/expertise/data-lake-consulting',
      },
      {
        id: uuidv4(),
        name: 'data-warehouse-consulting',
        label: 'Data Warehouse Consulting',
        path: '/expertise/data-warehouse-consulting',
      },
    ],
  },
  {
    titleItem: {
      id: uuidv4(),
      name: 'salesforce-services-and-product-expertise',
      label: 'Salesforce Services and Product Expertise',
      path: '/expertise/salesforce-services-and-product-expertise',
    },
    listItems: [
      {
        id: uuidv4(),
        name: 'IoT',
        label: 'IoT',
        path: '/expertise/iot',
      },
      {
        id: uuidv4(),
        name: 'cloud',
        label: 'Cloud',
        path: '/expertise/cloud',
      },
      {
        id: uuidv4(),
        name: 'aws',
        label: 'AWS',
        path: '/expertise/aws',
      },
      {
        id: uuidv4(),
        name: 'gcp',
        label: 'GCP',
        path: '/expertise/gcp',
      },
      {
        id: uuidv4(),
        name: 'ui-ux',
        label: 'UI / UX',
        path: '/expertise/ui-ux',
      },
    ],
  }
]

const ExpertiseNavLayout = () => {
  return (
    <div className="flex flex-col flex-wrap gap-6 gap-x-20" style={{ height: '-webkit-fill-available' }}>
      {navItems.map((item) => (
        <div key={item.titleItem.id} className="flex flex-col gap-6">
          <Link href={item.titleItem.path} className="text-md font-bold pl-1" >{item.titleItem.label}</Link>
          <ul className="flex flex-col flex-wrap gap-4 list-disc">
            {item.listItems.map((listItem) => (
              <li key={listItem.id}>
                <Link href={listItem.path}>{listItem.label}</Link>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default ExpertiseNavLayout;