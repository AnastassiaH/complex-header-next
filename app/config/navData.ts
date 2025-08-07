import { v4 as uuidv4 } from 'uuid';
import { JSX } from 'react';
import InsightsNewsBlock from '@/app/components/Navbar/CategoriesContent/InsightsNewsBlock';
import IndustriesNavLayout from '@/app/components/Navbar/CategoriesContent/IndustriesNavLayout';
import ServicesNavLayout from '@/app/components/Navbar/CategoriesContent/ServicesNavLayout';
import ExpertiseNavLayout from '@/app/components/Navbar/CategoriesContent/ExpertiseNavLayout';

export interface Navigation {
  id: string;
  name: string;
  label: string;
  path: string;
  icon?: string | any;
  children?: Navigation[];
  categories?: NavCategory[];
}

export interface NavCategory {
  name: string;
  component?: () => JSX.Element;
}

export const navItems: Navigation[] = [
  {
    id: uuidv4(),
    name: 'services',
    label: 'Services',
    path: '/services',
    icon: '/icons/services.svg',
    categories: [
      {
        name: 'services',
        component: () => ServicesNavLayout()
      }
    ]
  },
  {
    id: uuidv4(),
    name: 'expertise',
    label: 'Expertise',
    path: '/expertise',
    icon: '/icons/expertiese.svg',
    categories: [
      {
        name: 'expertise',
        component: () => ExpertiseNavLayout(),
      },
    ],
  },
  {
    id: uuidv4(),
    name: 'industries',
    label: 'Industries',
    path: '/industries',
    categories: [
      {
        name: 'Healthcare',
        component: () => IndustriesNavLayout({
          title: 'Healthcare and Life Sciences',
          listItems: [
            {
              id: uuidv4(),
              name: 'custom-healthcare-development',
              label: 'Custom Healthcare Development',
              path: '/industries/custom-healthcare-development',
            },
            {
              id: uuidv4(),
              name: 'healthcare-interoperability-solutions',
              label: 'Healthcare Interoperability Solutions',
              path: '/industries/healthcare-interoperability-solutions',
            },
            {
              id: uuidv4(),
              name: 'telemedicine',
              label: 'Telemedicine',
              path: '/industries/telemedicine',
            },
            {
              id: uuidv4(),
              name: 'healthcare-cloud',
              label: 'Healthcare Cloud',
              path: '/industries/healthcare-cloud',
            },
            {
              id: uuidv4(),
              name: 'remote-patient-monitoring',
              label: 'Remote Patient Monitoring',
              path: '/industries/remote-patient-monitoring',
            },
            {
              id: uuidv4(),
              name: 'ehr-emr',
              label: 'EHR & EMR',
              path: '/industries/ehr-emr',
            },
            {
              id: uuidv4(),
              name: 'samd',
              label: 'SaMD',
              path: '/industries/samd',
            },
            {
              id: uuidv4(),
              name: 'digital-therapeutics',
              label: 'Digital Therapeutics',
              path: '/industries/digital-therapeutics',
            },
            {
              id: uuidv4(),
              name: 'pharma-and-life-sciences',
              label: 'Pharma and Life Sciences',
              path: '/industries/pharma-and-life-sciences',
            },
          ],
        }),
      },
      {
        name: 'Fintech',
        component: () => IndustriesNavLayout({
          title: 'Fintech',
          listItems: [
            {
              id: uuidv4(),
              name: 'banking-software-development',
              label: 'Banking Software Development',
              path: '/industries/banking-software-development',
            },
            {
              id: uuidv4(),
              name: 'payment-software-development',
              label: 'Payment Software Development',
              path: '/industries/payment-software-development',
            },
          ],
        }),
      },
      {
        name: 'Education',
        component: () => IndustriesNavLayout({
          title: 'Education',
          description: 'We create custom software solutions for education institutions to improve their operations and provide better learning experiences for students.',
        }),
      },
      {
        name: 'Insurance',
        component: () => IndustriesNavLayout({
          title: 'Insurance',
          description: 'Engineer ingenious InsurTech solutions and make insurance services more easily accessible. We will help create tools that automate routine tasks, shows outstanding economic resilience and profitability.'
        }),
      },
      {
        name: 'Delivery',
        component: () => IndustriesNavLayout({
          title: 'Delivery',
          description: 'We provide a full spectrum of services for developing a mobile ordering app, restaurant online ordering systems, and other industry-leading online ordering solutions.'
        }),
      },
      {
        name: 'Automotive',
        component: () => IndustriesNavLayout({
          title: 'Automotive',
          description: 'Construct elegant and flawless high-tech automotive solutions with Binariks. We will facilitate technology convergence by providing skilled specialists for software development in the automotive industry.'
        }),
      },
    ],
  },
  {
    id: uuidv4(),
    name: 'blog',
    label: 'Blog',
    path: '/blog',
    categories: [
      {
        name: 'blog-posts',
        component: () => InsightsNewsBlock(),
      },
      {
        name: 'blog-categories',
        component: () => InsightsNewsBlock(),
      },
    ],
  },
  {
    id: uuidv4(),
    name: 'about',
    label: 'About',
    path: '/about',
    icon: '/icons/about.svg',
  },
];