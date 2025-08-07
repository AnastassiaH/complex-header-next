import Link from "next/link";
import { v4 as uuidv4 } from 'uuid';
import { Navigation } from "@/app/config/navData";

const navItems: Navigation[] = [
  {
    id: uuidv4(),
    name: 'dedicated-development-team',
    label: 'Dedicated Development Team',
    path: '/services/dedicated-development-team',
  },
  {
    id: uuidv4(),
    name: 'software-product-development',
    label: 'Software Product Development',
    path: '/services/software-product-development',
  },
  {
    id: uuidv4(),
    name: 'custom-web-development',
    label: 'Custom Web Development',
    path: '/services/custom-web-development',
  },
  {
    id: uuidv4(),
    name: 'platform-development',
    label: 'Platform Development',
    path: '/services/platform-development',
  },
  {
    id: uuidv4(),
    name: 'mobile-app-development',
    label: 'Mobile App Development',
    path: '/services/mobile-app-development',
  },
  {
    id: uuidv4(),
    name: 'quality-assurance',
    label: 'Quality Assurance',
    path: '/services/quality-assurance',
  },
  {
    id: uuidv4(),
    name: 'software-architecture-consulting',
    label: 'Software Architecture Consulting',
    path: '/services/software-architecture-consulting',
  },
  {
    id: uuidv4(),
    name: 'blockchain-development-and-consulting-services',
    label: 'Blockchain Development and Consulting Services',
    path: '/services/blockchain-development-and-consulting-services',
  },
]

const ServicesNavLayout = () => {
  return (
    <ul className="flex flex-col flex-wrap gap-6 list-disc" style={{ height: '-webkit-fill-available' }}>
      {navItems.map((item) => (
        <li key={item.id}>
          <Link href={item.path}>{item.label}</Link>
        </li>
      ))}
    </ul>
  );
};

export default ServicesNavLayout;