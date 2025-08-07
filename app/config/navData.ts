import { v4 as uuidv4 } from 'uuid';
import { JSX } from 'react';
import CardsNavLayout from '@/app/components/Navbar/CategoriesContent/CardsNavLayout';
import CommonNavLayout from '@/app/components/Navbar/CategoriesContent/CommonNavLayout';
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
  component?: () => JSX.Element;
}

export interface NavCategory {
  name: string;
  component?: () => JSX.Element;
  path?: string;
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
        component: () => CommonNavLayout({
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
        component: () => CommonNavLayout({
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
        component: () => CommonNavLayout({
          title: 'Education',
          description: 'We create custom software solutions for education institutions to improve their operations and provide better learning experiences for students.',
        }),
      },
      {
        name: 'Insurance',
        component: () => CommonNavLayout({
          title: 'Insurance',
          description: 'Engineer ingenious InsurTech solutions and make insurance services more easily accessible. We will help create tools that automate routine tasks, shows outstanding economic resilience and profitability.'
        }),
      },
      {
        name: 'Delivery',
        component: () => CommonNavLayout({
          title: 'Delivery',
          description: 'We provide a full spectrum of services for developing a mobile ordering app, restaurant online ordering systems, and other industry-leading online ordering solutions.'
        }),
      },
      {
        name: 'Automotive',
        component: () => CommonNavLayout({
          title: 'Automotive',
          description: 'Construct elegant and flawless high-tech automotive solutions with us. We will facilitate technology convergence by providing skilled specialists for software development in the automotive industry.'
        }),
      },
    ],
  },
  {
    id: uuidv4(),
    name: 'company',
    label: 'Company',
    path: '/company',
    icon: '/icons/company.svg',
  },
  {
    id: uuidv4(),
    name: 'insights',
    label: 'Insights',
    path: '/insights',
    children: [
      {
        id: uuidv4(),
        name: 'blog',
        label: 'Blog',
        path: '/insights/blog',
        component: () => CardsNavLayout({
          items: [
            {
              title: "Insights Blog",
              description: "article",
              image: "/file.svg",
              path: "/insights/blog/1",
            },
            {
              title: "Delivery Blog",
              description: "article",
              image: "/file.svg",
              path: "/insights/blog/2",
            },
            {
              title: "Sport Blog",
              description: "article",
              image: "/file.svg",
              path: "/insights/blog/3",
            },
          ]
        }),
      },
      {
        id: uuidv4(),
        name: 'news',
        label: 'News',
        path: '/insights/news',
        component: () => CardsNavLayout({
          items: [
            {
              title: "Insights News",
              description: "",
              image: "/globe.svg",
              path: "/insights/news/1",
            },
            {
              title: "Delivery News",
              description: "",
              image: "/globe.svg",
              path: "/insights/news/2",
            },
            {
              title: "Sport News",
              description: "",
              image: "/globe.svg",
              path: "/insights/news/3",
            },
          ]
        }),
      },
      {
        id: uuidv4(),
        name: 'events',
        label: 'Events',
        path: '/insights/events',
        component: () => CommonNavLayout({ title: 'Events', description: 'Coming soon...' }),
      }
    ],
  },
  {
    id: uuidv4(),
    name: 'careers',
    label: 'Careers',
    path: '/careers',
    icon: '/icons/careers.svg',
    categories: [
      {
        name: 'careers',
        component: () => CommonNavLayout({
          title: 'Careers',
          description: 'Be yourself with us!',
        }),
      },
      {
        name: 'Training center',
        component: () => CommonNavLayout({
          title: 'Training center',
          description: 'We are always looking for talented professionals to join our team. If you are passionate about software development and have a proven track record of success, we encourage you to apply for a position at our company.',
        }),
      }
    ]
  },
];