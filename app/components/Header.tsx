'use client'

import { v4 as uuidv4 } from 'uuid'
import { ContentWrapper } from "./ui";
import Navbar from "./Navbar/Navbar";
import WebDevelopmentBlock from "./Navbar/Sublinks/WebDevelopmentBlock";
import MobileAppsBlock from "./Navbar/Sublinks/MobileAppsBlock";

export type NavItem = {
  id: string;
  label: string;
  path?: string;
  children?: NavItem[];
  contentComponent?: React.FC;
};


const navItems: NavItem[] = [
  {
    id: 'home',
    label: 'Home',
    path: '/',
  },
  {
    id: 'services',
    label: 'Services',
    path: '/services',
    children: [
      {
        id: 'web-development',
        label: 'Web Development',
        contentComponent: WebDevelopmentBlock
      },
      {
        id: 'mobile-apps',
        label: 'Mobile Apps',
        contentComponent: MobileAppsBlock
      },
      {
        id: 'ui-ux-design',
        label: 'UI/UX Design',
      },
      {
        id: 'cloud-solutions',
        label: 'Cloud Solutions',
      },
    ]
  },
  {
    id: 'industries',
    label: 'Industries',
    path: '/industries',
    children: [
      {
        id: 'healthcare',
        label: 'Healthcare',
      },
      {
        id: 'finance',
        label: 'Finance',
      },
      {
        id: 'e-commerce',
        label: 'E-commerce',
      },
      {
        id: 'education',
        label: 'Education',
      },
    ]
  },
  {
    id: 'expertise',
    label: 'Expertise',
    path: '/expertise',
    children: []
  }
];

export default function Header() {
  return (
    <>
      <div className="relative bg-gray-800 w-full">
        <ContentWrapper>
          <div className="hidden md:flex justify-between items-center h-[72px]">
            <h1 className="text-2xl font-bold text-white">Exclusive</h1>
            <Navbar navItems={navItems} />
            <NavActions />
          </div>
          <div className="md:hidden flex justify-between items-center h-[72px]">
            <h1 className="text-2xl font-bold text-white">Exclusive</h1>
            <NavActions />
          </div>
        </ContentWrapper>
      </div>
    </>
  );
}

const NavActions = () => {
  return (
    <div className="flex items-center">
      <button className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded">
        Login
      </button>
    </div>
  );
};
