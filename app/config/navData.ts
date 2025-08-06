import { v4 as uuidv4 } from 'uuid';
import WebDevelopmentBlock from '../components/Navbar/Sublinks/WebDevelopmentBlock';
import MobileAppsBlock from '../components/Navbar/Sublinks/MobileAppsBlock';

export interface Navigation {
  id: string;
  name: string;
  label: string;
  path: string;
  icon?: string | any;
  component?: React.FC;
  children?: Navigation[];
}

export const navItems: Navigation[] = [
  {
    id: uuidv4(),
    name: 'home',
    label: 'Home',
    path: '/',
    icon: '/icons/home.svg',
  },
  {
    id: uuidv4(),
    name: 'workspace',
    label: 'Workspace',
    path: '/workspace',
    icon: '/icons/workspace.svg',
    children: [
      {
        id: uuidv4(),
        name: 'workspace-dashboard',
        label: 'Dashboard',
        path: '/workspace/dashboard',
        component: WebDevelopmentBlock,
      },
      {
        id: uuidv4(),
        name: 'workspace-projects',
        label: 'Projects',
        path: '/workspace/projects',
        component: MobileAppsBlock,
      },
    ],
  },
  {
    id: uuidv4(),
    name: 'blog',
    label: 'Blog',
    path: '/blog',
    children: [
      {
        id: uuidv4(),
        name: 'blog-posts',
        label: 'All Posts',
        path: '/blog/posts',
      },
      {
        id: uuidv4(),
        name: 'blog-categories',
        label: 'Categories',
        path: '/blog/categories',
        children: [
          {
            id: uuidv4(),
            name: 'category-react',
            label: 'React',
            path: '/blog/category/react',
          },
          {
            id: uuidv4(),
            name: 'category-typescript',
            label: 'TypeScript',
            path: '/blog/category/typescript',
          },
          {
            id: uuidv4(),
            name: 'category-devops',
            label: 'DevOps',
            path: '/blog/category/devops',
          },
        ],
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